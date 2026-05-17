import { useEffect } from 'react'
import logo from '../assets/logo.webp'
import './SplashScreen.css'

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 3000)
    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div className="splash">
      <div className="splash-top">
        <header className="splash-header">
          <p className="splash-disclaimer">Estudo sem vínculo oficial com a marca</p>
        </header>

        <div className="splash-logo-container">
          <img src={logo} alt="Notion Pulse logo" className="splash-logo" />
          <p className="splash-tagline">Checklist por comando de voz</p>
        </div>
      </div>

      <footer className="splash-footer">
        <div className="splash-credits">
          <p className="splash-credits-line">Feito com amor por ensinar por</p>
          <p className="splash-credits-brand">Design Boost</p>
        </div>

      </footer>
    </div>
  )
}
