import { useState, useRef } from 'react'
import avatarImg from '../assets/avatar-image.svg'
import calendarDotsImg from '../assets/CalendarDots.svg'
import './Tasks.css'

// ── Icons ─────────────────────────────────────────────────────────────────────

function TimerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 14C11.0376 14 13.5 11.5376 13.5 8.5C13.5 5.46243 11.0376 3 8 3C4.96243 3 2.5 5.46243 2.5 8.5C2.5 11.5376 4.96243 14 8 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 8.5L10.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.5 1H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ListIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 1.5V3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 1.5V3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5 5.5H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 8C8.13807 8 8.25 8.11193 8.25 8.25C8.25 8.38807 8.13807 8.5 8 8.5C7.86193 8.5 7.75 8.38807 7.75 8.25C7.75 8.11193 7.86193 8 8 8Z" fill="currentColor" stroke="currentColor"/>
      <path d="M10.75 8C10.8881 8 11 8.11193 11 8.25C11 8.38807 10.8881 8.5 10.75 8.5C10.6119 8.5 10.5 8.38807 10.5 8.25C10.5 8.11193 10.6119 8 10.75 8Z" fill="currentColor" stroke="currentColor"/>
      <path d="M5.25 10.5C5.38807 10.5 5.5 10.6119 5.5 10.75C5.5 10.8881 5.38807 11 5.25 11C5.11193 11 5 10.8881 5 10.75C5 10.6119 5.11193 10.5 5.25 10.5Z" fill="currentColor" stroke="currentColor"/>
      <path d="M8 10.5C8.13807 10.5 8.25 10.6119 8.25 10.75C8.25 10.8881 8.13807 11 8 11C7.86193 11 7.75 10.8881 7.75 10.75C7.75 10.6119 7.86193 10.5 8 10.5Z" fill="currentColor" stroke="currentColor"/>
      <path d="M10.75 10.5C10.8881 10.5 11 10.6119 11 10.75C11 10.8881 10.8881 11 10.75 11C10.6119 11 10.5 10.8881 10.5 10.75C10.5 10.6119 10.6119 10.5 10.75 10.5Z" fill="currentColor" stroke="currentColor"/>
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
      <path d="M11.5 3.5H2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 6V9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.5 6V9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 3.5V11.5C10.5 11.776 10.276 12 10 12H4C3.724 12 3.5 11.776 3.5 11.5V3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 3.5V2.5C9 2.224 8.776 2 8.5 2H5.5C5.224 2 5 2.224 5 2.5V3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
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
      <path d="M10.5 4C10.5 2.61929 9.38071 1.5 8 1.5C6.61929 1.5 5.5 2.61929 5.5 4V8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8V4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 12.5V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 8C12.5 10.2091 10.4853 12 8 12C5.51472 12 3.5 10.2091 3.5 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
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

