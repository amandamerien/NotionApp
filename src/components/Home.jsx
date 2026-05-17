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

export default function Home({ onFalar, onPomodoro, onCalendar, onSharedTasks }) {
  return (
    <div className="home">
      <div className="home-top">
        <img src={amandaImg} alt="" className="home-illustration" />
        <header className="home-header">
          <div className="home-user-info">
            <div className="home-avatar">
              <img src={avatarImg} alt="Avatar" className="home-avatar-img" />
            </div>
            <div className="home-user-text">
              <p className="home-user-name">Amanda Merien</p>
              <p className="home-user-email">contato@amandamerien.com</p>
            </div>
          </div>
          <div className="home-toolbar">
            <button className="home-pomodoro-btn" type="button" onClick={onPomodoro}>
              <TimerIcon />
              <span>Pomodoro</span>
            </button>
            <button className="home-menu-btn" type="button">
              <ListIcon />
            </button>
          </div>
        </header>

        <div className="home-greeting">
          <div className="home-greeting-text">
            <p className="home-title">
              <span className="home-title-muted">Olá, Merien. </span>
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
            <p className="home-prompt-text">Conte o que precisa organizar hoje</p>
            <div className="home-prompt-actions">
              <button className="home-prompt-add" type="button">
                <PlusIcon />
              </button>
              <button className="home-prompt-speak" type="button" onClick={onFalar}>
                <MicrophoneIcon color="white" />
                <span>Falar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
