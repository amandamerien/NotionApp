import { useState, useEffect, useRef } from 'react'
import './NewTask.css'

// ── Icons ────────────────────────────────────────────────────────────────────

function CatIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="60" viewBox="0 0 57 60" fill="none" style={{ position: 'absolute', right: 0, width: 57, height: 60, flexShrink: 0 }}>
      <path d="M25.0907 9.35922C25.1279 9.35716 25.165 9.35303 25.2032 9.35303C25.4291 9.35612 25.6272 9.43661 25.7696 9.61922C26.3319 10.3435 25.6695 15.2958 25.5808 16.4277C27.05 14.8316 28.5006 13.6172 30.4619 12.635C31.1057 12.148 33.1671 11.6456 32.9298 13.1116C32.5161 15.6734 32.0621 18.5943 31.4163 21.1024C31.6216 21.3624 31.8114 21.6348 31.9858 21.9175C33.6283 24.5629 33.0526 27.1495 32.3923 29.9259C33.3064 32.1173 35.6836 33.9218 37.3189 35.6644C43.3978 42.1426 46.0587 49.6165 43.9199 58.4348C46.5622 59.417 48.9383 61.1183 49.7121 63.8916C51.172 69.7663 46.0112 73.2289 41.1342 74.7084C37.5819 75.7855 26.8983 76.5923 25.751 71.8185C25.5859 71.1293 25.717 70.4029 26.1111 69.8138C27.8382 67.2541 31.6979 68.9977 34.2928 69.0555C36.4243 69.104 43.2328 68.5644 42.9016 65.1173C42.8469 64.555 41.9152 64.0412 41.419 63.7947C38.0287 67.9134 33.0103 66.2203 28.3273 66.5009C26.6311 66.602 24.8709 66.959 23.2129 66.666C22.6073 66.5587 22.2669 66.0573 21.9986 65.5662L21.9429 65.462C21.1908 65.7673 20.3127 67.9165 18.3844 67.7421C17.492 68.1042 16.2322 66.5638 16.0145 66.5773C13.3134 66.7403 11.5512 64.8904 14.8476 61.9128C16.4252 54.1809 13.1958 46.7741 15.5595 39.0856C16.2312 36.9014 16.9029 34.7977 16.3963 32.5392C15.4151 31.7366 14.7042 31.3208 13.6952 30.254C11.2943 27.7179 10.9002 23.4146 13.007 20.5979C13.1566 20.3978 13.7055 20.3689 13.9603 20.4102C14.0388 20.5525 14.0821 20.5577 13.9717 20.7898C13.3145 22.162 12.7615 23.429 12.7914 25.0055C12.8389 27.1752 13.8603 29.0159 15.5214 30.3788C15.8536 30.6512 17.4517 31.8098 17.5405 32.1224C18.2957 34.8018 17.1443 37.3771 16.55 39.9657C16.2621 41.2079 16.0568 42.4687 15.9361 43.7387C15.3676 49.9178 17.4765 56.2764 15.7814 62.5122C15.1386 63.0838 13.1102 64.9781 15.2479 65.5042C16.1394 65.723 16.4613 64.4199 16.8616 63.9071C17.0525 63.6636 17.3764 63.3809 17.6333 63.1457C18.0594 61.7188 18.3359 60.2507 18.4566 58.766C18.6599 57.1183 18.7105 55.4551 18.7301 53.7971C18.7424 52.7128 18.1544 50.2748 19.119 49.6392C20.4231 50.3604 19.5224 61.2875 18.8456 62.9765C18.6723 63.4088 16.2652 66.1295 17.7055 66.4431C21.7386 67.3211 22.7972 58.7928 23.768 56.1072C24.1291 55.1064 24.1116 53.6971 24.5934 52.5487C24.8658 52.3207 24.7141 52.3806 25.0618 52.3558L25.2651 52.5364C25.7366 53.8394 24.2437 58.6277 23.8341 60.1165L25.0319 61.6208C25.7727 61.368 25.9305 61.368 26.6889 61.3319C24.8276 55.8874 26.7209 50.4791 31.0738 46.7617C31.5287 46.3738 31.6216 45.6557 32.0508 45.1233C32.3614 44.983 32.3376 44.9768 32.6688 45.0418C32.7926 45.1873 32.8628 45.2286 32.8421 45.4669C32.676 47.4107 31.3699 47.8791 30.3464 49.015C27.9641 51.6573 26.6239 55.6666 27.2233 59.1983C27.3605 60.0061 28.058 61.2648 28.0827 62.0087C27.6247 62.8898 24.8885 62.1635 23.6525 63.6832C22.9158 64.5901 22.7301 65.9242 24.2498 65.6724C28.3097 65.0018 32.123 65.4754 36.1829 65.2391C38.4455 65.0916 39.6815 64.162 41.0383 62.472C43.2338 63.1313 45.2632 64.782 43.5392 67.2757C42.2402 69.1556 39.1068 69.8272 36.9289 70.1378C37.8254 71.8618 37.6304 72.5696 36.7751 74.1956C39.5938 73.9078 40.7494 73.6044 43.3514 72.5428C49.3066 70.113 51.1565 63.4408 44.8206 60.0536C44.1995 59.7214 43.3174 59.4985 42.6251 59.2437C42.6271 58.9496 43.1636 56.3156 43.2503 55.7605C42.3403 55.5686 41.3963 55.3922 40.5121 55.1291C37.5644 54.2501 36.0632 51.1899 37.0764 48.3042C37.8275 46.1644 39.3235 44.6425 41.3292 43.651C40.7597 42.3273 40.1045 41.1738 39.2028 40.0513C37.6108 40.2154 36.2624 40.8024 34.5569 40.7436C28.9277 40.5517 28.1911 34.9824 31.9879 31.6674C31.6144 31.0556 31.4937 30.7378 31.2254 30.0744C31.9672 26.971 32.5987 24.1388 30.2525 21.5224C30.3103 20.7558 30.5703 19.6456 30.7116 18.8615C31.0438 17.0209 31.4328 15.1927 31.7 13.3386C30.2649 14.0536 29.3858 14.5179 28.1147 15.5218C27.312 16.1553 26.1039 17.9113 25.3363 17.9618C25.036 17.6936 25.1248 17.6946 25.0257 17.1942C22.7569 15.9654 19.7174 16.1924 17.4775 17.3882C16.4829 17.9195 15.6844 18.6748 14.8579 19.4279L14.242 18.4756C15.673 16.9415 17.2402 15.953 19.2954 15.4826C20.7131 12.9806 22.4402 10.6375 25.0907 9.35922Z" fill="#37352F"/>
      <path d="M19.6576 18.4106C19.8959 18.4994 19.9155 18.5417 20.1322 18.6975C20.4881 19.7612 17.5301 20.7558 16.8389 21.0467C16.4582 21.2067 16.9864 21.4718 16.8027 22.1311C16.5933 22.356 16.551 22.3447 16.258 22.4076L16.0981 22.4406C15.4574 22.5799 15.3821 22.9358 14.9869 23.5487C14.5505 23.4001 14.3565 23.4053 14.3462 22.9193C14.3957 22.8347 14.4432 22.7501 14.4896 22.6645C14.9219 21.8587 14.4133 21.802 14.4648 20.9652C14.8239 20.3472 17.1143 20.0645 18.013 19.5136C18.7115 19.0844 18.9333 18.9595 19.6576 18.4106Z" fill="#37352F"/>
      <path d="M23.1198 24.4768C24.5488 24.5934 28.099 25.3321 29.0637 26.4206C29.1607 26.8116 29.1431 26.6703 28.945 27.1191C28.585 27.0706 26.8877 26.3865 26.4689 26.2287C25.7332 25.9512 23.4789 25.49 23.0744 25.1237C22.9661 24.7915 23.0074 24.8792 23.1198 24.4768Z" fill="#37352F"/>
      <path d="M22.1976 26.8479C23.0292 27.2647 25.884 29.7502 26.4236 30.5322C26.4412 30.9222 26.4236 30.8139 26.1791 31.2132C25.6281 31.0182 22.3875 28.0984 21.9108 27.533C21.884 27.1781 21.9459 27.2286 22.1976 26.8479Z" fill="#37352F"/>
      <path d="M10.0467 16.4165C10.9846 16.4939 12.3857 17.9032 12.7953 18.7276C12.9232 18.9855 12.6952 19.2548 12.5714 19.4694L12.2743 19.4137C11.6119 18.7905 10.5358 17.8929 9.98277 17.1521C9.81047 16.9221 9.95595 16.6786 10.0467 16.4165Z" fill="#37352F"/>
      <path d="M8.38897 20.6506C9.21848 20.7383 11.121 20.7765 11.5327 21.5761C11.5079 21.9661 11.5141 21.8464 11.2582 22.2137C10.4927 22.0961 9.1638 21.8 8.39 21.6081C8.13103 21.5441 8.07016 21.3481 8 21.1521C8.13 20.7755 8.03405 20.9529 8.38897 20.6506Z" fill="#37352F"/>
      <path d="M21.3416 20.1631C21.5603 20.2394 21.648 20.291 21.8584 20.3942C22.4259 21.2258 21.5758 21.8985 20.9165 22.3628C20.6266 22.2936 20.6936 22.2988 20.4233 22.1358C19.957 21.3259 20.7442 20.6532 21.3416 20.1631Z" fill="#37352F"/>
      <path d="M17.2381 17.7886C17.7168 17.9041 17.8974 17.9681 18.0109 18.4561C17.8613 19.0813 17.5703 19.2454 17.0565 19.6261C16.974 19.6344 16.7078 19.6292 16.616 19.6292C16.3137 19.428 16.4065 19.5621 16.3147 19.2237C16.4519 18.5417 16.7429 18.2683 17.2381 17.7886Z" fill="#37352F"/>
      <path d="M15.5501 25.2935C15.5511 25.2935 15.8421 25.4059 15.8421 25.4059C16.3157 25.7639 16.8315 25.3172 17.3309 25.5297C17.4268 25.8712 17.432 25.6958 17.2339 26.0662C17.1782 26.1116 17.1225 26.156 17.0647 26.1993C16.5107 26.6141 15.8741 26.7038 15.4294 26.0931C15.3417 25.6979 15.3861 25.6556 15.5501 25.2935Z" fill="#37352F"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 5L15 15" stroke="#242320" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 5L5 15" stroke="#242320" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function WaveformIcon({ color = '#5F5B57' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ width: 16, height: 16, aspectRatio: '1/1', flexShrink: 0 }}>
      <path d="M3 6V10" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 2V14" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 4V12" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 6V10" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 5V11" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M6 7C6 7 6.5 4 7 2C7.5 4 8 7 8 7C8 7 11 7.5 13 8C11 8.5 8 9 8 9C8 9 7.5 12 7 14C6.5 12 6 9 6 9C6 9 3 8.5 1 8C3 7.5 6 7 6 7Z" stroke="#78736f" strokeWidth="1" strokeLinejoin="round"/>
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

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ width: 16, height: 16, flexShrink: 0 }}>
      <path d="M13.5 3.5H2.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.5 6.5V10.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 6.5V10.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 3.5V13C12.5 13.1326 12.4473 13.2598 12.3536 13.3536C12.2598 13.4473 12.1326 13.5 12 13.5H4C3.86739 13.5 3.74021 13.4473 3.64645 13.3536C3.55268 13.2598 3.5 13.1326 3.5 13V3.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 3.5V2.5C10.5 2.23478 10.3946 1.98043 10.2071 1.79289C10.0196 1.60536 9.76522 1.5 9.5 1.5H6.5C6.23478 1.5 5.98043 1.60536 5.79289 1.79289C5.60536 1.98043 5.5 2.23478 5.5 2.5V3.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function DotsVerticalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="4" r="1" fill="#5f5b57"/>
      <circle cx="8" cy="8" r="1" fill="#5f5b57"/>
      <circle cx="8" cy="12" r="1" fill="#5f5b57"/>
    </svg>
  )
}

