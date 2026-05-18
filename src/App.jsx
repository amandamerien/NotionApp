import { useState, useEffect } from 'react'
import { onAuthStateChanged, signOut, getRedirectResult } from 'firebase/auth'
import { auth } from './firebase'
import SplashScreen from './components/SplashScreen'
import Onboarding from './components/Onboarding'
import Home from './components/Home'
import NewTask from './components/NewTask'
import Tasks from './components/Tasks'
import TaskDetail from './components/TaskDetail'
import Pomodoro from './components/Pomodoro'
import CalendarSheet from './components/CalendarSheet'
import SharedTasks from './components/SharedTasks'
import './App.css'

function loadTasks() {
  try {
    const saved = localStorage.getItem('notion-pulse-tasks')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function App() {
  const [screen, setScreen] = useState('splash')
  const [tasks, setTasks] = useState(loadTasks)
  const [selectedTask, setSelectedTask] = useState(null)
  const [showCalendar, setShowCalendar] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [user, setUser] = useState(null)
  const [authReady, setAuthReady] = useState(false)
  const [authError, setAuthError] = useState('')

  useEffect(() => {
    getRedirectResult(auth).then(result => {
      if (result?.user) {
        setUser(result.user)
        setScreen(prev => prev === 'onboarding' || prev === 'splash' ? 'home' : prev)
      }
    }).catch(err => {
      if (err?.code !== 'auth/no-auth-event') {
        setAuthError(err?.message || 'Erro ao fazer login. Tente novamente.')
      }
    })

    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u)
      setAuthReady(true)
      if (u) setScreen(prev =>
        ['onboarding', 'splash'].includes(prev) ? (tasks.length > 0 ? 'tasks' : 'home') : prev
      )
    })
    return unsub
  }, [])

  function handleTyped(text) {
    setTypedText(text)
    setScreen('newTask')
  }

  async function handleSignOut() {
    await signOut(auth)
    setScreen('onboarding')
  }

  useEffect(() => {
    try {
      localStorage.setItem('notion-pulse-tasks', JSON.stringify(tasks))
    } catch {}
  }, [tasks])

  function handleConfirm(newTasks) {
    setTasks(prev => [...prev, ...newTasks])
    setScreen('tasks')
  }

  function handleClear() {
    setTasks([])
    setScreen('home')
  }

  function handleTaskClick(task) {
    setSelectedTask(task)
    setScreen('taskDetail')
  }

  function handleDeleteTask(task) {
    setTasks(prev => prev.filter(t => t !== task))
  }

  function handleSaveTask(updated) {
    setTasks(prev => prev.map(t => t === selectedTask ? updated : t))
  }

  function renderScreen() {
    if (!authReady) return null
    if (screen === 'pomodoro') return (
      <Pomodoro onClose={() => setScreen(tasks.length > 0 ? 'tasks' : 'home')} />
    )
    if (screen === 'taskDetail') return (
      <TaskDetail
        task={selectedTask}
        onClose={() => setScreen('tasks')}
        onDelete={handleDeleteTask}
        onSave={handleSaveTask}
      />
    )
    if (screen === 'newTask') return (
      <NewTask
        onClose={() => { setTypedText(''); setScreen(tasks.length > 0 ? 'tasks' : 'home') }}
        onConfirm={(t) => { setTypedText(''); handleConfirm(t) }}
        initialText={typedText || undefined}
      />
    )
    if (screen === 'tasks') return (
      <Tasks
        tasks={tasks}
        user={user}
        onFalar={() => setScreen('newTask')}
        onClear={handleClear}
        onTaskClick={handleTaskClick}
        onPomodoro={() => setScreen('pomodoro')}
        onSharedTasks={() => setScreen('sharedTasks')}
        onHome={() => setScreen('home')}
        onTyped={handleTyped}
        onSignOut={handleSignOut}
      />
    )
    if (screen === 'sharedTasks') return (
      <SharedTasks onClose={() => setScreen('home')} />
    )
    if (screen === 'home') return (
      <Home
        user={user}
        onFalar={() => setScreen('newTask')}
        onPomodoro={() => setScreen('pomodoro')}
        onCalendar={() => setShowCalendar(true)}
        onSharedTasks={() => setScreen('sharedTasks')}
        onTasks={() => setScreen('tasks')}
        onTyped={handleTyped}
        onSignOut={handleSignOut}
      />
    )
    if (screen === 'onboarding') return (
      <Onboarding initialError={authError} onFinish={(u) => { if (u) setUser(u); setScreen(tasks.length > 0 ? 'tasks' : 'home') }} />
    )
    if (!user) return (
      <Onboarding initialError={authError} onFinish={(u) => { if (u) setUser(u); setScreen(tasks.length > 0 ? 'tasks' : 'home') }} />
    )
    return <SplashScreen onFinish={() => setScreen('onboarding')} />
  }

  return (
    <>
      {renderScreen()}
      {showCalendar && <CalendarSheet onClose={() => setShowCalendar(false)} />}
    </>
  )
}

export default App
