import { useState } from 'react'
import './TaskDetail.css'
import DatePickerSheet from './DatePickerSheet'
import man1Img from '../assets/man_1.svg'
import man2Img from '../assets/man_2.svg'
import man3Img from '../assets/man_3.svg'
import woman1Img from '../assets/woman_1.svg'
import woman2Img from '../assets/woman_2.svg'
import woman3Img from '../assets/woman_3.svg'

const GROUP_PEOPLE = [
  { id: 'man_1', img: man1Img, name: 'Carlos' },
  { id: 'man_2', img: man2Img, name: 'Lucas' },
  { id: 'man_3', img: man3Img, name: 'Pedro' },
  { id: 'woman_1', img: woman1Img, name: 'Ana' },
  { id: 'woman_2', img: woman2Img, name: 'Julia' },
  { id: 'woman_3', img: woman3Img, name: 'Maria' },
]

// ── Icons ─────────────────────────────────────────────────────────────────────

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M15.625 4.375L4.375 15.625" stroke="#242320" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4.375 4.375L15.625 15.625" stroke="#242320" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M15.1875 3.9375H2.8125" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.3125 7.3125V11.8125" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6875 7.3125V11.8125" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.0625 3.9375V14.625C14.0625 14.7742 14.0032 14.9173 13.8977 15.0227C13.7923 15.1282 13.6492 15.1875 13.5 15.1875H4.5C4.35082 15.1875 4.20774 15.1282 4.10225 15.0227C3.99676 14.9173 3.9375 14.7742 3.9375 14.625V3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.8125 3.9375V2.8125C11.8125 2.51413 11.694 2.22798 11.483 2.017C11.272 1.80603 10.9859 1.6875 10.6875 1.6875H7.3125C7.01413 1.6875 6.72798 1.80603 6.51701 2.017C6.30603 2.22798 6.1875 2.51413 6.1875 2.8125V3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 6L5 9L10 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CalendarBlankIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 2.25V5.25" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 2.25V5.25" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.75 8.25H20.25" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function BellSimpleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 21H15" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.24988 9.75C5.24988 7.95979 5.96104 6.2429 7.22691 4.97703C8.49278 3.71116 10.2097 3 11.9999 3C13.7901 3 15.507 3.71116 16.7729 4.97703C18.0387 6.2429 18.7499 7.95979 18.7499 9.75C18.7499 13.1081 19.528 15.8063 20.1468 16.875C20.2125 16.9888 20.2471 17.1179 20.2472 17.2493C20.2474 17.3808 20.2129 17.5099 20.1474 17.6239C20.0819 17.7378 19.9876 17.8325 19.874 17.8985C19.7603 17.9645 19.6313 17.9995 19.4999 18H4.49988C4.36861 17.9992 4.23985 17.964 4.12646 17.8978C4.01308 17.8317 3.91904 17.7369 3.85375 17.6231C3.78845 17.5092 3.7542 17.3801 3.7544 17.2489C3.75459 17.1176 3.78925 16.9887 3.85488 16.875C4.4727 15.8063 5.24988 13.1072 5.24988 9.75Z" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function TagIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3.96938 12.9694C3.82899 12.8288 3.75009 12.6383 3.75 12.4397V3.75H12.4397C12.6383 3.75009 12.8288 3.82899 12.9694 3.96938L22.2806 13.2806C22.4212 13.4213 22.5001 13.612 22.5001 13.8108C22.5001 14.0096 22.4212 14.2003 22.2806 14.3409L14.3438 22.2806C14.2031 22.4212 14.0124 22.5001 13.8136 22.5001C13.6148 22.5001 13.4241 22.4212 13.2834 22.2806L3.96938 12.9694Z" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.875 7.25C8.22018 7.25 8.5 7.52982 8.5 7.875C8.5 8.22018 8.22018 8.5 7.875 8.5C7.52982 8.5 7.25 8.22018 7.25 7.875C7.25 7.52982 7.52982 7.25 7.875 7.25Z" fill="#343330" stroke="#242320"/>
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7.875 15C10.5674 15 12.75 12.8174 12.75 10.125C12.75 7.43261 10.5674 5.25 7.875 5.25C5.18261 5.25 3 7.43261 3 10.125C3 12.8174 5.18261 15 7.875 15Z" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.958984 18.75C1.70813 17.5982 2.73311 16.6517 3.94086 15.9965C5.14861 15.3412 6.50089 14.998 7.87492 14.998C9.24896 14.998 10.6012 15.3412 11.809 15.9965C13.0167 16.6517 14.0417 17.5982 14.7909 18.75" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.125 15C17.499 14.9992 18.8513 15.3418 20.0592 15.9967C21.267 16.6517 22.292 17.5981 23.0409 18.75" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.3145 5.59687C14.9813 5.3309 15.6987 5.2155 16.4153 5.25893C17.1319 5.30235 17.8301 5.50352 18.46 5.84806C19.0899 6.19261 19.6359 6.67202 20.059 7.25204C20.4821 7.83206 20.7718 8.49838 20.9076 9.20338C21.0433 9.90837 21.0216 10.6346 20.8441 11.3303C20.6666 12.026 20.3376 12.6738 19.8807 13.2276C19.4238 13.7814 18.8502 14.2274 18.2009 14.5338C17.5516 14.8402 16.8427 14.9994 16.1248 15" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function FileTextIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M18.75 21H5.25C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25V3.75C4.5 3.55109 4.57902 3.36032 4.71967 3.21967C4.86032 3.07902 5.05109 3 5.25 3H14.25L19.5 8.25V20.25C19.5 20.4489 19.421 20.6397 19.2803 20.7803C19.1397 20.921 18.9489 21 18.75 21Z" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.25 3V8.25H19.5" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12.75H15" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 15.75H15" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function GoogleCalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22.844" height="22.844" viewBox="0 0 23 23" fill="none" style={{ flexShrink: 0 }}>
      <path d="M17.439 5.41431H5.41406V17.4392H17.439V5.41431Z" fill="white"/>
      <path d="M17.4297 22.8439L22.8434 17.4302H17.4297V22.8439Z" fill="#EA4335"/>
      <path d="M22.8434 5.41431H17.4297V17.4392H22.8434V5.41431Z" fill="#FBBC04"/>
      <path d="M17.439 17.4302H5.41406V22.8439H17.439V17.4302Z" fill="#34A853"/>
      <path d="M0 17.4302V21.0347C0 22.0354 0.808444 22.8439 1.80472 22.8439H5.40926V17.4302H0Z" fill="#188038"/>
      <path d="M22.8433 5.41372V1.80428C22.8433 0.808444 22.0349 0 21.0386 0H17.4341V5.41372H22.8433Z" fill="#1967D2"/>
      <path d="M17.4302 0.000488281H1.80521C0.808932 0.000488281 0.000488281 0.808932 0.000488281 1.80521V17.4347H5.41421V5.4142H17.4391L17.4302 0.000488281Z" fill="#4285F4"/>
      <path d="M7.87637 14.7385C7.42396 14.4369 7.11789 13.9939 6.94434 13.4045L7.99058 12.9748C8.08651 13.3358 8.25114 13.6146 8.48404 13.8154C8.7214 14.0117 9.00471 14.1076 9.33844 14.1076C9.67663 14.1076 9.97332 14.0073 10.2156 13.7971C10.4623 13.587 10.5855 13.322 10.5855 13.0021C10.5855 12.6777 10.4574 12.4082 10.1973 12.1981C9.93674 11.9924 9.61238 11.8875 9.22422 11.8875H8.62101V10.8551H9.15997C9.4937 10.8551 9.77657 10.7637 10.005 10.5812C10.2334 10.4032 10.3477 10.1515 10.3477 9.841C10.3477 9.55769 10.2473 9.33863 10.0416 9.17399C9.83591 9.00936 9.57579 8.9228 9.26482 8.9228C8.95875 8.9228 8.71649 9.0049 8.53401 9.16953C8.35599 9.33416 8.21857 9.5394 8.14094 9.77274L7.10852 9.34309C7.24549 8.95493 7.49668 8.61228 7.86254 8.31513C8.2324 8.0229 8.7031 7.86719 9.27419 7.86719C9.69893 7.86719 10.0782 7.94928 10.4119 8.11391C10.7456 8.27855 11.0151 8.50698 11.207 8.79029C11.3988 9.07807 11.4947 9.40689 11.4947 9.76783C11.4947 10.1377 11.4033 10.4442 11.2253 10.7043C11.0472 10.96 10.8277 11.1567 10.5672 11.2937V11.3575C10.9009 11.4945 11.1931 11.7229 11.4077 12.0156C11.6272 12.3078 11.7321 12.6598 11.7321 13.0663C11.7321 13.4777 11.6317 13.8386 11.4216 14.1581C11.2159 14.478 10.9281 14.7291 10.5627 14.9121C10.1973 15.095 9.78594 15.1909 9.32907 15.1909C8.81286 15.1909 8.32387 15.0401 7.87637 14.7385ZM14.2815 9.56215L13.1348 10.3938L12.5637 9.52557L14.6152 8.04521H15.4058V15.0357H14.2815V9.56215Z" fill="#4285F4"/>
    </svg>
  )
}

function CaretRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 3L11 8L6 13" stroke="#C5C2BE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function MicIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10.5 4C10.5 2.61929 9.38071 1.5 8 1.5C6.61929 1.5 5.5 2.61929 5.5 4V8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8V4Z" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 12.5V15" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 8C12.5 9.19347 12.0259 10.3381 11.182 11.182C10.3381 12.0259 9.19347 12.5 8 12.5C6.80653 12.5 5.66193 12.0259 4.81802 11.182C3.97411 10.3381 3.5 9.19347 3.5 8" stroke="#242320" strokeLinecap="round" strokeLinejoin="round"/>
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

// ── Helpers ───────────────────────────────────────────────────────────────────

const PT_DAYS_LONG = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

function formatDate(isoDate) {
  if (!isoDate) return '—'
  const [year, month, day] = isoDate.split('-').map(Number)
  const d = new Date(year, month - 1, day)
  const dayName = PT_DAYS_LONG[d.getDay()]
  return `${dayName}, ${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}`
}

const CATEGORY_STYLES = {
  trabalho: { bg: 'rgba(230,243,254,0.5)', border: '#dbe8f2', dotColor: '#005bab', textColor: '#005bab', label: 'Trabalho' },
  esporte:  { bg: 'rgba(208,244,216,0.7)', border: '#d0f4d8', dotColor: '#14832b', textColor: '#0f6220', label: 'Esporte' },
  saude:    { bg: 'rgba(255,205,241,0.7)', border: '#ffcdf1', dotColor: '#9d2472', textColor: '#9d2472', label: 'Saúde' },
}