function VoiceWaveformDots({ active }) {
  return (
    <div className="nt-voice-dots">
      {Array.from({ length: 33 }).map((_, i) => (
        <div key={i} className={`nt-voice-dot${active ? ' nt-voice-dot--active' : ''}`} style={active ? { animationDelay: `${(i * 47) % 400}ms` } : {}} />
      ))}
    </div>
  )
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 3V13" stroke="#242320" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 8H13" stroke="#242320" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8L6.5 11.5L13 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function MicIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10.5 4C10.5 2.61929 9.38071 1.5 8 1.5C6.61929 1.5 5.5 2.61929 5.5 4V8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8V4Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 12.5V15" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 8C12.5 10.2091 10.4853 12 8 12C5.51472 12 3.5 10.2091 3.5 8" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// ── Category ─────────────────────────────────────────────────────────────────

const CATEGORY_STYLES = {
  trabalho: { bg: 'rgba(230,243,254,0.5)', border: '#dbe8f2', dotColor: '#005bab', textColor: '#005bab', label: 'Trabalho' },
  esporte:  { bg: 'rgba(208,244,216,0.7)', border: '#d0f4d8', dotColor: '#14832b', textColor: '#0f6220', label: 'Esporte' },
  saude:    { bg: 'rgba(255,205,241,0.7)', border: '#ffcdf1', dotColor: '#9d2472', textColor: '#9d2472', label: 'Saúde' },
}

function CategoryTag({ type }) {
  const s = CATEGORY_STYLES[type] || CATEGORY_STYLES.trabalho
  return (
    <div className="nt-category-tag" style={{ background: s.bg, borderColor: s.border }}>
      <div className="nt-category-dot" style={{ background: s.dotColor }} />
      <span className="nt-category-label" style={{ color: s.textColor }}>{s.label}</span>
    </div>
  )
}

function TaskItem({ title, time, category, last }) {
  return (
    <div className={`nt-task-item${last ? ' nt-task-item--last' : ''}`}>
      <div className="nt-task-info">
        <div className="nt-task-checkbox-row">
          <div className="nt-task-checkbox" />
          <span className="nt-task-title">{title}</span>
        </div>
        <div className="nt-task-time-row">
          <ClockIcon />
          <span className="nt-task-time">{time || 'Hoje'}</span>
        </div>
      </div>
      <div className="nt-task-status">
        <CategoryTag type={category} />
        <button className="nt-task-dots" type="button"><DotsVerticalIcon /></button>
      </div>
    </div>
  )
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

const PT_DAYS_LONG_GPT = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']

function localISO(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

async function generateTasksWithGPT(text, todayISO) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY
  if (!apiKey) throw new Error('no-key')

  const todayDate = todayISO || localISO(new Date())
  const todayObj = new Date(todayDate + 'T12:00:00')
  const todayDayName = PT_DAYS_LONG_GPT[todayObj.getDay()]
  const tomorrowDate = new Date(todayObj)
  tomorrowDate.setDate(todayObj.getDate() + 1)
  const tomorrowISO = localISO(tomorrowDate)

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `Você é um assistente de produtividade. Hoje é ${todayDate} (${todayDayName}). Amanhã é ${tomorrowISO}.
Analise o texto transcrito e extraia TODAS as tarefas mencionadas, sem omitir nenhuma.
Cada item distinto que o usuário mencionar deve virar uma tarefa separada.
Para cada tarefa, retorne um objeto no array JSON:
{"title": "título objetivo e curto (máx 45 chars)", "time": "horário exato como '9h' ou '20:00' ou null se não mencionado", "date": "YYYY-MM-DD", "category": "trabalho|esporte|saude"}
Regras de data:
- "hoje" ou sem menção de data → ${todayDate}
- "amanhã" → ${tomorrowISO}
- Nome de dia da semana (ex: "segunda", "terça") → calcule a próxima ocorrência desse dia a partir de hoje
- Datas explícitas (ex: "dia 20") → use o mês atual (${todayDate.slice(0, 7)})
Regras gerais:
- Extraia TODAS as tarefas, mesmo que o usuário mencione muitas
- Se mencionar horário como "8 horas da manhã" → "8h", "20 horas" → "20:00"
- category "saude" para consultas/médicos/remédios, "esporte" para treino/academia/corrida, "trabalho" para o resto
- Retorne APENAS o array JSON válido, sem markdown, sem texto adicional.`,
        },
        { role: 'user', content: text },
      ],
      max_tokens: 600,
    }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.error?.message || `HTTP ${res.status}`)
  }

  const data = await res.json()
  const content = data.choices[0]?.message?.content?.trim() || '[]'
  const parsed = JSON.parse(content)
  return Array.isArray(parsed) ? parsed : [parsed]
}

