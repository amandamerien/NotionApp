import illustration from '../assets/shared-tasks-illustration.svg'
import logoIcon from '../assets/pulse-icon.svg'
import './SharedTasks.css'

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M15.625 4.375L4.375 15.625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.625 15.625L4.375 4.375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function HelpIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 11.25V10.125C11.1748 10.125 12.9375 8.61398 12.9375 6.75C12.9375 4.88602 11.1748 3.375 9 3.375C6.82523 3.375 5.0625 4.88602 5.0625 6.75" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 14C9.34518 14 9.625 14.2798 9.625 14.625C9.625 14.9702 9.34518 15.25 9 15.25C8.65482 15.25 8.375 14.9702 8.375 14.625C8.375 14.2798 8.65482 14 9 14Z" fill="#343330" stroke="black"/>
    </svg>
  )
}

function SendIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M9 8H5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.03073 13.8301C2.99557 13.9261 2.9907 14.0305 3.01676 14.1294C3.04283 14.2283 3.09858 14.3168 3.1765 14.383C3.25442 14.4492 3.35076 14.4899 3.45254 14.4997C3.55432 14.5094 3.65665 14.4878 3.74573 14.4376L14.2457 8.43193C14.3239 8.38869 14.389 8.3253 14.4344 8.24836C14.4797 8.17142 14.5037 8.08374 14.5037 7.99443C14.5037 7.90511 14.4797 7.81743 14.4344 7.74049C14.389 7.66355 14.3239 7.60017 14.2457 7.55693L3.74573 1.5663C3.65692 1.51663 3.55507 1.49524 3.45378 1.50498C3.3525 1.51473 3.2566 1.55514 3.17888 1.62083C3.10117 1.68652 3.04535 1.77435 3.01888 1.8726C2.99241 1.97085 2.99654 2.07484 3.03073 2.17068L5.0001 8.00005L3.03073 13.8301Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 10L10 6" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 4.75698L8.87875 2.88198C9.44291 2.32694 10.2035 2.01731 10.9949 2.02053C11.7864 2.02376 12.5444 2.33957 13.104 2.89919C13.6637 3.4588 13.9795 4.21688 13.9827 5.00829C13.9859 5.7997 13.6763 6.56033 13.1213 7.12448L11.2425 9.00011" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.75698 7L2.88198 8.87875C2.32694 9.44291 2.01731 10.2035 2.02053 10.9949C2.02376 11.7864 2.33957 12.5444 2.89919 13.104C3.4588 13.6637 4.21688 13.9795 5.00829 13.9827C5.7997 13.9859 6.56033 13.6763 7.12448 13.1213L9.00011 11.2425" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6.75 9.75C6.75 8.95435 7.06607 8.19129 7.62868 7.62868C8.19129 7.06607 8.95435 6.75 9.75 6.75L11.25 9.75L10.095 11.4816C10.5532 12.5763 11.4237 13.4468 12.5184 13.905L14.25 12.75L17.25 14.25C17.25 15.0456 16.9339 15.8087 16.3713 16.3713C15.8087 16.9339 15.0456 17.25 14.25 17.25C12.2609 17.25 10.3532 16.4598 8.9467 15.0533C7.54018 13.6468 6.75 11.7391 6.75 9.75Z" fill="#14832B"/>
      <path d="M7.49356 19.7914C9.38406 20.8856 11.608 21.2549 13.7506 20.8304C15.8933 20.406 17.8084 19.2168 19.1391 17.4846C20.4697 15.7524 21.125 13.5954 20.9827 11.4157C20.8404 9.23605 19.9103 7.18253 18.3657 5.638C16.8212 4.09348 14.7677 3.16336 12.588 3.02108C10.4084 2.87879 8.25138 3.53405 6.51916 4.86468C4.78695 6.1953 3.59777 8.11048 3.17333 10.2531C2.74889 12.3958 3.11817 14.6197 4.21231 16.5102L3.0395 20.0118C2.99543 20.1439 2.98903 20.2857 3.02103 20.4213C3.05302 20.5569 3.12215 20.6808 3.22065 20.7794C3.31915 20.8779 3.44314 20.947 3.57871 20.979C3.71429 21.011 3.8561 21.0046 3.98825 20.9605L7.49356 19.7914Z" stroke="#14832B" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function SharedTasks({ onClose }) {
  return (
    <div className="shared">
      <header className="shared-header">
        <button className="shared-header-btn" type="button" onClick={onClose}>
          <CloseIcon />
        </button>
        <span className="shared-header-title">Tarefa compartilhada</span>
        <button className="shared-header-btn" type="button">
          <HelpIcon />
        </button>
      </header>

      <div className="shared-body">
        <div className="shared-top">
          <div className="shared-title-group">
            <h1 className="shared-title">
              <span className="shared-title-muted">Crie tarefas </span>
              <span>compartilhadas</span>
            </h1>
            <p className="shared-desc">
              Convide quem faz parte da sua rotina para organizar tudo junto
            </p>
          </div>
          <img src={illustration} className="shared-illustration" alt="" />
        </div>

        <div className="shared-form">
          <p className="shared-label">Convide alguém</p>
          <div className="shared-input-row">
            <span className="shared-input-placeholder">Nº do Whatsapp</span>
            <WhatsAppIcon />
          </div>
        </div>

        <div className="shared-actions">
          <button className="shared-btn-primary" type="button">
            <SendIcon />
            <span>Enviar convite</span>
          </button>
          <button className="shared-btn-secondary" type="button">
            <LinkIcon />
            <span>Copiar Link</span>
          </button>
        </div>

        <div className="shared-logo">
          <img src={logoIcon} width="20" height="20" alt="" />
          <span className="shared-logo-text">
            <span className="shared-logo-notion">Notion</span>
            <span className="shared-logo-pulse"> Pulse</span>
          </span>
        </div>
      </div>
    </div>
  )
}
