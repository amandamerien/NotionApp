import { useState, useRef } from 'react'
import avatarImg from '../assets/avatar-image.svg'
import calendarDotsImg from '../assets/CalendarDots.svg'
import './Tasks.css'

// ── Icons ─────────────────────────────────────────────────────────────────────

function TimerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 14C11.0376 14 13.5 11.5376 13.5 8.5C13.5 5.46243 11.0376 3 8 3C4.96243 3 2.5 5.46243 2.5 8.5C2.5 11.5376 4.96243 14 8 14Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 8.5L10.5 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.5 1H9.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ListIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 5H17" stroke="#242320" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 10H17" stroke="#242320" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 15H17" stroke="#242320" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 1.5V3.5" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 1.5V3.5" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5 5.5H13.5" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 8C8.13807 8 8.25 8.11193 8.25 8.25C8.25 8.38807 8.13807 8.5 8 8.5C7.86193 8.5 7.75 8.38807 7.75 8.25C7.75 8.11193 7.86193 8 8 8Z" fill="#343330" stroke="#242320"/>
      <path d="M10.75 8C10.8881 8 11 8.11193 11 8.25C11 8.38807 10.8881 8.5 10.75 8.5C10.6119 8.5 10.5 8.38807 10.5 8.25C10.5 8.11193 10.6119 8 10.75 8Z" fill="#343330" stroke="#242320"/>
      <path d="M5.25 10.5C5.38807 10.5 5.5 10.6119 5.5 10.75C5.5 10.8881 5.38807 11 5.25 11C5.11193 11 5 10.8881 5 10.75C5 10.6119 5.11193 10.5 5.25 10.5Z" fill="#343330" stroke="#242320"/>
      <path d="M8 10.5C8.13807 10.5 8.25 10.6119 8.25 10.75C8.25 10.8881 8.13807 11 8 11C7.86193 11 7.75 10.8881 7.75 10.75C7.75 10.6119 7.86193 10.5 8 10.5Z" fill="#343330" stroke="#242320"/>
      <path d="M10.75 10.5C10.8881 10.5 11 10.6119 11 10.75C11 10.8881 10.8881 11 10.75 11C10.6119 11 10.5 10.8881 10.5 10.75C10.5 10.6119 10.6119 10.5 10.75 10.5Z" fill="#343330" stroke="#242320"/>
    </svg>
  )
}

function CaretDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ width: 14, height: 14, aspectRatio: '1/1', flexShrink: 0 }}>
      <path d="M11.375 5.25L7 9.625L2.625 5.25" stroke="#5F5B57" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M11.5 3.5H2.5" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 6V9.5" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.5 6V9.5" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 3.5V11.5C10.5 11.776 10.276 12 10 12H4C3.724 12 3.5 11.776 3.5 11.5V3.5" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 3.5V2.5C9 2.224 8.776 2 8.5 2H5.5C5.224 2 5 2.224 5 2.5V3.5" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="6" r="4.5" stroke="#5f5b57" strokeWidth="1.2"/>
      <path d="M6 6V3.5" stroke="#5f5b57" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M6 6L8 7.5" stroke="#5f5b57" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  )
}

function DotsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="4" r="1" fill="#5f5b57"/>
      <circle cx="8" cy="8" r="1" fill="#5f5b57"/>
      <circle cx="8" cy="12" r="1" fill="#5f5b57"/>
    </svg>
  )
}

function PlusIcon({ color = '#242320' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 3V13" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 8H13" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8H13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 4L13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function MicIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10.5 4C10.5 2.61929 9.38071 1.5 8 1.5C6.61929 1.5 5.5 2.61929 5.5 4V8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8V4Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 12.5V15" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 8C12.5 10.2091 10.4853 12 8 12C5.51472 12 3.5 10.2091 3.5 8" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="5" r="2.5" fill="#c5c2be"/>
      <path d="M1.5 13c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5" fill="#c5c2be"/>
    </svg>
  )
}

