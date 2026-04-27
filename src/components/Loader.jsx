import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    let startTime = null
    const totalDuration = 2600

    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const p = Math.min(Math.round((elapsed / totalDuration) * 100), 100)
      setProgress(p)

      if (p < 100) {
        requestAnimationFrame(tick)
      } else {
        // Brief pause at 100%, then wipe away
        setTimeout(() => {
          setExiting(true)
          setTimeout(onComplete, 850)
        }, 400)
      }
    }

    requestAnimationFrame(tick)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#080808',
            zIndex: 999999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'clamp(24px, 4vw, 48px)',
            overflow: 'hidden',
            fontFamily: "'Outfit', 'Inter', sans-serif",
          }}
        >
          {/* Noise texture on loader */}
          <div className="noise-overlay" style={{ opacity: 0.05 }} />

          {/* Top bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <span
              style={{
                color: 'rgba(148,163,184,0.6)',
                fontSize: '0.72rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
              }}
            >
              Portfolio — 2026
            </span>
            <span
              style={{
                color: 'rgba(148,163,184,0.6)',
                fontSize: '0.72rem',
                letterSpacing: '0.15em',
              }}
            >
              Affan Zahid
            </span>
          </motion.div>

          {/* Center: giant counter */}
          <div
            style={{
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
              userSelect: 'none',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              style={{
                fontSize: 'clamp(7rem, 22vw, 20rem)',
                fontWeight: 900,
                lineHeight: 0.85,
                color: '#f1f5f9',
                letterSpacing: '-6px',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {String(progress).padStart(2, '0')}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#94a3b8',
                marginTop: '24px',
              }}
            >
              {progress < 100 ? 'Loading experience' : 'Welcome'}
            </motion.p>
          </div>

          {/* Bottom: thin progress bar + label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <span
                style={{
                  color: 'rgba(148,163,184,0.45)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                }}
              >
                {progress < 100 ? 'Loading' : 'Ready'}
              </span>
              <span
                style={{
                  color: 'rgba(148,163,184,0.45)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                }}
              >
                {progress}%
              </span>
            </div>

            {/* Track */}
            <div
              style={{
                height: '1px',
                background: 'rgba(255,255,255,0.07)',
                borderRadius: '1px',
                overflow: 'hidden',
              }}
            >
              <motion.div
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.12, ease: 'linear' }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa)',
                  transformOrigin: '0%',
                  boxShadow: '0 0 8px rgba(59,130,246,0.7)',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