export default function Tasks({ tasks = [], user, onFalar = () => {}, onClear = () => {}, onTaskClick = () => {}, onPomodoro = () => {}, onSharedTasks = () => {}, onHome = () => {}, onConfig = () => {}, onTyped, onSignOut }) {
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
            <img src={user?.photoURL || avatarImg} alt="Avatar" className="tasks-avatar-img" />
          </div>
          <div className="tasks-user-text">
            <p className="tasks-user-name">{user?.displayName || 'Amanda Merien'}</p>
            <p className="tasks-user-email">{user?.email || 'contato@amandamerien.com'}</p>
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
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 8.6001V21.0001H20V8.6001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 10L12 3L22 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 21V15C15 13.895 14.105 13 13 13H11C9.895 13 9 13.895 9 15V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>Home</span>
                  </button>
                  <button className="tasks-menu-item" type="button" onClick={() => setShowMenu(false)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12.9524 15.0432H16.9541" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="2.99625" y="2.99609" width="18.0075" height="18.0075" rx="5" stroke="currentColor" strokeWidth="1.5"/><path d="M6.94989 14.769L7.86927 15.5974L9.72104 13.9307" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.9524 10.0412H16.9541" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.94989 9.76706L7.86927 10.5954L9.72004 8.92871" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>Minhas tarefas</span>
                  </button>
                  <button className="tasks-menu-item" type="button" onClick={() => { setShowMenu(false); onPomodoro() }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M17.657 7.343C20.781 10.467 20.781 15.533 17.657 18.657C14.533 21.781 9.467 21.781 6.343 18.657C3.219 15.533 3.219 10.467 6.343 7.343C9.467 4.219 14.533 4.219 17.657 7.343" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.5 12.998C12.5 12.722 12.276 12.499 12 12.5C11.724 12.501 11.5 12.725 11.5 13.001C11.5 13.277 11.723 13.5 11.999 13.5C12.275 13.5 12.499 13.276 12.5 12.999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 9V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 2H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 6L19 4L20 5L17.657 7.343" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>Pomodoro</span>
                  </button>
                  <button className="tasks-menu-item" type="button" onClick={() => { setShowMenu(false); onSharedTasks() }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 18C3 15.791 4.791 14 7 14H11C13.209 14 15 15.791 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 4.65088C17.381 4.65088 18.5 5.76988 18.5 7.15088C18.5 8.53188 17.381 9.65088 16 9.65088" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.4049 4.99613C12.7331 6.3243 12.7331 8.4777 11.4049 9.80587C10.0767 11.134 7.92333 11.134 6.59516 9.80587C5.26699 8.4777 5.26699 6.3243 6.59516 4.99613C7.92333 3.66796 10.0767 3.66796 11.4049 4.99613" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 13C19.209 13 21 14.791 21 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>Compartilhamentos</span>
                  </button>
                  <button className="tasks-menu-item" type="button" onClick={() => { setShowMenu(false); onConfig() }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M4.506 10.6982V10.6982C3.72954 9.82268 3.60047 8.54849 4.18557 7.535L4.22596 7.465C4.81108 6.45153 5.97906 5.92618 7.12555 6.16077H7.12566C7.59563 6.25694 8.08456 6.1776 8.5 5.93774V5.93774C8.91543 5.69789 9.2286 5.31414 9.3803 4.85906V4.85906C9.75038 3.74885 10.7894 3 11.9596 3H12.0404C13.2107 3 14.2496 3.74885 14.6197 4.85906V4.85906C14.7714 5.31414 15.0846 5.69788 15.5 5.93773V5.93773C15.9154 6.1776 16.4044 6.25695 16.8744 6.16078H16.8745C18.0209 5.92621 19.1889 6.45156 19.774 7.465L19.8144 7.535C20.3995 8.54849 20.2705 9.82271 19.494 10.6983V10.6983C19.1757 11.0572 19 11.5203 19 12V12C19 12.4797 19.1758 12.9428 19.4941 13.3018V13.3018C20.2705 14.1773 20.3996 15.4516 19.8144 16.465L19.774 16.5351C19.1889 17.5485 18.0209 18.0739 16.8745 17.8393L16.8742 17.8392C16.4043 17.7431 15.9154 17.8224 15.5 18.0622V18.0622C15.0846 18.302 14.7714 18.6858 14.6197 19.1409V19.1409C14.2496 20.2511 13.2106 21 12.0403 21H11.9597C10.7894 21 9.75039 20.2511 9.38029 19.1408V19.1408C9.2286 18.6858 8.91544 18.302 8.5 18.0622V18.0622C8.08461 17.8224 7.59576 17.743 7.12585 17.8392L7.12555 17.8392C5.97907 18.0738 4.81111 17.5485 4.226 16.535L4.1856 16.465C3.60046 15.4515 3.72952 14.1773 4.50598 13.3017V13.3017C4.82425 12.9428 4.99999 12.4797 5 12V12C5.00001 11.5203 4.82427 11.0572 4.506 10.6982Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>Configurações</span>
                  </button>
                  <div className="tasks-menu-divider" />
                  <button className="tasks-menu-item tasks-menu-item--danger" type="button" onClick={() => { setShowMenu(false); onSignOut && onSignOut() }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M11 19.392V7.50298C11 6.81298 10.645 6.17198 10.06 5.80698L6.06 3.30698C4.728 2.47498 3 3.43198 3 5.00298V16.891C3 17.581 3.355 18.222 3.94 18.587L7.94 21.087C9.272 21.92 11 20.962 11 19.392Z" stroke="#b94040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 11H21" stroke="#b94040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 13L21 11L19 9" stroke="#b94040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 19H15C16.105 19 17 18.105 17 17V16" stroke="#b94040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 6V5C17 3.895 16.105 3 15 3H5" stroke="#b94040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
