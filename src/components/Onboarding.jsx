import { useState, useEffect } from 'react'
import { signInWithRedirect } from 'firebase/auth'
import { auth, googleProvider } from '../firebase'
import illustration1 from '../assets/illustration-0.svg'
import illustration2 from '../assets/illustration-1.svg'
import illustration3 from '../assets/illustration-2.svg'
import micIcon from '../assets/mic-icon.svg'
import graphicIcon from '../assets/graphic.svg'
import teamIcon from '../assets/team-icon.svg'
import googleLogo from '../assets/google-logo.webp'
import './Onboarding.css'

const SLIDES = [
  {
    bg: '#f7fbff',
    illustration: illustration1,
    label: 'Pulse • Voice',
    labelColor: '#00396b',
    notionFill: '#00396b',
    inlineIcon: micIcon,
    title: ['Crie tarefas por comando de', 'voz'],
    subtitle: 'Fale naturalmente e transforme suas ideias em tarefas.',
    titleColor: '#002a4f',
    subtitleColor: '#002a4f',
    progressColor: '#00396b',
    shadowColor: 'rgba(0, 57, 107, 0.1)',
    legalColor: '#00396b',
  },
  {
    bg: '#f7fcf8',
    illustration: illustration2,
    label: 'Pulse • Calendar',
    labelColor: '#0a4216',
    notionFill: '#0a4216',
    inlineIcon: graphicIcon,
    title: ['Sua agenda sempre', 'em ordem'],
    subtitle: 'Sincronize seus compromissos e veja tudo em um só lugar.',
    titleColor: '#05210b',
    subtitleColor: '#0a4216',
    progressColor: '#0f6220',
    shadowColor: 'rgba(10, 66, 22, 0.1)',
    legalColor: '#05210b',
  },
  {
    bg: '#fcfaff',
    illustration: illustration3,
    label: 'Pulse • Team',
    labelColor: '#391c57',
    notionFill: '#391c57',
    inlineIcon: teamIcon,
    title: ['Crie uma agenda com seu', 'grupo'],
    subtitle: 'Planeje estudos e compromissos em uma agenda compartilhada.',
    titleColor: '#1c0e2c',
    subtitleColor: '#391c57',
    progressColor: '#7237ae',
    shadowColor: 'rgba(57, 28, 87, 0.1)',
    legalColor: '#391c57',
  },
]

function NotionIcon({ fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none" style={{ flexShrink: 0 }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2.58657 2.80156C3.07479 3.20553 3.25138 3.17363 4.16551 3.10985L12.777 2.57831C12.964 2.57831 12.8082 2.38695 12.7458 2.36569L11.3123 1.31324C11.0422 1.10063 10.6683 0.845487 9.9723 0.909272L1.64127 1.53649C1.34003 1.56838 1.2777 1.72784 1.40235 1.84478L2.58657 2.80156ZM3.10596 4.8533V14.1234C3.10596 14.623 3.34488 14.8037 3.89543 14.7718L13.3587 14.2084C13.9093 14.1765 13.9716 13.8363 13.9716 13.4324V4.22608C13.9716 3.82211 13.8158 3.59886 13.4834 3.63076L3.59418 4.22608C3.23061 4.25797 3.10596 4.44933 3.10596 4.8533ZM12.4446 5.35295C12.5069 5.62935 12.4446 5.91638 12.1745 5.94827L11.7175 6.04395V12.8902C11.3227 13.1028 10.9591 13.2304 10.6475 13.2304C10.1593 13.2304 10.0346 13.0709 9.67105 12.6032L6.68975 7.80866V12.4437L7.63504 12.6563C7.63504 12.6563 7.63504 13.2197 6.87673 13.2197L4.77839 13.3473C4.71607 13.2197 4.77839 12.9114 4.98615 12.8477L5.5367 12.6882V6.56486L4.77839 6.50107C4.71607 6.22467 4.87188 5.8207 5.29778 5.78881L7.55194 5.62935L10.6579 10.477V6.19278L9.86842 6.0971C9.8061 5.75692 10.0554 5.50178 10.3566 5.46989L12.4446 5.35295ZM0.945291 0.686025L9.61911 0.0375458C10.6787 -0.0581314 10.9591 0.00565358 11.624 0.505301L14.3871 2.49326C14.8442 2.83345 15 2.92912 15 3.3012V14.219C15 14.8994 14.7611 15.3034 13.9093 15.3672L3.84349 15.9944C3.19945 16.0263 2.8982 15.9306 2.56579 15.4947L0.519391 12.7839C0.155817 12.2842 0 11.9122 0 11.4763V1.77037C0 1.20693 0.249307 0.749809 0.945291 0.686025Z" fill={fill} />
    </svg>
  )
}

