import { useEffect, useRef } from 'react'
import './Toast.css'

function CheckCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" fill="#1a1a1a"/>
      <path d="M8 12L10.5 14.5L16 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" fill="#d44"/>
      <path d="M12 8V12" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="12" cy="15.5" r="0.8" fill="white"/>
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" fill="#5f5b57"/>
      <circle cx="12" cy="8.5" r="0.8" fill="white"/>
      <path d="M12 11V16" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M9 3L3 9M3 3L9 9" stroke="#9e9a97" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}

const ICONS = {
  success: <CheckCircleIcon />,
  error: <AlertIcon />,
  info: <InfoIcon />,
}

const DURATION = 3500

export default function Toast({ id, type = 'success', title, message, onDismiss }) {
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setTimeout(() => onDismiss(id), DURATION)
    return () => clearTimeout(timerRef.current)
  }, [id, onDismiss])

  return (
    <div className={`toast toast--${type}`} onClick={() => onDismiss(id)}>
      <div className="toast-icon">{ICONS[type]}</div>
      <div className="toast-body">
        <p className="toast-title">{title}</p>
        {message && <p className="toast-message">{message}</p>}
      </div>
      <button
        className="toast-close"
        type="button"
        onClick={e => { e.stopPropagation(); onDismiss(id) }}
      >
        <CloseIcon />
      </button>
      <div
        className="toast-progress"
        style={{ animationDuration: `${DURATION}ms` }}
      />
    </div>
  )
}
