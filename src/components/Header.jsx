import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const Header = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobile, setIsMobile] = useState(false)

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 200
          for (const item of navItems) {
            const el = document.getElementById(item.id)
            if (el) {
              const { offsetTop, offsetHeight } = el
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(item.id)
                break
              }
            }
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const scrolled = scrollY > 80

  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled
          ? 'rgba(8, 8, 8, 0.97)'
          : 'rgba(8, 8, 8, 0.6)',
        backdropFilter: isMobile ? 'none' : 'blur(16px)',
        WebkitBackdropFilter: isMobile ? 'none' : 'blur(16px)',
        transition: 'all 0.4s ease',
        borderBottom: scrolled
          ? '1px solid rgba(var(--glow-rgb), 0.15)'
          : '1px solid transparent',
        boxShadow: scrolled
          ? '0 4px 30px rgba(0, 0, 0, 0.4)'
          : 'none',
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '18px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo */}
        <motion.div
          className="gradient-text"
          style={{
            fontSize: '1.6rem',
            fontWeight: 800,
            cursor: 'pointer',
            letterSpacing: '-0.5px',
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => scrollToSection('home')}
        >
          {'<AZ />'}
        </motion.div>

        {/* Desktop Nav */}
        <nav
          style={{ display: 'flex', gap: '36px' }}
          className={isOpen ? 'nav-open' : ''}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.id)
              }}
              style={{
                color: activeSection === item.id ? 'var(--primary)' : 'var(--gray)',
                textDecoration: 'none',
                fontWeight: activeSection === item.id ? 600 : 500,
                fontSize: '0.95rem',
                position: 'relative',
                transition: 'all 0.3s ease',
                padding: '5px 0',
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  e.target.style.color = 'var(--light)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.target.style.color = 'var(--gray)'
                }
              }}
            >
              {item.name}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'var(--gradient-1)',
                    borderRadius: '2px',
                    boxShadow: '0 0 8px rgba(var(--glow-rgb), 0.8)',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'rgba(var(--glow-rgb), 0.1)',
            border: '1px solid rgba(var(--glow-rgb), 0.25)',
            borderRadius: '10px',
            color: 'var(--light)',
            cursor: 'pointer',
            fontSize: '1.5rem',
            padding: '8px',
            zIndex: 1001,
          }}
          className="menu-toggle"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex' }}
              >
                <FiX size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex' }}
              >
                <FiMenu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.header>
  )
}

export default Header