function LegalDot({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none" style={{ flexShrink: 0 }}>
      <circle opacity="0.3" cx="2" cy="2" r="2" fill={color} />
    </svg>
  )
}

const BAR_DURATION = 3000

export default function Onboarding({ onFinish, initialError = '' }) {
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(initialError)
  const slide = SLIDES[index]

  async function handleGoogleLogin(e) {
    e.stopPropagation()
    setLoading(true)
    setError('')
    try {
      await signInWithRedirect(auth, googleProvider)
    } catch (err) {
      setError('Erro ao iniciar login. Tente novamente.')
      setLoading(false)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(i => (i + 1) % SLIDES.length)
    }, BAR_DURATION)
    return () => clearTimeout(timer)
  }, [index])

  function next() {
    setIndex(i => (i + 1) % SLIDES.length)
  }

  return (
    <div
      className="onboarding"
      style={{ backgroundColor: slide.bg }}
      onClick={next}
    >
      <div className="onboarding-top">
        <div className="onboarding-illustration" style={{ backgroundColor: slide.bg }}>
          <img src={slide.illustration} alt="" className="onboarding-illustration-img" />
        </div>

        <div className="onboarding-container">
          <div className="onboarding-content">
            <div className="onboarding-header">
              <NotionIcon fill={slide.notionFill} />
              <span className="onboarding-label" style={{ color: slide.labelColor }}>
                {slide.label}
              </span>
            </div>

            <div className="onboarding-description">
              <h2 className="onboarding-title" style={{ color: slide.titleColor }}>
                {slide.title[0]}{' '}
                <img src={slide.inlineIcon} alt="" className="onboarding-mic-inline" />
                {' '}{slide.title[1]}
              </h2>
              <p className="onboarding-subtitle" style={{ color: slide.subtitleColor }}>
                {slide.subtitle}
              </p>
            </div>
          </div>

          <div className="onboarding-progress">
            {SLIDES.map((_, i) => (
              <div
                key={i}
                className="progress-track"
                style={{ background: `${slide.progressColor}33` }}
              >
                {i < index && (
                  <div className="progress-fill progress-fill--done" style={{ background: slide.progressColor }} />
                )}
                {i === index && (
                  <div
                    key={index}
                    className="progress-fill progress-fill--active"
                    style={{ background: slide.progressColor, animationDuration: `${BAR_DURATION}ms` }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="onboarding-footer" onClick={e => e.stopPropagation()}>
        <button
          className="onboarding-google-btn"
          type="button"
          style={{ boxShadow: `0px 8px 12px 0px ${slide.shadowColor}, 0px 2px 2px 0px ${slide.shadowColor}`, opacity: loading ? 0.7 : 1 }}
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          <img src={googleLogo} alt="Google" className="onboarding-google-logo" />
          <span>{loading ? 'Entrando...' : 'Login com o Google'}</span>
        </button>
        {error && <p style={{ color: 'red', fontSize: 12, textAlign: 'center', marginTop: 8 }}>{error}</p>}

        <div className="onboarding-legal">
          <a href="#" className="onboarding-legal-link" style={{ color: slide.legalColor }}>Temos de uso</a>
          <LegalDot color={slide.legalColor} />
          <a href="#" className="onboarding-legal-link" style={{ color: slide.legalColor }}>Política de privacidade</a>
          <LegalDot color={slide.legalColor} />
          <span className="onboarding-legal-link" style={{ color: slide.legalColor }}>© Boost</span>
        </div>
      </footer>
    </div>
  )
}
