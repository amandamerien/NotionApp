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
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 8.6001V21.0001H20V8.6001" stroke="#242320" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 10L12 3L22 10" stroke="#242320" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 21V15C15 13.895 14.105 13 13 13H11C9.895 13 9 13.895 9 15V21" stroke="#242320" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span>Home</span>
                    </button>
                    <button className="home-menu-item" type="button" onClick={() => { setShowMenu(false); onPomodoro && onPomodoro() }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M17.657 7.343C20.781 10.467 20.781 15.533 17.657 18.657C14.533 21.781 9.467 21.781 6.343 18.657C3.219 15.533 3.219 10.467 6.343 7.343C9.467 4.219 14.533 4.219 17.657 7.343" stroke="#242320" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.5 12.998C12.5 12.722 12.276 12.499 12 12.5C11.724 12.501 11.5 12.725 11.5 13.001C11.5 13.277 11.723 13.5 11.999 13.5C12.275 13.5 12.499 13.276 12.5 12.999" stroke="#242320" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 9V13" stroke="#242320" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 2H14" stroke="#242320" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 6L19 4L20 5L17.657 7.343" stroke="#242320" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span>Pomodoro</span>
                    </button>
                    <button className="home-menu-item" type="button" onClick={() => { setShowMenu(false); onSharedTasks && onSharedTasks() }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 18C3 15.791 4.791 14 7 14H11C13.209 14 15 15.791 15 18" stroke="#242320" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 4.65088C17.381 4.65088 18.5 5.76988 18.5 7.15088C18.5 8.53188 17.381 9.65088 16 9.65088" stroke="#242320" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.4049 4.99613C12.7331 6.3243 12.7331 8.4777 11.4049 9.80587C10.0767 11.134 7.92333 11.134 6.59516 9.80587C5.26699 8.4777 5.26699 6.3243 6.59516 4.99613C7.92333 3.66796 10.0767 3.66796 11.4049 4.99613" stroke="#242320" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 13C19.209 13 21 14.791 21 17" stroke="#242320" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span>Compartilhamentos</span>
                    </button>
                    <button className="home-menu-item" type="button" onClick={() => setShowMenu(false)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M4.506 10.6982V10.6982C3.72954 9.82268 3.60047 8.54849 4.18557 7.535L4.22596 7.465C4.81108 6.45153 5.97906 5.92618 7.12555 6.16077H7.12566C7.59563 6.25694 8.08456 6.1776 8.5 5.93774V5.93774C8.91543 5.69789 9.2286 5.31414 9.3803 4.85906V4.85906C9.75038 3.74885 10.7894 3 11.9596 3H12.0404C13.2107 3 14.2496 3.74885 14.6197 4.85906V4.85906C14.7714 5.31414 15.0846 5.69788 15.5 5.93773V5.93773C15.9154 6.1776 16.4044 6.25695 16.8744 6.16078H16.8745C18.0209 5.92621 19.1889 6.45156 19.774 7.465L19.8144 7.535C20.3995 8.54849 20.2705 9.82271 19.494 10.6983V10.6983C19.1757 11.0572 19 11.5203 19 12V12C19 12.4797 19.1758 12.9428 19.4941 13.3018V13.3018C20.2705 14.1773 20.3996 15.4516 19.8144 16.465L19.774 16.5351C19.1889 17.5485 18.0209 18.0739 16.8745 17.8393L16.8742 17.8392C16.4043 17.7431 15.9154 17.8224 15.5 18.0622V18.0622C15.0846 18.302 14.7714 18.6858 14.6197 19.1409V19.1409C14.2496 20.2511 13.2106 21 12.0403 21H11.9597C10.7894 21 9.75039 20.2511 9.38029 19.1408V19.1408C9.2286 18.6858 8.91544 18.302 8.5 18.0622V18.0622C8.08461 17.8224 7.59576 17.743 7.12585 17.8392L7.12555 17.8392C5.97907 18.0738 4.81111 17.5485 4.226 16.535L4.1856 16.465C3.60046 15.4515 3.72952 14.1773 4.50598 13.3017V13.3017C4.82425 12.9428 4.99999 12.4797 5 12V12C5.00001 11.5203 4.82427 11.0572 4.506 10.6982Z" stroke="#242320" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="#242320" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span>Configurações</span>
                    </button>
                    <div className="home-menu-divider" />
                    <button className="home-menu-item home-menu-item--danger" type="button" onClick={() => { setShowMenu(false); onSignOut && onSignOut() }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M11 19.392V7.50298C11 6.81298 10.645 6.17198 10.06 5.80698L6.06 3.30698C4.728 2.47498 3 3.43198 3 5.00298V16.891C3 17.581 3.355 18.222 3.94 18.587L7.94 21.087C9.272 21.92 11 20.962 11 19.392Z" stroke="#b94040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 11H21" stroke="#b94040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 13L21 11L19 9" stroke="#b94040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 19H15C16.105 19 17 18.105 17 17V16" stroke="#b94040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 6V5C17 3.895 16.105 3 15 3H5" stroke="#b94040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
