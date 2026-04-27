import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { SiWhatsapp } from 'react-icons/si'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import ThemeSwitcher from './components/ThemeSwitcher'
import Loader from './components/Loader'
import { ThemeProvider } from './context/ThemeContext'

const CustomCursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })
  const ringPosRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    
    const checkMobile = () => {
      const mobile = window.matchMedia('(hover: none)').matches || 
                     window.matchMedia('(pointer: coarse)').matches ||
                     window.innerWidth < 1024
      setIsMobile(mobile)
      return mobile
    }

    if (checkMobile()) return // Don't initialize cursor on mobile

    const handleMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
    }

    const animateRing = () => {
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.12
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPosRef.current.x}px`
        ringRef.current.style.top = `${ringPosRef.current.y}px`
      }
      rafRef.current = requestAnimationFrame(animateRing)
    }

    const handleMouseOver = (e) => {
      const el = e.target
      const style = window.getComputedStyle(el)
      setHovering(style.cursor === 'pointer')
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    rafRef.current = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (isMobile) return null // Don't render on mobile

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot${hovering ? ' hovering' : ''}`}
      />
      <div
        ref={ringRef}
        className={`cursor-ring${hovering ? ' hovering' : ''}`}
      />
    </>
  )
}

function AppContent() {
  const [scrollY, setScrollY] = useState(0)
  const [loaderDone, setLoaderDone] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Intro loader — renders over everything, wipes up when done */}
      <AnimatePresence>
        {!loaderDone && (
          <Loader key="loader" onComplete={() => setLoaderDone(true)} />
        )}
      </AnimatePresence>

    <div className="App" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX }}
      />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Film grain noise overlay */}
      <div className="noise-overlay" />

      {/* Aurora background blobs */}
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />

      {/* Grid dot pattern */}
      <div className="grid-pattern" />

      <Header scrollY={scrollY} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Reviews />
      <Contact />

      {/* Theme Switcher */}
      <ThemeSwitcher />

      {/* Floating WhatsApp button */}
      <motion.a
        href="https://wa.me/923314906039"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        style={{
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25d366, #128c7e)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 28px rgba(37, 211, 102, 0.55)',
          zIndex: 9999,
          textDecoration: 'none',
        }}
        aria-label="Chat on WhatsApp"
      >
        <SiWhatsapp />
      </motion.a>
    </div>
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
