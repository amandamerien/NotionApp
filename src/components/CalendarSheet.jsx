import meetIllustration from '../assets/meet-illustration.svg'
import googleLogo from '../assets/google-logo.webp'
import './CalendarSheet.css'

function SyncIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10.5 6H13.5V3" stroke="#005BAB" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.5 5.99992L11.7325 4.23242C10.7089 3.20886 9.32304 2.6301 7.87549 2.62168C6.42795 2.61325 5.03545 3.17584 4 4.18742" stroke="#005BAB" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 10H2.5V13" stroke="#005BAB" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5 10L4.2675 11.7675C5.2911 12.7911 6.67696 13.3698 8.12451 13.3782C9.57205 13.3867 10.9646 12.8241 12 11.8125" stroke="#005BAB" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M5.5 8.5L7 10L10.5 6.5" stroke="#0F6220" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#0F6220" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g opacity="0.3">
        <path d="M2.5 8H13.5" stroke="#5F5B57" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 2.5V13.5" stroke="#5F5B57" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  )
}

export default function CalendarSheet({ onClose }) {
  return (
    <div className="cal-overlay" onClick={onClose}>
      <div className="cal-sheet" onClick={e => e.stopPropagation()}>

        <div className="cal-handle-row">
          <div className="cal-handle-pill" />
        </div>

        <img src={meetIllustration} className="cal-illustration" alt="" />

        <div className="cal-body">
          <div className="cal-title-group">
            <h2 className="cal-title">
              <span className="cal-title-muted">Sincronize sua </span>
              <span>agenda</span>
            </h2>
            <p className="cal-desc">
              Conecte com o Google Calendar e veja tarefas e compromissos no mesmo fluxo.
            </p>
          </div>

          <div className="cal-features">
            <div className="cal-feature-card">
              <div className="cal-feature-icon cal-feature-icon--blue">
                <SyncIcon />
              </div>
              <p className="cal-feature-label">Importe automaticamente</p>
            </div>

            <span className="cal-plus"><PlusIcon /></span>

            <div className="cal-feature-card">
              <div className="cal-feature-icon cal-feature-icon--green">
                <CheckIcon />
              </div>
              <p className="cal-feature-label">Mantenha tudo em um só lugar</p>
            </div>
          </div>

          <div className="cal-actions">
            <button className="cal-cta" type="button">
              <img src={googleLogo} className="cal-cta-logo" alt="Google" />
              <span className="cal-cta-text">Conectar com o Google Calendar</span>
            </button>
            <button className="cal-skip" type="button" onClick={onClose}>
              Agora não
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
