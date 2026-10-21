import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { siteConfig } from '../data/site'

export function IntroLoader() {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)
  const [phase, setPhase] = useState('initialising curiosity')

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const seen = sessionStorage.getItem('acm-w-intro-seen')
    if (reduced || seen) return

    setVisible(true)
    const phaseTimers = [
      window.setTimeout(() => setPhase('mapping the chapter'), 1100),
      window.setTimeout(() => setPhase('warming up ideas'), 1950),
      window.setTimeout(() => setPhase('almost there'), 2850),
    ]
    const closeTimer = window.setTimeout(() => setClosing(true), 4200)
    const timer = window.setTimeout(() => {
      sessionStorage.setItem('acm-w-intro-seen', '1')
      setVisible(false)
    }, 4800)

    return () => {
      window.clearTimeout(closeTimer)
      window.clearTimeout(timer)
      phaseTimers.forEach(window.clearTimeout)
    }
  }, [])

  if (!visible) return null

  return (
    <motion.div
      className="intro-loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: closing ? 0 : 1 }}
      exit={{ opacity: 0 }}
      role="presentation"
    >
      <div className="intro-loader-grid" />
      <div className="intro-loader-meta">
        <span>ACM-W / IISU</span>
        <span>01 — 01</span>
      </div>
      <div className="intro-loader-center">
        <motion.div
          className="intro-loader-mark"
          initial={{ opacity: 0, scale: 0.72, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={siteConfig.logo} alt="" />
        </motion.div>
        <motion.p
          className="intro-loader-title"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.5 }}
        >
          Association for Computing Machinery
        </motion.p>
        <motion.p
          className="intro-loader-college"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.45 }}
        >
          {siteConfig.collegeName}
        </motion.p>
        <motion.p
          className="intro-loader-phase"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.35 }}
        >
          {phase}
        </motion.p>
      </div>
      <motion.div
        className="intro-loader-line"
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.45, duration: 1.7, ease: 'easeInOut' }}
      />
      <motion.div
        className="intro-loader-progress"
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.15, duration: 4.1, ease: 'linear' }}
      />
      <span className="intro-loader-index">001 / 001</span>
    </motion.div>
  )
}
