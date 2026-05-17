import { useState, useEffect } from 'react'
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
    const saved = sessionStorage.getItem('notion-pulse-tasks')
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

  useEffect(() => {
    try {
      sessionStorage.setItem('notion-pulse-tasks', JSON.stringify(tasks))
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
        onClose={() => setScreen(tasks.length > 0 ? 'tasks' : 'home')}
        onConfirm={handleConfirm}
      />
    )
    if (screen === 'tasks') return (
      <Tasks
        tasks={tasks}
        onFalar={() => setScreen('newTask')}
        onClear={handleClear}
        onTaskClick={handleTaskClick}
        onPomodoro={() => setScreen('pomodoro')}
      />
    )
    if (screen === 'sharedTasks') return (
      <SharedTasks onClose={() => setScreen('home')} />
    )
    if (screen === 'home') return (
      <Home
        onFalar={() => setScreen('newTask')}
        onPomodoro={() => setScreen('pomodoro')}
        onCalendar={() => setShowCalendar(true)}
        onSharedTasks={() => setScreen('sharedTasks')}
      />
    )
    if (screen === 'onboarding') return (
      <Onboarding onFinish={() => setScreen(tasks.length > 0 ? 'tasks' : 'home')} />
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