function AvatarStack({ members = [] }) {
  const visible = members.slice(0, 2)
  const extra = members.length - visible.length
  return (
    <div className="tasks-avatar-stack">
      {visible.map((m, i) => (
        <div key={i} className="tasks-avatar-bubble">
          {m.img
            ? <img src={m.img} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            : <PersonIcon />}
        </div>
      ))}
      {extra > 0 && (
        <div className="tasks-avatar-bubble tasks-avatar-bubble--count">
          <span>+{extra}</span>
        </div>
      )}
    </div>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8H13" stroke="#005bab" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 4L13 8L9 12" stroke="#005bab" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const PT_DAYS_SHORT  = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const PT_DAYS_LONG   = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
const PT_MONTHS      = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

function toISO(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function getWeekDays(today) {
  const dow = today.getDay()
  const todayISO = toISO(today)
  const week = []
  for (let i = 0; i < 7; i++) {
    const d = new Date(today)
    d.setDate(today.getDate() - dow + i)
    week.push({ label: PT_DAYS_SHORT[i], date: d.getDate(), isToday: i === dow, iso: toISO(d), dayIndex: i })
  }
  return week
}

const CATEGORY_STYLES = {
  trabalho: { bg: 'rgba(230,243,254,0.6)', border: '#c8dff5', dotColor: '#005bab', textColor: '#005bab', label: 'Trabalho' },
  esporte:  { bg: 'rgba(208,244,216,0.7)', border: '#b8edca', dotColor: '#14832b', textColor: '#0f6220', label: 'Esporte' },
  saude:    { bg: 'rgba(255,205,241,0.7)', border: '#f5c0e8', dotColor: '#9d2472', textColor: '#9d2472', label: 'Saúde' },
  estudo:   { bg: 'rgba(255,237,180,0.7)', border: '#f0d890', dotColor: '#a07700', textColor: '#8a6500', label: 'Estudo' },
  foco:     { bg: 'rgba(220,210,255,0.7)', border: '#cbbff5', dotColor: '#5b3fc4', textColor: '#4a31a8', label: 'Foco' },
  pessoal:  { bg: 'rgba(255,218,200,0.7)', border: '#f5c4a8', dotColor: '#c45a28', textColor: '#a84820', label: 'Pessoal' },
  casa:     { bg: 'rgba(180,230,225,0.7)', border: '#9dd4ce', dotColor: '#1a7a72', textColor: '#156860', label: 'Casa' },
  outros:   { bg: 'rgba(230,228,225,0.7)', border: '#d0cec9', dotColor: '#78736f', textColor: '#5f5b57', label: 'Outros' },
}

// ── Main component ────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 6L5 9L10 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Tasks({ tasks = [], onFalar = () => {}, onClear = () => {}, onTaskClick = () => {}, onPomodoro = () => {}, onSharedTasks = () => {}, onHome = () => {}, onTyped }) {
  const today = new Date()
  const todayISO = toISO(today)
  const [selectedDate, setSelectedDate] = useState(todayISO)
  const [completed, setCompleted] = useState(new Set())
  const [showMenu, setShowMenu] = useState(false)
  const [promptText, setPromptText] = useState('')
  const promptInputRef = useRef(null)

  function handlePromptSubmit() {
    const t = promptText.trim()
    if (t) { onTyped && onTyped(t); setPromptText('') }
  }

  function toggleComplete(key) {
    setCompleted(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  const weekDays = getWeekDays(today)
  const selectedDayObj = weekDays.find(d => d.iso === selectedDate) || weekDays.find(d => d.isToday)
  const displayDayName = PT_DAYS_LONG[selectedDayObj?.dayIndex ?? today.getDay()]
  const monthYear = `${PT_MONTHS[today.getMonth()]} ${today.getFullYear()}`

  const filteredTasks = tasks.filter(t => {
    const taskDate = t.date || todayISO
    return taskDate === selectedDate
  })

  const sharedTasks = filteredTasks.filter(t => t.members && t.members.length > 0)

  return (
    <div className="tasks">
      {/* Header */}
      <header className="tasks-header">
        <div className="tasks-user-info">
          <div className="tasks-avatar">
            <img src={avatarImg} alt="Avatar" className="tasks-avatar-img" />
          </div>
          <div className="tasks-user-text">
            <p className="tasks-user-name">Amanda Merien</p>
            <p className="tasks-user-email">contato@amandamerien.com</p>
          </div>
        </div>
        <div className="tasks-toolbar">
          <button className="tasks-pomodoro-btn" type="button" onClick={onPomodoro}>
            <TimerIcon />
            <span>Pomodoro</span>
          </button>
          <div className="tasks-menu-wrap">
            <button className="tasks-menu-btn" type="button" onClick={() => setShowMenu(v => !v)}>
              <ListIcon />
            </button>
            {showMenu && (
              <>
                <div className="tasks-menu-backdrop" onClick={() => setShowMenu(false)} />
                <div className="tasks-menu-dropdown">
                  <button className="tasks-menu-item" type="button" onClick={() => { setShowMenu(false); onHome() }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 6.5L8 2L14 6.5V13.5C14 13.7761 13.7761 14 13.5 14H10V10H6V14H2.5C2.22386 14 2 13.7761 2 13.5V6.5Z" stroke="#242320" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>Início</span>
                  </button>
                  <button className="tasks-menu-item" type="button" onClick={() => setShowMenu(false)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2.5 4.5H13.5" stroke="#242320" strokeWidth="1.3" strokeLinecap="round"/><path d="M2.5 8H13.5" stroke="#242320" strokeWidth="1.3" strokeLinecap="round"/><path d="M2.5 11.5H8.5" stroke="#242320" strokeWidth="1.3" strokeLinecap="round"/></svg>
                    <span>Minhas tarefas</span>
                  </button>
                  <button className="tasks-menu-item tasks-menu-item--danger" type="button" onClick={() => setShowMenu(false)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 14H3C2.72386 14 2.5 13.7761 2.5 13.5V2.5C2.5 2.22386 2.72386 2 3 2H6" stroke="#b94040" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.5 11L13.5 8L10.5 5" stroke="#b94040" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.5 8H6" stroke="#b94040" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>Sair</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Scrollable content */}
      <div className="tasks-content">
        {/* Calendar section */}
        <div className="tasks-calendar-section">
          {/* Calendar header */}
          <div className="tasks-calendar-header">
            <div className="tasks-day-label">
              <CalendarIcon />
              <span className="tasks-day-name">{displayDayName}</span>
            </div>
            <div className="tasks-month-label">
              <span className="tasks-month-text">{monthYear}</span>
              <CaretDownIcon />
            </div>
          </div>

          {/* Week strip */}
          <div className="tasks-week-strip">
            {weekDays.map((d, i) => (
              <div
                key={i}
                className={`tasks-day-cell${d.iso === selectedDate ? ' tasks-day-cell--today' : ''}`}
                onClick={() => setSelectedDate(d.iso)}
                style={{ cursor: 'pointer' }}
              >
                <span className="tasks-day-letter">{d.label}</span>
                <span className="tasks-day-num">{d.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visão geral */}
        <div className="tasks-overview">
          <span className="tasks-overview-title">Visão geral</span>
          <div className="tasks-overview-cards">
            <div className="tasks-overview-card">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="3" stroke="#242320" strokeWidth="1.4"/><path d="M7 10L9.5 12.5L13.5 8" stroke="#242320" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="tasks-overview-num">{tasks.length}</span>
              <span className="tasks-overview-label">Total</span>
            </div>
            <div className="tasks-overview-card">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="#242320" strokeWidth="1.4"/><path d="M10 10V5" stroke="#242320" strokeWidth="1.4" strokeLinecap="round"/><path d="M10 10L14 12.5" stroke="#242320" strokeWidth="1.4" strokeLinecap="round"/></svg>
              <span className="tasks-overview-num">{tasks.length - completed.size}</span>
              <span className="tasks-overview-label">Pendentes</span>
            </div>
            <div className="tasks-overview-card">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="#242320" strokeWidth="1.4"/><path d="M7 10L9.5 12.5L13.5 8" stroke="#242320" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="tasks-overview-num">{completed.size}</span>
              <span className="tasks-overview-label">Concluídas</span>
            </div>
          </div>
        </div>

        {/* Tasks section */}
        <div className="tasks-section">
          <div className="tasks-section-header">
            <div className="tasks-section-title-row">
              <span className="tasks-section-title">Suas tarefas</span>
              <div className="tasks-counter"><span>{filteredTasks.length}</span></div>
            </div>
            {tasks.length > 0 && (
              <button className="tasks-clear-btn" type="button" onClick={onClear}>
                <TrashIcon />
                <span>Limpar</span>
              </button>
            )}
          </div>

          <div className="tasks-list-container">
            {filteredTasks.length === 0 ? (
              <p className="tasks-empty">Nenhuma tarefa para este dia.</p>
            ) : (
              filteredTasks.map((task, idx) => {
                const s = CATEGORY_STYLES[task.category] || CATEGORY_STYLES.trabalho
                const key = `${selectedDate}-${idx}`
                const done = completed.has(key)
                const hasMembers = task.members && task.members.length > 0
                return (
                  <div
                    key={idx}
                    className={`tasks-item${idx === filteredTasks.length - 1 ? ' tasks-item--last' : ''}`}
                    onClick={() => onTaskClick(task)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="tasks-item-info">
                      <div className="tasks-item-checkbox-row">
                        <button
                          type="button"
                          className={`tasks-item-checkbox${done ? ' tasks-item-checkbox--done' : ''}`}
                          onClick={e => { e.stopPropagation(); toggleComplete(key) }}
                        >
                          {done && <CheckIcon />}
                        </button>
                        <span className={`tasks-item-title${done ? ' tasks-item-title--done' : ''}`}>{task.title}</span>
                      </div>
                      {task.time && (
                        <div className="tasks-item-time-row">
                          <ClockIcon />
                          <span className="tasks-item-time">{task.time}</span>
                        </div>
                      )}
                    </div>
                    <div className="tasks-item-right">
                      {hasMembers ? (
                        <AvatarStack members={task.members} />
                      ) : (
                        <div className="tasks-category-tag" style={{ background: s.bg, borderColor: s.border }}>
                          <div className="tasks-category-dot" style={{ background: s.dotColor }} />
                          <span className="tasks-category-label" style={{ color: s.textColor }}>{s.label}</span>
                        </div>
                      )}
                      <button className="tasks-item-dots" type="button" onClick={e => e.stopPropagation()}><DotsIcon /></button>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>

        {/* Shared tasks section */}
        <div className="tasks-section">
          <div className="tasks-section-header">
            <div className="tasks-section-title-row">
              <span className="tasks-section-title">Tarefas compartilhadas</span>
              <div className="tasks-counter"><span>{sharedTasks.length}</span></div>
            </div>
          </div>

          {sharedTasks.length > 0 ? (
            <div className="tasks-list-container">
              {sharedTasks.map((task, idx) => {
                const s = CATEGORY_STYLES[task.category] || CATEGORY_STYLES.trabalho
                const key = `shared-${selectedDate}-${idx}`
                const done = completed.has(key)
                return (
                  <div
                    key={idx}
                    className={`tasks-item${idx === sharedTasks.length - 1 ? ' tasks-item--last' : ''}`}
                    onClick={() => onTaskClick(task)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="tasks-item-info">
                      <div className="tasks-item-checkbox-row">
                        <button
                          type="button"
                          className={`tasks-item-checkbox${done ? ' tasks-item-checkbox--done' : ''}`}
                          onClick={e => { e.stopPropagation(); toggleComplete(key) }}
                        >
                          {done && <CheckIcon />}
                        </button>
                        <span className={`tasks-item-title${done ? ' tasks-item-title--done' : ''}`}>{task.title}</span>
                      </div>
                      {task.time && (
                        <div className="tasks-item-time-row">
                          <ClockIcon />
                          <span className="tasks-item-time">{task.time}</span>
                        </div>
                      )}
                    </div>
                    <div className="tasks-item-right">
                      <AvatarStack members={task.members} />
                      <button className="tasks-item-dots" type="button" onClick={e => e.stopPropagation()}><DotsIcon /></button>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="tasks-shared-card">
              <div className="tasks-shared-illustration">
                <img src={calendarDotsImg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="tasks-shared-info">
                <div>
                  <p className="tasks-shared-title">Organize junto</p>
                  <p className="tasks-shared-subtitle">Compartilhe tarefas com quem faz parte da sua rotina.</p>
                </div>
                <button className="tasks-shared-invite" type="button" onClick={onSharedTasks}>
                  <span>Convidar amigo</span>
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Prompt bar */}
      <div className="tasks-prompt-bar">
        <div className="tasks-prompt-card">
          <label htmlFor="tasks-prompt-input" className="tasks-prompt-label">
            <input
              id="tasks-prompt-input"
              ref={promptInputRef}
              className="tasks-prompt-input"
              value={promptText}
              onChange={e => setPromptText(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handlePromptSubmit()}
              placeholder="Conte o que precisa organizar hoje"
            />
          </label>
          <div className="tasks-prompt-actions">
            <button className="tasks-prompt-add" type="button" onClick={e => e.stopPropagation()}>
              <PlusIcon />
            </button>
            {promptText.trim() ? (
              <button className="tasks-prompt-speak" type="button" onClick={e => { e.stopPropagation(); handlePromptSubmit() }}>
                <SendIcon />
                <span>Enviar</span>
              </button>
            ) : (
              <button className="tasks-prompt-speak" type="button" onClick={e => { e.stopPropagation(); onFalar() }}>
                <MicIcon />
                <span>Falar</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
