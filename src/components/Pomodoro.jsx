import { useState, useEffect, useRef } from 'react'
import vincularTarefaIcon from '../assets/vincular-tarefa.svg'
import lightningIcon from '../assets/lightning-icon.svg'
import './Pomodoro.css'

// ── Notification & Sound ──────────────────────────────────────────────────────
function playDoneSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const notes = [523, 659, 784, 1047]
    notes.forEach((freq, i) => {
      const osc  = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.type = 'sine'
      osc.frequency.value = freq
      const t = ctx.currentTime + i * 0.18
      gain.gain.setValueAtTime(0.25, t)
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45)
      osc.start(t)
      osc.stop(t + 0.45)
    })
  } catch {}
}

async function requestNotifPermission() {
  if ('Notification' in window && Notification.permission === 'default') {
    await Notification.requestPermission()
  }
}

function sendNotification() {
  if (!('Notification' in window)) return
  if (Notification.permission === 'granted') {
    new Notification('Pomodoro concluído! 🎉', {
      body: 'Seu foco de 15 minutos terminou. Hora de uma pausa!',
    })
  }
}

// ── Constants ─────────────────────────────────────────────────────────────────
const DEFAULT_MINS = 15
const MAX_MINS = 60
const R  = 128
const CX = 144
const CY = 144
const C  = 2 * Math.PI * R   // ≈ 804.25

function pad(n) { return String(n).padStart(2, '0') }

// ── Icons ─────────────────────────────────────────────────────────────────────
function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M15.625 4.375L4.375 15.625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4.375 4.375L15.625 15.625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function MusicIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M12.6562 13.5C13.7436 13.5 14.625 12.6186 14.625 11.5312C14.625 10.4439 13.7436 9.5625 12.6562 9.5625C11.5689 9.5625 10.6875 10.4439 10.6875 11.5312C10.6875 12.6186 11.5689 13.5 12.6562 13.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.65625 15.75C4.74356 15.75 5.625 14.8686 5.625 13.7812C5.625 12.6939 4.74356 11.8125 3.65625 11.8125C2.56894 11.8125 1.6875 12.6939 1.6875 13.7812C1.6875 14.8686 2.56894 15.75 3.65625 15.75Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.625 13.7812V3.9375L14.625 1.6875V11.5312" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CaretRightSmIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path opacity="0.8" d="M4.5 2.25L8.25 6L4.5 9.75" stroke="#5F5B57" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function TaskListIcon() {
  return (
    <svg width="32" height="32" viewBox="20 14 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 31C20 22.1634 27.1634 15 36 15C44.8366 15 52 22.1634 52 31C52 39.8366 44.8366 47 36 47C27.1634 47 20 39.8366 20 31Z" fill="var(--bg-primary)" filter="drop-shadow(0px 2px 2px rgba(95,91,87,0.1)) drop-shadow(0px 4px 8px rgba(95,91,87,0.1)) drop-shadow(0px 5px 20px rgba(95,91,87,0.08))"/>
      <path d="M39.834 22.0156C41.3376 21.9204 42.4888 22.3924 43.4672 23.5512C43.7632 23.9018 43.876 24.2675 43.4435 24.5728C42.9145 24.5485 42.6818 23.6734 42.2328 23.372C40.4909 22.2027 38.2041 22.7752 37.0562 24.4986C36.2321 25.7356 35.9194 27.1892 35.3235 28.5403C34.5066 30.3931 33.678 32.2525 32.8784 34.123C32.8406 34.2129 32.8566 34.1545 32.8675 34.3055C33.4377 34.6686 35.7403 34.1164 36.4498 34.4328C36.5684 34.5976 36.542 34.507 36.5235 34.7158C36.1023 35.3789 33.6054 35.1413 32.8705 35.1117C32.5098 35.0966 32.1471 35.0159 31.9692 34.6725C32.0312 33.773 34.2977 29.166 34.7258 28.0118C35.1069 27.0716 35.4185 26.1144 35.8253 25.1841C36.6387 23.3234 37.8348 22.3051 39.834 22.0156Z" fill="black"/>
      <path d="M38.5566 36.3467C38.8282 36.4872 38.77 36.4104 38.9096 36.6441C38.9283 36.973 38.7349 37.279 38.5153 37.5127C36.4892 39.6695 33.8274 39.8868 31.6013 37.9841C31.3719 37.7011 31.2697 37.4792 31.5091 37.1615C31.9671 37.0807 32.5058 37.8351 32.9301 38.057C34.3845 38.8199 35.9382 38.6531 37.2207 37.6545C37.7331 37.2553 38.042 36.8266 38.5059 36.3933L38.5566 36.3467Z" fill="black"/>
      <path d="M31.4837 22.0137C32.3499 21.948 34.4815 22.0859 34.6672 23.1685C34.4204 23.81 33.637 23.0155 33.1457 22.8888C31.8385 22.552 30.8463 22.8271 29.6797 23.4265C28.988 23.8566 28.699 24.2715 28.1706 24.8696C28.0201 25.0403 27.724 25.2071 27.5381 24.9904C27.4019 24.2433 28.438 23.3609 28.9983 22.9643C29.7531 22.4293 30.5773 22.1502 31.4837 22.0137Z" fill="black"/>
      <path d="M39.22 25.3092C39.8404 25.2994 40.3542 25.7885 40.3751 26.4089C40.396 27.0294 39.9162 27.5513 39.2965 27.5835C38.8857 27.6052 38.4953 27.403 38.2757 27.055C38.056 26.707 38.0411 26.2678 38.2369 25.906C38.4327 25.5436 38.8086 25.3158 39.22 25.3092Z" fill="black"/>
      <path d="M31.629 25.3095C32.0353 25.2721 32.4303 25.4559 32.6633 25.7907C32.8962 26.1256 32.9314 26.5602 32.7552 26.9279C32.579 27.2955 32.2187 27.5411 31.8117 27.5693C31.1918 27.6126 30.6525 27.1491 30.6024 26.5293C30.5523 25.9102 31.0102 25.3659 31.629 25.3095Z" fill="black"/>
    </svg>
  )
}

function ResetIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2.5 3.5V6.5H5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.543 6.5C3.02896 4.16294 5.10956 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C5.43126 12.5 3.6576 11.2338 2.9248 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M7 4.667L23.333 14L7 23.333V4.667Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="6" y="5" width="5" height="18" rx="2" fill="currentColor"/>
      <rect x="17" y="5" width="5" height="18" rx="2" fill="currentColor"/>
    </svg>
  )
}

function LightningIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ display: 'inline-block', verticalAlign: '-6px' }}>
      {/* Left curve */}
      <path d="M8 5.5C5.5 8.5 4.5 11.5 5.5 14C4.5 16.5 5.5 19.5 8 22.5" stroke="#F0A500" strokeWidth="1.8" strokeLinecap="round"/>
      {/* Right curve */}
      <path d="M20 5.5C22.5 8.5 23.5 11.5 22.5 14C23.5 16.5 22.5 19.5 20 22.5" stroke="#F0A500" strokeWidth="1.8" strokeLinecap="round"/>
      {/* Lightning bolt */}
      <path d="M16 3L9.5 15.5H14L11.5 25L20 13H15.5L18 3Z" fill="white" stroke="#1a1a1a" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round"/>
    </svg>
  )
}

function StopIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="3" y="3" width="10" height="10" rx="1.5" fill="currentColor"/>
    </svg>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function Pomodoro({ onClose }) {
  const totalSecs = DEFAULT_MINS * 60
  const [timeLeft, setTimeLeft] = useState(totalSecs)
  const [running, setRunning] = useState(false)
  const [done, setDone]       = useState(false)
  const [dragging, setDragging] = useState(false)
  const draggingRef = useRef(false)
  const notifiedRef = useRef(false)
  const svgRef = useRef(null)

  // Request notification permission as soon as the screen opens
  useEffect(() => { requestNotifPermission() }, [])

  useEffect(() => {
    if (!running || timeLeft <= 0) return
    const id = setTimeout(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          setRunning(false)
          setDone(true)
          if (!notifiedRef.current) {
            notifiedRef.current = true
            playDoneSound()
            sendNotification()
          }
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearTimeout(id)
  }, [running, timeLeft])

  function handlePlayPause() { if (!done) setRunning(r => !r) }
  function handleReset() { setRunning(false); setTimeLeft(totalSecs); setDone(false); notifiedRef.current = false }
  function handleFinish() { setRunning(false); onClose() }

  function getSvgPointerAngle(e) {
    const svg = svgRef.current
    if (!svg) return 0
    const rect = svg.getBoundingClientRect()
    const scaleX = 288 / rect.width
    const scaleY = 288 / rect.height
    const px = (e.clientX - rect.left) * scaleX
    const py = (e.clientY - rect.top) * scaleY
    let angle = Math.atan2(px - CX, -(py - CY))
    if (angle < 0) angle += 2 * Math.PI
    return angle
  }

  function onHandlePointerDown(e) {
    if (running || done) return
    e.preventDefault()
    e.currentTarget.setPointerCapture(e.pointerId)
    draggingRef.current = true
    setDragging(true)
  }

  function onHandlePointerMove(e) {
    if (!draggingRef.current || running || done) return
    const angle = getSvgPointerAngle(e)
    let rawMins = (angle / (2 * Math.PI)) * MAX_MINS
    if (rawMins < 1) rawMins = 60
    setTimeLeft(Math.round(rawMins) * 60)
  }

  function onHandlePointerUp(e) {
    if (draggingRef.current) {
      const angle = getSvgPointerAngle(e)
      let rawMins = (angle / (2 * Math.PI)) * MAX_MINS
      if (rawMins < 1) rawMins = 60
      setTimeLeft(Math.round(rawMins) * 60)
    }
    draggingRef.current = false
    setDragging(false)
  }

  const mins = Math.floor(timeLeft / 60)
  const secs = timeLeft % 60

  // Arc: progress relative to 60-min max
  const progress  = timeLeft / (MAX_MINS * 60)
  const dashOff   = C * (1 - progress)

  // Handle position at end of arc
  const arcAngle = progress * 2 * Math.PI
  const hx = CX + R * Math.sin(arcAngle)
  const hy = CY - R * Math.cos(arcAngle)


  return (
    <div className="pomo">
      {/* Header */}
      <header className="pomo-header">
        <button className="pomo-header-btn" type="button" onClick={onClose}><XIcon /></button>
        <span className="pomo-header-title">Pomodoro</span>
        <button className="pomo-header-btn" type="button"><MusicIcon /></button>
      </header>

      <div className="pomo-body">
        <div className="pomo-top">
          {/* Vincular tarefa */}
          <button className="pomo-link-btn" type="button">
            <div className="pomo-link-icon-wrap">
              <img
                src={vincularTarefaIcon}
                alt=""
                style={{ position: 'absolute', width: 72, height: 72, left: -20, top: -15, pointerEvents: 'none' }}
              />
            </div>
            <span className="pomo-link-text">Vincular tarefa</span>
            <CaretRightSmIcon />
          </button>

          {/* Mode title */}
          <div className="pomo-mode">
            <h2 className="pomo-mode-title">
              <span className="pomo-mode-muted">Ativar</span>
              {' '}
              <img src={lightningIcon} width="30" height="43" alt="" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
              {' '}
              modo foco
            </h2>
            <p className="pomo-mode-sub">Foque em uma tarefa de cada vez</p>
          </div>

          {/* Timer */}
          <div className="pomo-timer">
            <svg ref={svgRef} width="288" height="288" viewBox="0 0 288 288" style={{ display: 'block', touchAction: 'none', userSelect: 'none' }}>
              <defs>
                <linearGradient id="ring-fade" x1="264" y1="172" x2="125" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0"/>
                  <stop offset="1" stopColor="white"/>
                </linearGradient>
              </defs>

              {/* Background track */}
              <circle cx={CX} cy={CY} r={R}
                fill="none" stroke="var(--accent-purple-bg)" strokeWidth="24"
              />

              {/* Gradient fade overlay on background track */}
              <circle cx={CX} cy={CY} r={R}
                fill="none" stroke="url(#ring-fade)" strokeWidth="24" strokeOpacity="0.8"
              />

              {/* Dot tick ring from Figma */}
              <g transform="translate(144,144) scale(0.9808) translate(-134,-134.5)">
                <path opacity="0.1" fill="#7237AE" d="M121.405 259.542L120.464 269C120.103 268.964 119.743 268.927 119.383 268.888L120.399 259.438C120.734 259.474 121.07 259.508 121.405 259.542ZM148.617 268.888C148.257 268.927 147.897 268.964 147.536 269L146.595 259.542C146.93 259.508 147.266 259.474 147.601 259.438L148.617 268.888ZM108.45 257.553L106.528 266.859C106.172 266.785 105.817 266.71 105.463 266.633L107.461 257.342C107.79 257.413 108.12 257.484 108.45 257.553ZM162.537 266.633C162.183 266.71 161.828 266.785 161.472 266.859L159.55 257.553C159.88 257.484 160.21 257.414 160.539 257.342L162.537 266.633ZM95.7762 254.207L92.888 263.259C92.5429 263.148 92.1983 263.035 91.8544 262.922L94.8156 253.894C95.1351 253.999 95.4556 254.104 95.7762 254.207ZM176.146 262.922C175.802 263.035 175.457 263.148 175.112 263.259L172.224 254.207C172.544 254.104 172.865 253.999 173.184 253.894L176.146 262.922ZM83.5247 249.54L79.7036 258.237C79.3724 258.091 79.0419 257.942 78.7121 257.793L82.6031 249.128C82.9095 249.267 83.217 249.404 83.5247 249.54ZM189.288 257.793C188.958 257.942 188.628 258.091 188.296 258.237L184.475 249.54C184.783 249.404 185.09 249.267 185.397 249.128L189.288 257.793ZM71.8291 243.607L67.1202 251.854C66.8065 251.673 66.4932 251.491 66.1811 251.308L70.9557 243.1C71.246 243.27 71.5374 243.44 71.8291 243.607ZM201.819 251.308C201.507 251.491 201.194 251.673 200.88 251.854L196.171 243.607C196.463 243.44 196.754 243.27 197.044 243.1L201.819 251.308ZM60.8147 236.477L55.2735 244.184C54.9805 243.972 54.6884 243.758 54.3971 243.543L59.9989 235.881C60.2698 236.08 60.542 236.279 60.8147 236.477ZM213.603 243.543C213.312 243.758 213.02 243.972 212.726 244.184L207.185 236.477C207.458 236.279 207.73 236.08 208.001 235.881L213.603 243.543ZM50.5996 228.232L44.2889 235.318C44.0195 235.076 43.7508 234.834 43.4834 234.59L49.8495 227.554C50.0984 227.781 50.3489 228.007 50.5996 228.232ZM224.517 234.59C224.249 234.833 223.981 235.076 223.711 235.318L217.4 228.232C217.651 228.007 217.902 227.781 218.15 227.554L224.517 234.59ZM41.2918 218.964L34.2824 225.354C34.0395 225.086 33.7978 224.816 33.557 224.546L40.6167 218.212C40.8408 218.463 41.0658 218.715 41.2918 218.964ZM234.443 224.546C234.202 224.816 233.961 225.086 233.718 225.354L226.708 218.964C226.934 218.715 227.159 218.463 227.383 218.212L234.443 224.546ZM32.996 208.777L25.362 214.4C25.1482 214.108 24.9354 213.814 24.7239 213.52L32.4022 207.958C32.5989 208.232 32.7972 208.505 32.996 208.777ZM243.276 213.52C243.065 213.814 242.852 214.108 242.638 214.4L235.004 208.777C235.203 208.505 235.401 208.232 235.598 207.958L243.276 213.52ZM25.8038 197.779L17.6262 202.572C17.4439 202.259 17.2625 201.944 17.0826 201.629L25.2983 196.903C25.4655 197.196 25.6343 197.488 25.8038 197.779ZM250.917 201.629C250.738 201.944 250.556 202.259 250.374 202.572L242.196 197.779C242.366 197.488 242.535 197.196 242.702 196.903L250.917 201.629ZM19.7982 186.089L11.1655 189.994C11.0168 189.663 10.8687 189.331 10.7226 188.999L19.3872 185.164C19.523 185.473 19.6601 185.781 19.7982 186.089ZM257.277 188.999C257.131 189.331 256.983 189.663 256.835 189.994L248.202 186.089C248.34 185.781 248.477 185.473 248.613 185.164L257.277 188.999ZM15.0503 173.831L6.05588 176.803C5.94266 176.458 5.83042 176.112 5.7199 175.765L14.738 172.866C14.8407 173.188 14.9451 173.51 15.0503 173.831ZM262.28 175.765C262.17 176.112 262.057 176.458 261.944 176.803L252.95 173.831C253.055 173.51 253.159 173.188 253.262 172.866L262.28 175.765ZM11.6145 161.138L2.35803 163.143C2.28159 162.788 2.20667 162.431 2.13302 162.075L11.4049 160.145C11.4733 160.477 11.5434 160.808 11.6145 161.138ZM265.867 162.075C265.793 162.431 265.718 162.788 265.642 163.143L256.386 161.138C256.457 160.808 256.527 160.477 256.595 160.145L265.867 162.075ZM9.52666 148.151L0.111994 149.171C0.0731376 148.81 0.0360136 148.448 0 148.086L9.42289 147.142C9.45639 147.479 9.49051 147.815 9.52666 148.151ZM268 148.086C267.964 148.448 267.927 148.81 267.888 149.171L258.473 148.151C258.509 147.815 258.544 147.479 258.577 147.142L268 148.086ZM9.52666 120.849C9.49051 121.185 9.45639 121.521 9.42289 121.858L0 120.914C0.0360138 120.552 0.0731374 120.19 0.111994 119.829L9.52666 120.849ZM268 120.914L258.577 121.858C258.544 121.521 258.509 121.185 258.473 120.849L267.888 119.829C267.927 120.19 267.964 120.552 268 120.914ZM11.6145 107.862C11.5434 108.192 11.4733 108.523 11.4049 108.855L2.13302 106.925C2.20667 106.569 2.28159 106.212 2.35803 105.857L11.6145 107.862ZM265.867 106.925L256.595 108.855C256.527 108.523 256.457 108.192 256.386 107.862L265.642 105.857C265.718 106.212 265.793 106.569 265.867 106.925ZM15.0503 95.1693C14.9451 95.4901 14.8407 95.8117 14.738 96.1336L5.7199 93.2346C5.83042 92.8882 5.94266 92.5423 6.05588 92.1971L15.0503 95.1693ZM262.28 93.2346L253.262 96.1336C253.159 95.8117 253.055 95.4901 252.95 95.1693L261.944 92.1971C262.057 92.5423 262.17 92.8882 262.28 93.2346ZM19.7982 82.9113C19.6601 83.2189 19.523 83.5275 19.3872 83.8364L10.7226 80.001C10.8687 79.6686 11.0168 79.3368 11.1655 79.0058L19.7982 82.9113ZM257.277 80.001L248.613 83.8364C248.477 83.5275 248.34 83.2189 248.202 82.9113L256.835 79.0058C256.983 79.3368 257.131 79.6686 257.277 80.001ZM25.8038 71.2205C25.6343 71.5118 25.4655 71.8043 25.2983 72.0971L17.0826 67.3707C17.2625 67.0558 17.4439 66.7413 17.6262 66.4281L25.8038 71.2205ZM250.917 67.3707L242.702 72.0971C242.535 71.8043 242.366 71.5118 242.196 71.2205L250.374 66.4281C250.556 66.7413 250.738 67.0558 250.917 67.3707ZM32.996 60.2227C32.7972 60.4947 32.5989 60.7679 32.4022 61.0416L24.7239 55.4798C24.9354 55.1856 25.1482 54.8924 25.362 54.6001L32.996 60.2227ZM243.276 55.4798L235.598 61.0416C235.401 60.7679 235.203 60.4947 235.004 60.2227L242.638 54.6001C242.852 54.8924 243.065 55.1856 243.276 55.4798ZM41.2918 50.0355C41.0657 50.2854 40.8408 50.5368 40.6167 50.7884L33.557 44.4542C33.7978 44.1837 34.0395 43.9141 34.2824 43.6456L41.2918 50.0355ZM234.443 44.4542L227.383 50.7884C227.159 50.5368 226.934 50.2854 226.708 50.0355L233.718 43.6456C233.961 43.9141 234.202 44.1837 234.443 44.4542ZM50.5996 40.7683C50.3489 40.9932 50.0984 41.219 49.8495 41.4459L43.4834 34.4103C43.7508 34.1665 44.0195 33.9239 44.2889 33.6822L50.5996 40.7683ZM224.517 34.4103L218.15 41.4459C217.902 41.219 217.651 40.9932 217.4 40.7683L223.711 33.6822C223.981 33.9239 224.249 34.1665 224.517 34.4103ZM60.8147 32.5231C60.542 32.7205 60.2698 32.9195 59.9989 33.1191L54.3971 25.4566C54.6884 25.242 54.9805 25.0284 55.2735 24.8162L60.8147 32.5231ZM213.603 25.4566L208.001 33.1191C207.73 32.9195 207.458 32.7205 207.185 32.5231L212.726 24.8162C213.02 25.0284 213.312 25.242 213.603 25.4566ZM71.8291 25.3927C71.5374 25.5605 71.246 25.7299 70.9557 25.9001L66.1811 17.6919C66.4932 17.509 66.8065 17.3269 67.1202 17.1464L71.8291 25.3927ZM201.819 17.6919L197.044 25.9001C196.754 25.7299 196.463 25.5605 196.171 25.3927L200.88 17.1464C201.194 17.3269 201.507 17.509 201.819 17.6919ZM83.5247 19.4596C83.217 19.5958 82.9095 19.7334 82.6031 19.8721L78.7121 11.2071C79.0419 11.0579 79.3724 10.9093 79.7036 10.7626L83.5247 19.4596ZM189.288 11.2071L185.397 19.8721C185.09 19.7334 184.783 19.5958 184.475 19.4596L188.296 10.7626C188.628 10.9093 188.958 11.0579 189.288 11.2071ZM95.7762 14.793C95.4556 14.896 95.1351 15.0009 94.8156 15.1065L91.8544 6.07848C92.1983 5.96483 92.5429 5.85218 92.888 5.74124L95.7762 14.793ZM176.146 6.07848L173.184 15.1065C172.865 15.0009 172.544 14.896 172.224 14.793L175.112 5.74124C175.457 5.85218 175.802 5.96483 176.146 6.07848ZM108.45 11.4474C108.12 11.5161 107.79 11.5865 107.461 11.6578L105.463 2.36683C105.817 2.2901 106.172 2.2149 106.528 2.14098L108.45 11.4474ZM162.537 2.36683L160.539 11.6578C160.21 11.5865 159.88 11.5161 159.55 11.4474L161.472 2.14098C161.828 2.2149 162.183 2.2901 162.537 2.36683ZM121.405 9.45805C121.07 9.49168 120.734 9.52592 120.399 9.56221L119.383 0.112412C119.743 0.0734104 120.103 0.036148 120.464 0L121.405 9.45805ZM148.617 0.112412L147.601 9.56221C147.266 9.52592 146.93 9.49168 146.595 9.45805L147.536 0C147.897 0.0361482 148.257 0.0734103 148.617 0.112412Z"/>
              </g>

              {/* Major ticks at 60/15/30/45 — 9px long × 1px wide, opacity 0.5 */}
              {[0, 90, 180, 270].map((deg, i) => (
                <g key={i} transform={`rotate(${deg} ${CX} ${CY})`}>
                  <rect
                    x={CX - 0.5}
                    y={CY - R - 4.5}
                    width={1}
                    height={9}
                    fill="#7237AE"
                    opacity="0.5"
                  />
                </g>
              ))}

              {/* Progress arc */}
              <circle cx={CX} cy={CY} r={R}
                fill="none"
                stroke="#7237AE"
                strokeWidth="24"
                strokeLinecap="round"
                strokeDasharray={C}
                strokeDashoffset={dashOff}
                transform={`rotate(-90 ${CX} ${CY})`}
                opacity="0.8"
              />

              {/* Handle: white circle + purple caret — draggable when timer is not running */}
              <g
                onPointerDown={onHandlePointerDown}
                onPointerMove={onHandlePointerMove}
                onPointerUp={onHandlePointerUp}
                style={{ cursor: running || done ? 'default' : dragging ? 'grabbing' : 'grab', touchAction: 'none' }}
              >
                <circle cx={hx} cy={hy} r="14" fill="transparent" />
                <circle cx={hx} cy={hy} r="9.5" fill="var(--bg-primary)"/>
                <path
                  d={`M ${hx - 3.71} ${hy - 1.85} L ${hx} ${hy + 1.85} L ${hx + 3.71} ${hy - 1.85}`}
                  stroke="#7237AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  fill="none"
                />
              </g>

              {/* Dial numbers — 8px inside the ring's inner edge */}
              <text x={CX} y={46} textAnchor="middle" fill="var(--text-muted)" fontSize="13" fontFamily="Inter, sans-serif" opacity="0.8">60</text>
              <text x={252} y={148} textAnchor="end" fill="var(--text-muted)" fontSize="13" fontFamily="Inter, sans-serif" opacity="0.8">15</text>
              <text x={CX} y={252} textAnchor="middle" fill="var(--text-muted)" fontSize="13" fontFamily="Inter, sans-serif" opacity="0.8">30</text>
              <text x={36} y={148} textAnchor="start" fill="var(--text-muted)" fontSize="13" fontFamily="Inter, sans-serif" opacity="0.8">45</text>
            </svg>

            {/* Center display */}
            <div className="pomo-time-display">
              {done ? (
                <>
                  <span className="pomo-done-emoji">🎉</span>
                  <span className="pomo-done-text">Concluído!</span>
                </>
              ) : (
                <>
                  <span className="pomo-time">{pad(mins)}:{pad(secs)}</span>
                  <span className="pomo-time-label">minutos</span>
                </>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="pomo-controls">
            <div className="pomo-ctrl-side pomo-ctrl-side--left">
              <span className="pomo-ctrl-label">Resetar</span>
              <button className="pomo-ctrl-btn" type="button" onClick={handleReset}><ResetIcon /></button>
            </div>

            <button
              className={`pomo-play-btn${done ? ' pomo-play-btn--done' : ''}`}
              type="button"
              onClick={handlePlayPause}
            >
              {running ? <PauseIcon /> : <PlayIcon />}
            </button>

            <div className="pomo-ctrl-side pomo-ctrl-side--right">
              <button className="pomo-ctrl-btn" type="button" onClick={handleFinish}><StopIcon /></button>
              <span className="pomo-ctrl-label">Finalizar</span>
            </div>
          </div>
        </div>

        <p className="pomo-note">Sem distrações. Só você e a próxima tarefa</p>
      </div>
    </div>
  )
}
