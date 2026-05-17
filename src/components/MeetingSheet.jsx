import { useState } from 'react'
import './MeetingSheet.css'

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M14.625 2.8125H3.375C2.96079 2.8125 2.625 3.14829 2.625 3.5625V14.8125C2.625 15.2267 2.96079 15.5625 3.375 15.5625H14.625C15.0392 15.5625 15.375 15.2267 15.375 14.8125V3.5625C15.375 3.14829 15.0392 2.8125 14.625 2.8125Z" stroke="#78736f" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.375 1.6875V3.9375" stroke="#78736f" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.625 1.6875V3.9375" stroke="#78736f" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.625 6.1875H15.375" stroke="#78736f" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z" stroke="#78736f" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 5.25V9L11.625 11.25" stroke="#78736f" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M6.375 11.25C8.37914 11.25 9.99994 9.6292 9.99994 7.625C9.99994 5.6208 8.37914 4 6.375 4C4.37086 4 2.75 5.6208 2.75 7.625C2.75 9.6292 4.37086 11.25 6.375 11.25Z" stroke="#78736f" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 14.625C1.53039 13.7795 2.26507 13.0822 3.13607 12.5994C4.00707 12.1165 4.98464 11.8633 5.97875 11.8633C6.97286 11.8633 7.95043 12.1165 8.82143 12.5994C9.69243 13.0822 10.4271 13.7795 10.9575 14.625" stroke="#78736f" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.125 11.25C13.1191 11.2494 14.0967 11.5022 14.9677 11.9849C15.8387 12.4676 16.5734 13.1648 17.1038 14.0103" stroke="#78736f" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.0469 4.20703C11.5394 4.01303 12.0688 3.93132 12.5976 3.96789C13.1264 4.00447 13.6395 4.15839 14.1001 4.41853C14.5607 4.67867 14.9576 5.03886 15.2616 5.47322C15.5657 5.90759 15.769 6.40537 15.8571 6.92998C15.9452 7.45459 15.9159 7.99248 15.7713 8.50424C15.6267 9.016 15.3703 9.48862 15.0211 9.88796C14.6718 10.2873 14.2383 10.6036 13.7513 10.8138C13.2643 11.024 12.7361 11.1228 12.2056 11.1031" stroke="#78736f" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M6.75 9.75C6.75 8.95435 7.06607 8.19129 7.62868 7.62868C8.19129 7.06607 8.95435 6.75 9.75 6.75L11.25 9.75L10.095 11.4816C10.5532 12.5763 11.4237 13.4468 12.5184 13.905L14.25 12.75L17.25 14.25C17.25 15.0456 16.9339 15.8087 16.3713 16.3713C15.8087 16.9339 15.0456 17.25 14.25 17.25C12.2609 17.25 10.3532 16.4598 8.9467 15.0533C7.54018 13.6468 6.75 11.7391 6.75 9.75Z" fill="#14832B"/>
      <path d="M7.49356 19.7914C9.38406 20.8856 11.608 21.2549 13.7506 20.8304C15.8933 20.406 17.8084 19.2168 19.1391 17.4846C20.4697 15.7524 21.125 13.5954 20.9827 11.4157C20.8404 9.23605 19.9103 7.18253 18.3657 5.638C16.8212 4.09348 14.7677 3.16336 12.588 3.02108C10.4084 2.87879 8.25138 3.53405 6.51916 4.86468C4.78695 6.1953 3.59777 8.11048 3.17333 10.2531C2.74889 12.3958 3.11817 14.6197 4.21231 16.5102L3.0395 20.0118C2.99543 20.1439 2.98903 20.2857 3.02103 20.4213C3.05302 20.5569 3.12215 20.6808 3.22065 20.7794C3.31915 20.8779 3.44314 20.947 3.57871 20.979C3.71429 21.011 3.8561 21.0046 3.98825 20.9605L7.49356 19.7914Z" stroke="#14832B" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function localISO(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function formatDisplayDate(iso) {
  if (!iso) return 'Selecionar'
  const [y, m, d] = iso.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  return `${days[date.getDay()]}, ${String(d).padStart(2, '0')}/${String(m).padStart(2, '0')}`
}

function formatDisplayTime(t) {
  if (!t) return 'Selecionar'
  return t
}

export default function MeetingSheet({ onClose, onConfirm }) {
  const [name, setName] = useState('')
  const [date, setDate] = useState(localISO(new Date()))
  const [time, setTime] = useState('')
  const [phone, setPhone] = useState('')

  function handleCreate() {
    if (!name.trim()) return
    const task = {
      title: name.trim(),
      date,
      time: time || null,
      category: 'trabalho',
      type: 'team',
      shared: true,
      teamPhone: phone,
    }
    if (onConfirm) onConfirm([task])
    onClose()
  }

  return (
    <div className="meeting-overlay" onClick={onClose}>
      <div className="meeting-sheet" onClick={e => e.stopPropagation()}>
        <div className="meeting-handle-row">
          <div className="meeting-handle-pill" />
        </div>

        <div className="meeting-body">
          <h2 className="meeting-heading">Nova reunião</h2>

          {/* Name */}
          <div className="meeting-name-field">
            <input
              className="meeting-name-input"
              type="text"
              placeholder="Nome da reunião"
              value={name}
              onChange={e => setName(e.target.value)}
              autoFocus
            />
          </div>

          {/* Date */}
          <div className="meeting-row-card">
            <div className="meeting-row-left">
              <CalendarIcon />
              <span className="meeting-row-label">Data</span>
            </div>
            <span className={`meeting-row-value${date ? '' : ' meeting-row-value--empty'}`}>
              {formatDisplayDate(date)}
            </span>
            <input
              type="date"
              className="meeting-date-input"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>

          {/* Time */}
          <div className="meeting-row-card">
            <div className="meeting-row-left">
              <ClockIcon />
              <span className="meeting-row-label">Hora</span>
            </div>
            <span className={`meeting-row-value${time ? '' : ' meeting-row-value--empty'}`}>
              {formatDisplayTime(time)}
            </span>
            <input
              type="time"
              className="meeting-date-input"
              value={time}
              onChange={e => setTime(e.target.value)}
            />
          </div>

          {/* Participants */}
          <div className="meeting-participants">
            <p className="meeting-participants-label">
              <UsersIcon />
              <span>Participantes</span>
            </p>
            <div className="meeting-phone-row">
              <input
                className="meeting-phone-input"
                type="tel"
                inputMode="tel"
                placeholder="Nº do Whatsapp"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
              <WhatsAppIcon />
            </div>
          </div>

          {/* Actions */}
          <button
            className={`meeting-btn-primary${!name.trim() ? ' meeting-btn-primary--disabled' : ''}`}
            type="button"
            onClick={handleCreate}
            disabled={!name.trim()}
          >
            Criar reunião
          </button>

          <button className="meeting-btn-cancel" type="button" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}
