import { useState, useRef, useEffect, useCallback } from 'react'
import './DatePickerSheet.css'

const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
]

const ITEM_H = 44
const PAD = 2 // padding items above/below for centering

function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function DrumColumn({ items, selectedIndex, onSelect, flex, align = 'center' }) {
  const ref = useRef()
  const debounceRef = useRef()
  const programmaticRef = useRef(false)

  useEffect(() => {
    if (!ref.current) return
    programmaticRef.current = true
    ref.current.scrollTop = selectedIndex * ITEM_H
    const t = setTimeout(() => { programmaticRef.current = false }, 300)
    return () => clearTimeout(t)
  }, [selectedIndex, items])

  const handleScroll = useCallback(() => {
    if (programmaticRef.current) return
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      if (!ref.current) return
      const raw = Math.round(ref.current.scrollTop / ITEM_H)
      const idx = Math.max(0, Math.min(raw, items.length - 1))
      ref.current.scrollTop = idx * ITEM_H
      onSelect(idx)
    }, 80)
  }, [items.length, onSelect])

  return (
    <div className="dp-col-wrap" style={{ flex }}>
      <div className="dp-col" ref={ref} onScroll={handleScroll}>
        {Array.from({ length: PAD }).map((_, i) => (
          <div key={`t${i}`} className="dp-item dp-item--pad" />
        ))}
        {items.map((item, i) => (
          <div key={i} className="dp-item" style={{ justifyContent: align }}>{item}</div>
        ))}
        {Array.from({ length: PAD }).map((_, i) => (
          <div key={`b${i}`} className="dp-item dp-item--pad" />
        ))}
      </div>
    </div>
  )
}

export default function DatePickerSheet({ value, onConfirm, onClose }) {
  const now = new Date()
  const initial = value ? new Date(value + 'T12:00:00') : now
  const [month, setMonth] = useState(initial.getMonth())
  const [day, setDay] = useState(initial.getDate())
  const [year, setYear] = useState(initial.getFullYear())

  const currentYear = now.getFullYear()
  const years = Array.from({ length: 11 }, (_, i) => currentYear - 5 + i)

  const maxDay = daysInMonth(year, month)
  const days = Array.from({ length: maxDay }, (_, i) => String(i + 1).padStart(2, '0'))
  const effectiveDay = Math.min(day, maxDay)

  function handleConfirm() {
    const iso = `${year}-${String(month + 1).padStart(2, '0')}-${String(effectiveDay).padStart(2, '0')}`
    onConfirm(iso)
  }

  return (
    <div className="dp-overlay" onClick={onClose}>
      <div className="dp-sheet" onClick={e => e.stopPropagation()}>
        <div className="dp-handle-row">
          <div className="dp-handle-pill" />
        </div>
        <div className="dp-header">
          <button className="dp-btn-cancel" type="button" onClick={onClose}>Cancelar</button>
          <span className="dp-title">Selecionar data</span>
          <button className="dp-btn-confirm" type="button" onClick={handleConfirm}>Confirmar</button>
        </div>

        <div className="dp-drum">
          <div className="dp-band" />
          <div className="dp-fade-top" />
          <div className="dp-fade-bot" />

          <DrumColumn
            items={MONTHS}
            selectedIndex={month}
            onSelect={setMonth}
            flex={3}
            align="flex-end"
          />
          <DrumColumn
            items={days}
            selectedIndex={effectiveDay - 1}
            onSelect={idx => setDay(idx + 1)}
            flex={1.2}
            align="center"
          />
          <DrumColumn
            items={years.map(String)}
            selectedIndex={year - (currentYear - 5)}
            onSelect={idx => setYear(currentYear - 5 + idx)}
            flex={2}
            align="flex-start"
          />
        </div>
      </div>
    </div>
  )
}
