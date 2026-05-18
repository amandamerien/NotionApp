import { useState, useRef } from 'react'
import avatarImg from '../assets/avatar-image.svg'
import amandaImg from '../assets/amanda.svg'
import actionIconPurple from '../assets/action-icon-purple.svg'
import actionIconBlue from '../assets/action-icon-blue.svg'
import actionIconOrange from '../assets/action-icon-orange.svg'
import calendarIcon from '../assets/calendar-icon.svg'
import illustrationHome from '../assets/illustration-home.svg'
import './Home.css'

function TimerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 14C11.0376 14 13.5 11.5376 13.5 8.5C13.5 5.46243 11.0376 3 8 3C4.96243 3 2.5 5.46243 2.5 8.5C2.5 11.5376 4.96243 14 8 14Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 8.5L10.5 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.5 1H9.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ListIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 5H17" stroke="#242320" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 10H17" stroke="#242320" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 15H17" stroke="#242320" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function MicrophoneIcon({ color = '#5F5B57' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10.5 4C10.5 2.61929 9.38071 1.5 8 1.5C6.61929 1.5 5.5 2.61929 5.5 4V8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8V4Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 12.5V15" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 8C12.5 9.19347 12.0259 10.3381 11.182 11.182C10.3381 12.0259 9.19347 12.5 8 12.5C6.80653 12.5 5.66193 12.0259 4.81802 11.182C3.97411 10.3381 3.5 9.19347 3.5 8" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M5.25 10C7.04493 10 8.5 8.54493 8.5 6.75C8.5 4.95507 7.04493 3.5 5.25 3.5C3.45507 3.5 2 4.95507 2 6.75C2 8.54493 3.45507 10 5.25 10Z" stroke="#5F5B57" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.639404 12.5001C1.13884 11.7322 1.82215 11.1012 2.62732 10.6644C3.43249 10.2276 4.33401 9.99878 5.25003 9.99878C6.16605 9.99878 7.06757 10.2276 7.87274 10.6644C8.67791 11.1012 9.36122 11.7322 9.86065 12.5001" stroke="#5F5B57" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.75 10C11.666 9.99946 12.5676 10.2279 13.3728 10.6645C14.178 11.1011 14.8613 11.7321 15.3606 12.5" stroke="#5F5B57" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.54321 3.73125C9.98779 3.55393 10.466 3.477 10.9438 3.50595C11.4215 3.5349 11.887 3.66901 12.3069 3.89871C12.7268 4.1284 13.0908 4.44801 13.3729 4.83469C13.655 5.22138 13.8481 5.66559 13.9386 6.13559C14.0291 6.60558 14.0147 7.08977 13.8963 7.55353C13.778 8.0173 13.5587 8.44921 13.2541 8.81839C12.9494 9.18758 12.5671 9.48492 12.1342 9.68918C11.7013 9.89344 11.2287 9.99958 10.7501 10" stroke="#5F5B57" strokeLinecap="round" strokeLinejoin="round"/>
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

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3V13" stroke="#242320" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 8H13" stroke="#242320" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function CaretRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 2.5L8 6L4.5 9.5" stroke="#5f5b57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function FeatureItem({ icon, title, subtitle, onClick }) {
  return (
    <div className="home-feature-item" onClick={onClick} style={onClick ? { cursor: 'pointer' } : undefined}>
      <div className="home-feature-left">
        <div className="home-feature-icon-box">
          {icon}
        </div>
        <div className="home-feature-text">
          <p className="home-feature-title">{title}</p>
          <p className="home-feature-subtitle">{subtitle}</p>
        </div>
      </div>
      <CaretRightIcon />
    </div>
  )
}