// ── Main component ────────────────────────────────────────────────────────────

const CHUNK_DURATION = 4000

// mode: 'recording' | 'thinking' | 'ready'

export default function NewTask({ onClose, onConfirm }) {
  const [transcript, setTranscript] = useState('')
  const [listening, setListening] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [mode, setMode] = useState('recording')
  const [generatedTasks, setGeneratedTasks] = useState([])
  const [seconds, setSeconds] = useState(0)
  const [error, setError] = useState('')

  const mediaRecorderRef = useRef(null)
  const streamRef = useRef(null)
  const recognitionRef = useRef(null)
  const timerRef = useRef(null)
  const stoppedRef = useRef(false)
  const sessionRef = useRef(0)
  const transcriptRef = useRef('')
  const whisperPendingRef = useRef(0)

  // ── Whisper chunked (transcrição em tempo real) ──────────────────
  function getBestMimeType() {
    const types = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus']
    return types.find(t => MediaRecorder.isTypeSupported(t)) || 'audio/webm'
  }

  function recordNextChunk(stream, mimeType, sessionId) {
    if (stoppedRef.current || !stream || sessionId !== sessionRef.current) return

    const recorder = new MediaRecorder(stream, { mimeType })
    const chunks = []
    recorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data) }

    recorder.onstop = async () => {
      if (chunks.length === 0 || sessionId !== sessionRef.current) return
      const blob = new Blob(chunks, { type: mimeType })
      if (blob.size < 1500) {
        if (!stoppedRef.current && sessionId === sessionRef.current) recordNextChunk(stream, mimeType, sessionId)
        return
      }

      setProcessing(true)
      whisperPendingRef.current++
      try {
        const apiKey = import.meta.env.VITE_OPENAI_API_KEY
        const ext = mimeType.includes('mp4') ? 'mp4' : mimeType.includes('ogg') ? 'ogg' : 'webm'
        const formData = new FormData()
        formData.append('file', blob, `audio.${ext}`)
        formData.append('model', 'whisper-1')
        formData.append('language', 'pt')
        if (transcriptRef.current) {
          formData.append('prompt', transcriptRef.current.slice(-200))
        }

        const res = await fetch('https://api.openai.com/v1/audio/transcriptions', {
          method: 'POST',
          headers: { Authorization: `Bearer ${apiKey}` },
          body: formData,
        })

        if (res.ok && sessionId === sessionRef.current) {
          const data = await res.json()
          const text = data.text?.trim()
          if (text) {
            const norm = s => s.toLowerCase().replace(/[^a-záéíóúãõâêôç\d]/gi, '')
            const newNorm = norm(text)
            const recentNorm = norm(transcriptRef.current.slice(-(text.length * 3)))
            if (!recentNorm.includes(newNorm)) {
              transcriptRef.current = (transcriptRef.current + ' ' + text).trim()
              setTranscript(transcriptRef.current)
            }
          }
        } else if (!res.ok && sessionId === sessionRef.current) {
          const errData = await res.json().catch(() => ({}))
          setError(`Erro ao transcrever: ${errData.error?.message || `HTTP ${res.status}`}`)
        }
      } catch (e) {
        if (sessionId === sessionRef.current) setError('Erro de conexão. Verifique sua internet.')
      } finally {
        setProcessing(false)
        whisperPendingRef.current--
      }

      if (!stoppedRef.current && sessionId === sessionRef.current) recordNextChunk(stream, mimeType, sessionId)
    }

    recorder.start()
    mediaRecorderRef.current = recorder
    setTimeout(() => { if (recorder.state === 'recording') recorder.stop() }, 5000)
  }

  function startRecording() {
    const sessionId = sessionRef.current
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        if (sessionId !== sessionRef.current) { stream.getTracks().forEach(t => t.stop()); return }
        streamRef.current = stream
        setListening(true)
        setError('')
        recordNextChunk(stream, getBestMimeType(), sessionId)
      })
      .catch(() => setError('Permissão de microfone negada. Clique no cadeado e permita o microfone.'))
  }

  function startWhisperFallback() {
    stoppedRef.current = false
    startRecording()
  }

  useEffect(() => {
    sessionRef.current += 1
    stoppedRef.current = false
    startRecording()
    timerRef.current = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => {
      sessionRef.current += 1
      stoppedRef.current = true
      if (mediaRecorderRef.current?.state === 'recording') mediaRecorderRef.current.stop()
      streamRef.current?.getTracks().forEach(t => t.stop())
      recognitionRef.current?.stop()
      clearInterval(timerRef.current)
    }
  }, [])

  // ── Handlers ─────────────────────────────────────────────────────

  async function handleStop() {
    stoppedRef.current = true
    if (mediaRecorderRef.current?.state === 'recording') mediaRecorderRef.current.stop()
    recognitionRef.current?.stop()
    clearInterval(timerRef.current)
    setListening(false)
    setProcessing(false)
    setMode('thinking')

    // Wait for any in-flight Whisper requests to finish (they were started before stop)
    const waitStart = Date.now()
    while (whisperPendingRef.current > 0 && Date.now() - waitStart < 5000) {
      await new Promise(r => setTimeout(r, 100))
    }

    const thinkingStart = Date.now()

    if (transcriptRef.current.trim()) {
      const todayISO = localISO(new Date())
      let tasks = []
      try {
        tasks = await generateTasksWithGPT(transcriptRef.current, todayISO)
      } catch (_) {
        tasks = []
      }

      if (tasks.length === 0) {
        // GPT returned nothing or failed — extract tasks from transcript directly
        const sentences = transcriptRef.current
          .split(/[.!?;]+/)
          .map(s => s.trim())
          .filter(s => s.length > 3)
        tasks = sentences.length > 0
          ? sentences.map(s => ({ title: s, time: null, date: todayISO, category: 'trabalho' }))
          : [{ title: transcriptRef.current.trim(), time: null, date: todayISO, category: 'trabalho' }]
      }

      setGeneratedTasks(tasks)
    }

    const elapsed = Date.now() - thinkingStart
    if (elapsed < 800) await new Promise(r => setTimeout(r, 800 - elapsed))

    setMode('ready')
  }

  function handleFalar() {
    // Kill old session before starting new one
    sessionRef.current += 1
    stoppedRef.current = true
    if (mediaRecorderRef.current?.state === 'recording') mediaRecorderRef.current.stop()
    streamRef.current?.getTracks().forEach(t => t.stop())
    streamRef.current = null

    recognitionRef.current?.stop()
    recognitionRef.current = null
    clearInterval(timerRef.current)

    stoppedRef.current = false
    transcriptRef.current = ''
    setTranscript('')
    setSeconds(0)
    setMode('recording')
    setGeneratedTasks([])
    setError('')

    setTimeout(() => startRecording(), 100)
    timerRef.current = setInterval(() => setSeconds(s => s + 1), 1000)
  }

  function handleConfirm() {
    sessionRef.current += 1
    stoppedRef.current = true
    if (mediaRecorderRef.current?.state === 'recording') mediaRecorderRef.current.stop()
    streamRef.current?.getTracks().forEach(t => t.stop())
    recognitionRef.current?.stop()
    clearInterval(timerRef.current)
    if (onConfirm) {
      onConfirm(generatedTasks)
    } else {
      onClose()
    }
  }

  function handleTrash() {
    transcriptRef.current = ''
    setTranscript('')
    setSeconds(0)
    setGeneratedTasks([])
  }

  const isRecording = mode === 'recording'
  const isThinking = mode === 'thinking'
  const isReady = mode === 'ready'

  return (
    <div className="nt">
      <div className="nt-container">
        <header className="nt-header">
          <button className="nt-close-btn" type="button" onClick={onClose}>
            <XIcon />
          </button>
          <div className="nt-listening">
            <div className={`nt-listening-dot${!isRecording ? ' nt-listening-dot--off' : ''}`} />
            <span className="nt-listening-text" style={{ color: isRecording ? '#14832b' : '#78736f' }}>
              {isRecording ? 'Estou ouvindo' : 'Pausado'}
            </span>
          </div>
          <div className="nt-header-spacer" />
        </header>

        <div className="nt-main">
          {/* Transcription */}
          <div className="nt-transcription-section">
            <div className="nt-transcription-card">
              <div className="nt-transcription-header">
                <WaveformIcon />
                <span className="nt-transcription-label">Transcrição ao vivo</span>
              </div>
              {error ? (
                <p className="nt-transcription-error">{error}</p>
              ) : transcript ? (
                <p className="nt-transcription-text">
                  {transcript}
                  {isRecording && processing && <span className="nt-transcription-muted"><span className="nt-cursor">|</span></span>}
                  {isRecording && !processing && <span className="nt-cursor">|</span>}
                </p>
              ) : (
                <p className="nt-transcription-placeholder">
                  {isRecording ? <>Fale agora...<span className="nt-cursor">|</span></> : 'Fale agora...'}
                </p>
              )}
            </div>

            {/* Pulse está pensando — only during thinking mode */}
            {isThinking && (
              <div className="nt-thinking">
                <SparkleIcon />
                <span className="nt-thinking-text">Pulse está pensando...</span>
              </div>
            )}
          </div>

          {/* Generated tasks — only when ready */}
          {isReady && generatedTasks.length > 0 && (
            <div className="nt-tasks-section">
              <div className="nt-tasks-header">
                <span className="nt-tasks-title">Tarefas</span>
                <div className="nt-tasks-counter">
                  <span>{generatedTasks.length}</span>
                </div>
              </div>
              <div className="nt-tasks-container">
                {generatedTasks.map((task, idx) => (
                  <TaskItem
                    key={idx}
                    title={task.title}
                    time={task.time}
                    category={task.category}
                    last={idx === generatedTasks.length - 1}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Tips — only when recording with no transcript yet */}
          {isRecording && !transcript && (
            <div className="nt-tips">
              <p className="nt-tips-text">
                <span className="nt-tips-bold">Dica:</span>{' '}
                Fale simples: "adicionar reunião 9h", "criar checklist" ou "lembrar revisar capítulo 3 18h".
              </p>
              <CatIcon />
            </div>
          )}
        </div>
      </div>

      <div className="nt-prompt-bar">
        <div className={`nt-prompt-card${!isRecording ? ' nt-prompt-card--stopped' : ''}`}>
          <div className="nt-prompt-top">
            <span className="nt-timer">{formatTime(seconds)}</span>
            <VoiceWaveformDots active={listening && !processing} />
          </div>
          <div className="nt-prompt-actions">
            {isRecording && (
              <>
                <button className="nt-trash-btn" type="button" onClick={handleTrash}>
                  <TrashIcon />
                </button>
                <button className="nt-stop-btn" type="button" onClick={handleStop}>
                  <WaveformIcon color="white" />
                  <span>Parar</span>
                </button>
              </>
            )}

            {isThinking && (
              <div className="nt-thinking-inline">
                <span className="nt-thinking-text">Processando...</span>
              </div>
            )}

            {isReady && generatedTasks.length === 0 && (
              <div className="nt-stopped-btns">
                <p className="nt-no-tasks-msg">Não detectei tarefas. Tente novamente.</p>
                <button className="nt-falar-btn" type="button" onClick={handleFalar}>
                  <MicIcon />
                  <span>Falar</span>
                </button>
              </div>
            )}

            {isReady && generatedTasks.length > 0 && (
              <>
                <button className="nt-add-btn" type="button">
                  <PlusIcon />
                </button>
                <div className="nt-stopped-btns">
                  <button className="nt-falar-btn" type="button" onClick={handleFalar}>
                    <MicIcon />
                    <span>Falar</span>
                  </button>
                  <button className="nt-confirm-btn" type="button" onClick={handleConfirm}>
                    <span>Confirmar</span>
                    <CheckIcon />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
