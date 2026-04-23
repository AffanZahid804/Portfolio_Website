import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSliders } from 'react-icons/fi'
import { useTheme, themes } from '../context/ThemeContext'

const ThemeSwitcher = () => {
  const { currentTheme, setCurrentTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      left: '24px',
      bottom: '24px',
      zIndex: 9998,
    }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            style={{
              position: 'absolute',
              bottom: '70px',
              left: 0,
              background: 'rgba(10, 10, 20, 0.97)',
              backdropFilter: isMobile ? 'none' : 'blur(16px)',
              WebkitBackdropFilter: isMobile ? 'none' : 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              minWidth: '195px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.7)',
            }}
          >
            <p style={{
              color: '#94a3b8',
              fontSize: '0.72rem',
              marginBottom: '10px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              Appearance
            </p>
            {Object.entries(themes).map(([key, t]) => (
              <motion.button
                key={key}
                onClick={() => { setCurrentTheme(key); setIsOpen(false) }}
                whileHover={isMobile ? {} : { x: 6, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: currentTheme === key ? 'rgba(255,255,255,0.07)' : 'transparent',
                  border: currentTheme === key ? '1px solid rgba(255,255,255,0.12)' : '1px solid transparent',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  color: currentTheme === key ? '#f8fafc' : '#94a3b8',
                  cursor: 'pointer',
                  width: '100%',
                  fontSize: '0.9rem',
                  fontWeight: currentTheme === key ? 600 : 400,
                  fontFamily: 'inherit',
                  textAlign: 'left',
                  transition: 'color 0.2s ease',
                }}
              >
                <div style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: t.gradient1,
                  flexShrink: 0,
                  boxShadow: currentTheme === key ? `0 0 14px rgba(${t.glowRgb}, 0.8)` : 'none',
                  transition: 'box-shadow 0.3s ease',
                }} />
                <span>{t.name}</span>
                {currentTheme === key && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{ marginLeft: 'auto', fontSize: '0.9rem', color: t.primary }}
                  >
                    ✓
                  </motion.span>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={isMobile ? {} : { scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'var(--gradient-1)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.4rem',
          boxShadow: '0 8px 30px rgba(var(--glow-rgb), 0.5)',
          color: 'white',
          position: 'relative',
          zIndex: 1,
        }}
        aria-label="Switch appearance theme"
      >
        <FiSliders size={22} />
      </motion.button>
    </div>
  )
}

export default ThemeSwitcher