export default function Home({ user, onFalar, onPomodoro, onCalendar, onSharedTasks, onTasks, onTyped, onSignOut }) {
  const [showMenu, setShowMenu] = useState(false)
  const [promptText, setPromptText] = useState('')
  const promptInputRef = useRef(null)

  function handlePromptSubmit() {
    const t = promptText.trim()
    if (t) { onTyped && onTyped(t); setPromptText('') }
  }
  return (
    <div className="home">
      <div className="home-top">
        <img src={amandaImg} alt="" className="home-illustration" />
        <header className="home-header">
          <div className="home-user-info">
            <div className="home-avatar">
              <img src={user?.photoURL || avatarImg} alt="Avatar" className="home-avatar-img" />
            </div>
            <div className="home-user-text">
              <p className="home-user-name">{user?.displayName || 'Amanda Merien'}</p>
              <p className="home-user-email">{user?.email || 'contato@amandamerien.com'}</p>
            </div>
          </div>
          <div className="home-toolbar">
            <button className="home-pomodoro-btn" type="button" onClick={onPomodoro}>
              <TimerIcon />
              <span>Pomodoro</span>
            </button>
            <div className="home-menu-wrap">
              <button className="home-menu-btn" type="button" onClick={() => setShowMenu(v => !v)}>
                <ListIcon />
              </button>
              {showMenu && (
                <>
                  <div className="home-menu-backdrop" onClick={() => setShowMenu(false)} />
                  <div className="home-menu-dropdown">
                    <button className="home-menu-item" type="button" onClick={() => setShowMenu(false)}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 6.5L8 2L14 6.5V13.5C14 13.7761 13.7761 14 13.5 14H10V10H6V14H2.5C2.22386 14 2 13.7761 2 13.5V6.5Z" stroke="#242320" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span>Home</span>
                    </button>
                    <button className="home-menu-item" type="button" onClick={() => { setShowMenu(false); onPomodoro && onPomodoro() }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 14C11.0376 14 13.5 11.5376 13.5 8.5C13.5 5.46243 11.0376 3 8 3C4.96243 3 2.5 5.46243 2.5 8.5C2.5 11.5376 4.96243 14 8 14Z" stroke="#242320" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 8.5L10.5 6" stroke="#242320" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.5 1H9.5" stroke="#242320" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span>Pomodoro</span>
                    </button>
                    <button className="home-menu-item" type="button" onClick={() => { setShowMenu(false); onSharedTasks && onSharedTasks() }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.25 10C7.04493 10 8.5 8.54493 8.5 6.75C8.5 4.95507 7.04493 3.5 5.25 3.5C3.45507 3.5 2 4.95507 2 6.75C2 8.54493 3.45507 10 5.25 10Z" stroke="#242320" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M0.639404 12.5001C1.13884 11.7322 1.82215 11.1012 2.62732 10.6644C3.43249 10.2276 4.33401 9.99878 5.25003 9.99878C6.16605 9.99878 7.06757 10.2276 7.87274 10.6644C8.67791 11.1012 9.36122 11.7322 9.86065 12.5001" stroke="#242320" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.75 10C11.666 9.99946 12.5676 10.2279 13.3728 10.6645C14.178 11.1011 14.8613 11.7321 15.3606 12.5" stroke="#242320" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.54321 3.73125C10.3001 3.42019 11.1343 3.38 11.9168 3.61697C12.6993 3.85394 13.3818 4.35367 13.8479 5.03209C14.314 5.71051 14.5358 6.52659 14.4754 7.34703C14.415 8.16748 14.0762 8.94197 13.5152 9.54321" stroke="#242320" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span>Compartilhamentos</span>
                    </button>
                    <button className="home-menu-item" type="button" onClick={() => setShowMenu(false)}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#242320" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.9329 5.09789L12.2671 3.90211C12.1878 3.76269 12.0619 3.65529 11.9115 3.5987C11.7611 3.54211 11.5957 3.53998 11.4439 3.59266L10.3335 3.97904C10.0817 3.80706 9.81417 3.65988 9.535 3.53944L9.24561 2.38156C9.20778 2.22694 9.11932 2.08955 8.99427 1.99138C8.86922 1.89321 8.71496 1.83997 8.55612 1.84H7.44388C7.28504 1.83997 7.13078 1.89321 7.00573 1.99138C6.88068 2.08955 6.79222 2.22694 6.75439 2.38156L6.465 3.53944C6.18583 3.65988 5.91833 3.80706 5.66649 3.97904L4.55613 3.59266C4.40428 3.53998 4.23893 3.54211 4.08851 3.5987C3.9381 3.65529 3.81224 3.76269 3.73294 3.90211L3.06706 5.09789C2.98776 5.23731 2.95999 5.39982 2.98848 5.55737C3.01697 5.71491 3.09999 5.85762 3.22294 5.96L4.1335 6.70667C4.10939 6.90131 4.09727 7.09742 4.09717 7.29378C4.09727 7.49013 4.10939 7.68624 4.1335 7.88089L3.22294 8.62756C3.09999 8.72994 3.01697 8.87264 2.98848 9.03019C2.95999 9.18773 2.98776 9.35025 3.06706 9.48967L3.73294 10.6855C3.81224 10.8249 3.9381 10.9323 4.08851 10.9889C4.23893 11.0455 4.40428 11.0476 4.55613 10.9949L5.66649 10.6085C5.91833 10.7805 6.18583 10.9277 6.465 11.0481L6.75439 12.206C6.79222 12.3606 6.88068 12.498 7.00573 12.5962C7.13078 12.6944 7.28504 12.7476 7.44388 12.7476H8.55612C8.71496 12.7476 8.86922 12.6944 8.99427 12.5962C9.11932 12.498 9.20778 12.3606 9.24561 12.206L9.535 11.0481C9.81417 10.9277 10.0817 10.7805 10.3335 10.6085L11.4439 10.9949C11.5957 11.0476 11.7611 11.0455 11.9115 10.9889C12.0619 10.9323 12.1878 10.8249 12.2671 10.6855L12.9329 9.48967C13.0122 9.35025 13.04 9.18773 13.0115 9.03019C12.983 8.87264 12.9 8.72994 12.777 8.62756L11.8665 7.88089C11.8906 7.68624 11.9027 7.49013 11.9028 7.29378C11.9027 7.09742 11.8906 6.90131 11.8665 6.70667L12.777 5.96C12.9 5.85762 12.983 5.71491 13.0115 5.55737C13.04 5.39982 13.0122 5.23731 12.9329 5.09789Z" stroke="#242320" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span>Configurações</span>
                    </button>
                    <div className="home-menu-divider" />
                    <button className="home-menu-item home-menu-item--danger" type="button" onClick={() => { setShowMenu(false); onSignOut && onSignOut() }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 14H3C2.72386 14 2.5 13.7761 2.5 13.5V2.5C2.5 2.22386 2.72386 2 3 2H6" stroke="#b94040" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.5 11L13.5 8L10.5 5" stroke="#b94040" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.5 8H6" stroke="#b94040" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span>Sair</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        <div className="home-greeting">
          <div className="home-greeting-text">
            <p className="home-title">
              <span className="home-title-muted">Olá, {user?.displayName?.split(' ')[0] || 'Merien'}. </span>
              <span>Vamos começar?</span>
            </p>
            <p className="home-subtitle">Transforme ideias em ações.</p>
          </div>
          <div className="home-action-icons">
            <div className="home-action-icon home-action-icon--purple">
              <img src={actionIconPurple} alt="" />
            </div>
            <div className="home-action-icon home-action-icon--blue">
              <img src={actionIconBlue} alt="" />
            </div>
            <div className="home-action-icon home-action-icon--orange">
              <img src={actionIconOrange} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="home-bottom">
        <div className="home-features">
          <FeatureItem
            icon={<MicrophoneIcon />}
            title="Crie por voz"
            subtitle="Fale para criar tarefas"
            onClick={onFalar}
          />
          <FeatureItem
            icon={<UsersIcon />}
            title="Tarefas compartilhadas"
            subtitle="Planeje com outras pessoas"
            onClick={onSharedTasks}
          />
          <FeatureItem
            icon={<img src={calendarIcon} alt="" style={{ width: 16, height: 16 }} />}
            title="Sintonize sua agenda"
            subtitle="Conecte seus compromissos"
            onClick={onCalendar}
          />
        </div>

        <div className="home-prompt-bar">
          <div className="home-prompt-card">
            <label htmlFor="home-prompt-input" className="home-prompt-label">
              <input
                id="home-prompt-input"
                ref={promptInputRef}
                className="home-prompt-input"
                value={promptText}
                onChange={e => setPromptText(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handlePromptSubmit()}
                placeholder="Conte o que precisa organizar hoje"
              />
            </label>
            <div className="home-prompt-actions">
              <button className="home-prompt-add" type="button" onClick={e => e.stopPropagation()}>
                <PlusIcon />
              </button>
              {promptText.trim() ? (
                <button className="home-prompt-speak" type="button" onClick={e => { e.stopPropagation(); handlePromptSubmit() }}>
                  <SendIcon />
                  <span>Enviar</span>
                </button>
              ) : (
                <button className="home-prompt-speak" type="button" onClick={e => { e.stopPropagation(); onFalar && onFalar() }}>
                  <MicrophoneIcon color="white" />
                  <span>Falar</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
