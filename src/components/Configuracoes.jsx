import { useState } from 'react'
import avatarImg from '../assets/avatar-image.svg'
import './Configuracoes.css'

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M12 4L4 12M4 4L12 12" stroke="#242320" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="#78736f" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 20C4 17.791 7.582 16 12 16C16.418 16 20 17.791 20 20" stroke="#78736f" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="#78736f" strokeWidth="1.5"/>
      <path d="M3 9L12 14L21 9" stroke="#78736f" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M6 10C6 7.791 7.791 6 10 6H14C16.209 6 18 7.791 18 10V17H6V10Z" stroke="#78736f" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M4 17H20" stroke="#78736f" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 17C10 18.105 10.895 19 12 19C13.105 19 14 18.105 14 17" stroke="#78736f" strokeWidth="1.5"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="#78736f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function LanguageIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#78736f" strokeWidth="1.5"/>
      <path d="M12 3C12 3 9 7 9 12C9 17 12 21 12 21" stroke="#78736f" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 3C12 3 15 7 15 12C15 17 12 21 12 21" stroke="#78736f" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 12H21" stroke="#78736f" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="3" width="14" height="14" rx="3" stroke="#242320" strokeWidth="1.4"/>
      <path d="M7 10L9.5 12.5L13.5 8" stroke="#242320" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke="#242320" strokeWidth="1.4"/>
      <path d="M10 10V5" stroke="#242320" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M10 10L14 12.5" stroke="#242320" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

function DoneCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke="#242320" strokeWidth="1.4"/>
      <path d="M7 10L9.5 12.5L13.5 8" stroke="#242320" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function Toggle({ checked, onChange, disabled }) {
  return (
    <button
      type="button"
      className={`config-toggle${checked ? ' config-toggle--on' : ''}${disabled ? ' config-toggle--disabled' : ''}`}
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
    >
      <span className="config-toggle-knob" />
    </button>
  )
}

export default function Configuracoes({ user, tasks = [], onClose }) {
  const [notificacoes, setNotificacoes] = useState(true)
  const [temaEscuro] = useState(false)

  const total = tasks.length
  const concluidas = tasks.filter(t => t.done).length
  const pendentes = total - concluidas

  const displayName = user?.displayName || 'Amanda Merien'
  const email = user?.email || 'contato@amandamerien.com'
  const firstName = displayName.split(' ')[0]

  return (
    <div className="config">
      <header className="config-header">
        <button className="config-close-btn" type="button" onClick={onClose}>
          <CloseIcon />
        </button>
        <span className="config-header-title">Perfil</span>
        <div style={{ width: 32 }} />
      </header>

      <div className="config-scroll">
        <div className="config-avatar-section">
          <div className="config-avatar-wrap">
            <img
              src={user?.photoURL || avatarImg}
              alt={displayName}
              className="config-avatar-img"
            />
          </div>
          <p className="config-name">{displayName}</p>
          <p className="config-email">{email}</p>
        </div>

        <div className="config-section">
          <p className="config-section-label">CONTA</p>
          <div className="config-card">
            <div className="config-row">
              <div className="config-row-left">
                <div className="config-row-icon"><PersonIcon /></div>
                <span className="config-row-title">Nome</span>
              </div>
              <span className="config-row-value">{firstName}</span>
            </div>
            <div className="config-separator" />
            <div className="config-row">
              <div className="config-row-left">
                <div className="config-row-icon"><MailIcon /></div>
                <span className="config-row-title">E-mail</span>
              </div>
              <span className="config-row-value config-row-value--truncate">{email}</span>
            </div>
          </div>
        </div>

        <div className="config-section">
          <p className="config-section-label">PREFERÊNCIAS</p>
          <div className="config-card">
            <div className="config-row">
              <div className="config-row-left">
                <div className="config-row-icon"><BellIcon /></div>
                <div className="config-row-text">
                  <span className="config-row-title">Notificações</span>
                  <span className="config-row-sub">Lembretes de tarefas e foco</span>
                </div>
              </div>
              <Toggle checked={notificacoes} onChange={setNotificacoes} />
            </div>
            <div className="config-separator" />
            <div className="config-row">
              <div className="config-row-left">
                <div className="config-row-icon"><MoonIcon /></div>
                <div className="config-row-text">
                  <span className="config-row-title">Tema escuro</span>
                  <span className="config-row-sub">Em breve</span>
                </div>
              </div>
              <Toggle checked={temaEscuro} onChange={() => {}} disabled />
            </div>
            <div className="config-separator" />
            <div className="config-row">
              <div className="config-row-left">
                <div className="config-row-icon"><LanguageIcon /></div>
                <span className="config-row-title">Idioma</span>
              </div>
              <span className="config-row-value">Português</span>
            </div>
          </div>
        </div>

        <div className="config-section">
          <p className="config-section-label">PRODUTIVIDADE</p>
          <div className="config-overview-cards">
            <div className="config-overview-card">
              <CheckIcon />
              <span className="config-overview-num">{total}</span>
              <span className="config-overview-label">Total</span>
            </div>
            <div className="config-overview-card">
              <ClockIcon />
              <span className="config-overview-num">{pendentes}</span>
              <span className="config-overview-label">Pendentes</span>
            </div>
            <div className="config-overview-card">
              <DoneCircleIcon />
              <span className="config-overview-num">{concluidas}</span>
              <span className="config-overview-label">Concluídas</span>
            </div>
          </div>
        </div>

        <div style={{ height: 40 }} />
      </div>
    </div>
  )
}
