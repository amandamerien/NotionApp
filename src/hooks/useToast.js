import { useState, useCallback } from 'react'

let nextId = 0

export function useToast() {
  const [toasts, setToasts] = useState([])

  const show = useCallback(({ type = 'success', title, message }) => {
    const id = ++nextId
    setToasts(prev => [...prev, { id, type, title, message }])
  }, [])

  const dismiss = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  const success = useCallback((title, message) => show({ type: 'success', title, message }), [show])
  const error   = useCallback((title, message) => show({ type: 'error',   title, message }), [show])
  const info    = useCallback((title, message) => show({ type: 'info',    title, message }), [show])

  return { toasts, dismiss, success, error, info }
}
