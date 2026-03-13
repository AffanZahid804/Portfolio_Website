import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SiWhatsapp } from 'react-icons/si'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import Contact from './components/Contact'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App" style={{ minHeight: '100vh', position: 'relative' }}>
      <Header scrollY={scrollY} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Reviews />
      <Contact />

      {/* Floating WhatsApp button */}
      <motion.a
        href="https://wa.me/923314906039"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          borderRadius: '50%',
          background: '#25d366',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.5)',
          zIndex: 9999,
          textDecoration: 'none',
        }}
        aria-label="Chat on WhatsApp"
      >
        <SiWhatsapp />
      </motion.a>
    </div>
  )
}

export default App