function AvatarBubble({ children }) {
  return (
    <div className="td-avatar-bubble">
      {children}
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function TaskDetail({ task, onClose, onDelete, onSave }) {
  const [done, setDone] = useState(false)
  const [titleValue, setTitleValue] = useState(task?.title || '')
  const [editingTitle, setEditingTitle] = useState(false)
  const [description, setDescription] = useState(task?.description || '')
  const [calendarSync, setCalendarSync] = useState(false)
  const [date, setDate] = useState(task?.date || '')
  const [showGroupPicker, setShowGroupPicker] = useState(false)
  const [selectedMembers, setSelectedMembers] = useState(task?.members || [])
  const [draftMembers, setDraftMembers] = useState([])
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [reminder, setReminder] = useState(task?.reminder || '15 min antes')
  const [showReminderPicker, setShowReminderPicker] = useState(false)
  const [category, setCategory] = useState(task?.category || 'trabalho')
  const [showCategoryPicker, setShowCategoryPicker] = useState(false)

  const s = CATEGORY_STYLES[category] || CATEGORY_STYLES.trabalho
  const isTeam = task?.type === 'team' || task?.shared === true

  function handleSave() {
    if (onSave) onSave({ ...task, title: titleValue, description, done, date, members: selectedMembers, reminder, category })
    onClose()
  }

  function openGroupPicker() {
    setDraftMembers([...selectedMembers])
    setShowGroupPicker(true)
  }

  function toggleDraft(id) {
    setDraftMembers(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  function confirmGroupPicker() {
    setSelectedMembers(draftMembers)
    setShowGroupPicker(false)
  }

  function handleDelete() {
    if (onDelete) onDelete(task)
    onClose()
  }

  return (
    <div className="td">
      {/* Header */}
      <header className="td-header">
        <button className="td-header-btn" type="button" onClick={onClose}>
          <XIcon />
        </button>
        <span className="td-header-title">Tarefa</span>
        <button className="td-header-btn" type="button" onClick={handleDelete}>
          <TrashIcon />
        </button>
      </header>

      {/* Body */}
      <div className="td-body">
        <div className="td-top">
          {/* Checkbox + title */}
          <div className="td-title-row">
            <button
              type="button"
              className={`td-checkbox${done ? ' td-checkbox--done' : ''}`}
              onClick={() => setDone(d => !d)}
            >
              {done && <CheckIcon />}
            </button>
            {editingTitle ? (
              <input
                className={`td-title-input${done ? ' td-title--done' : ''}`}
                value={titleValue}
                onChange={e => setTitleValue(e.target.value)}
                onBlur={() => setEditingTitle(false)}
                onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); setEditingTitle(false) } }}
                autoFocus
              />
            ) : (
              <h1
                className={`td-title${done ? ' td-title--done' : ''}`}
                onDoubleClick={() => setEditingTitle(true)}
              >
                {titleValue || 'Tarefa'}
              </h1>
            )}
          </div>

          {/* Info rows — each is its own bordered card */}
          <div className="td-rows">
            {/* Data */}
            <div className="td-row-card" style={{ cursor: 'pointer' }} onClick={() => setShowDatePicker(true)}>
              <div className="td-row-left">
                <CalendarBlankIcon />
                <span className="td-row-label">Data</span>
              </div>
              <div className="td-row-right">
                <span className="td-row-value">{formatDate(date)}</span>
                <CaretRightIcon />
              </div>
            </div>

            {/* Lembrete */}
            <div className="td-row-card" style={{ cursor: 'pointer' }} onClick={() => setShowReminderPicker(true)}>
              <div className="td-row-left">
                <BellSimpleIcon />
                <span className="td-row-label">Lembrete</span>
              </div>
              <div className="td-row-right">
                <span className={`td-row-value${reminder === 'Nenhum' ? ' td-row-value--muted' : ''}`}>{reminder}</span>
                <CaretRightIcon />
              </div>
            </div>

            {/* Categoria */}
            <div className="td-row-card" style={{ cursor: 'pointer' }} onClick={() => setShowCategoryPicker(true)}>
              <div className="td-row-left">
                <TagIcon />
                <span className="td-row-label">Categoria</span>
              </div>
              <div className="td-row-right">
                <div className="td-category-badge" style={{ background: s.bg, borderColor: s.border }}>
                  <div className="td-category-dot" style={{ background: s.dotColor }} />
                  <span style={{ color: s.textColor }}>{s.label}</span>
                </div>
                <CaretRightIcon />
              </div>
            </div>

            {/* Grupo */}
            <div className="td-row-card" style={{ cursor: 'pointer' }} onClick={openGroupPicker}>
              <div className="td-row-left">
                <UsersIcon />
                <span className="td-row-label">Grupo</span>
              </div>
              <div className="td-row-right">
                {selectedMembers.length > 0 ? (
                  <div className="td-avatar-stack">
                    {selectedMembers.slice(0, 3).map(id => {
                      const p = GROUP_PEOPLE.find(x => x.id === id)
                      return p ? (
                        <AvatarBubble key={id}>
                          <img src={p.img} alt={p.name} style={{ width: 26, height: 26, borderRadius: '50%' }} />
                        </AvatarBubble>
                      ) : null
                    })}
                    {selectedMembers.length > 3 && (
                      <AvatarBubble><span className="td-avatar-count">+{selectedMembers.length - 3}</span></AvatarBubble>
                    )}
                  </div>
                ) : (
                  <span className="td-row-value td-row-value--muted">Nenhum</span>
                )}
                <CaretRightIcon />
              </div>
            </div>

            {/* Descrição */}
            <div className="td-row-card td-row-card--desc">
              <div className="td-row-left">
                <FileTextIcon />
                <div className="td-desc-inner">
                  <span className="td-row-label">Descrição</span>
                  <textarea
                    className="td-description"
                    placeholder="Adicione uma descrição..."
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="td-row-right td-row-right--top">
                <CaretRightIcon />
              </div>
            </div>

            {/* Adicionar ao calendário */}
            <div className="td-row-card">
              <div className="td-row-left">
                <GoogleCalendarIcon />
                <span className="td-row-label">Adicionar ao calendário</span>
              </div>
              <div className="td-row-right">
                <button
                  type="button"
                  className={`td-switch${calendarSync ? ' td-switch--on' : ''}`}
                  onClick={() => setCalendarSync(v => !v)}
                  aria-label="Adicionar ao calendário"
                >
                  <div className="td-switch-thumb" />
                </button>
                <CaretRightIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="td-footer">
          <button className="td-save-btn" type="button" onClick={handleSave}>
            Salvar tarefa
          </button>
          <button className="td-voice-btn" type="button">
            <MicIcon />
            <span>Editar por voz</span>
          </button>
        </div>
      </div>

      {/* Category Picker Sheet */}
      {showCategoryPicker && (
        <div className="td-reminder-overlay" onClick={() => setShowCategoryPicker(false)}>
          <div className="td-reminder-sheet" onClick={e => e.stopPropagation()}>
            <div className="td-group-handle-row">
              <div className="td-group-handle-pill" />
            </div>
            <div className="td-reminder-body">
              <h2 className="td-group-heading">Categoria</h2>
              {Object.entries(CATEGORY_STYLES).map(([key, cs]) => (
                <button
                  key={key}
                  type="button"
                  className={`td-reminder-option${category === key ? ' td-reminder-option--selected' : ''}`}
                  onClick={() => { setCategory(key); setShowCategoryPicker(false) }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div className="td-category-badge" style={{ background: cs.bg, borderColor: cs.border }}>
                      <div className="td-category-dot" style={{ background: cs.dotColor }} />
                      <span style={{ color: cs.textColor }}>{cs.label}</span>
                    </div>
                  </div>
                  {category === key && (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3.5 9L7.5 13L14.5 5.5" stroke="#7237ae" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Reminder Picker Sheet */}
      {showReminderPicker && (
        <div className="td-reminder-overlay" onClick={() => setShowReminderPicker(false)}>
          <div className="td-reminder-sheet" onClick={e => e.stopPropagation()}>
            <div className="td-group-handle-row">
              <div className="td-group-handle-pill" />
            </div>
            <div className="td-reminder-body">
              <h2 className="td-group-heading">Lembrete</h2>
              {['Nenhum', '5 min antes', '15 min antes', '30 min antes', '1 hora antes', '2 horas antes', '1 dia antes'].map(opt => (
                <button
                  key={opt}
                  type="button"
                  className={`td-reminder-option${reminder === opt ? ' td-reminder-option--selected' : ''}`}
                  onClick={() => { setReminder(opt); setShowReminderPicker(false) }}
                >
                  <span>{opt}</span>
                  {reminder === opt && (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3.5 9L7.5 13L14.5 5.5" stroke="#7237ae" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Date Picker Sheet */}
      {showDatePicker && (
        <DatePickerSheet
          value={date}
          onConfirm={iso => { setDate(iso); setShowDatePicker(false) }}
          onClose={() => setShowDatePicker(false)}
        />
      )}

      {/* Group Picker Sheet */}
      {showGroupPicker && (
        <div className="td-group-overlay" onClick={() => setShowGroupPicker(false)}>
          <div className="td-group-sheet" onClick={e => e.stopPropagation()}>
            <div className="td-group-handle-row">
              <div className="td-group-handle-pill" />
            </div>
            <div className="td-group-body">
              <h2 className="td-group-heading">Adicionar ao grupo</h2>
              <div className="td-group-grid">
                {GROUP_PEOPLE.map(person => {
                  const selected = draftMembers.includes(person.id)
                  return (
                    <button
                      key={person.id}
                      type="button"
                      className={`td-group-person${selected ? ' td-group-person--selected' : ''}`}
                      onClick={() => toggleDraft(person.id)}
                    >
                      <div className="td-group-avatar-wrap">
                        <img src={person.img} alt={person.name} className="td-group-avatar-img" />
                        {selected && (
                          <div className="td-group-check">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5L4.2 7.5L8.5 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        )}
                      </div>
                      <span className="td-group-name">{person.name}</span>
                    </button>
                  )
                })}
              </div>
              <button
                type="button"
                className="td-group-confirm-btn"
                onClick={confirmGroupPicker}
              >
                Confirmar
              </button>
              <button type="button" className="td-group-cancel-btn" onClick={() => setShowGroupPicker(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
