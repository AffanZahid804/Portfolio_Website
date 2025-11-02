import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const Header = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

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
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const el = document.getElementById(item.id)
        return el
      }).filter(Boolean)
      
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const { offsetTop, offsetHeight } = section
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrollY > 100 ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(20px)',
        transition: 'all 0.3s ease',
        boxShadow: scrollY > 100 ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none',
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <motion.div
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('home')}
          className="gradient-text"
        >
          Portfolio
        </motion.div>

        <nav style={{
          display: 'flex',
          gap: '40px',
        }}
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
                color: activeSection === item.id ? 'var(--primary)' : 'var(--light)',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.95rem',
                position: 'relative',
                transition: 'all 0.3s ease',
                padding: '5px 0',
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  e.target.style.color = 'var(--primary)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.target.style.color = 'var(--light)'
                }
              }}
            >
              {item.name}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'var(--gradient-1)',
                    borderRadius: '2px',
                  }}
                />
              )}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--light)',
            cursor: 'pointer',
            fontSize: '1.5rem',
            padding: '5px',
            zIndex: 1001,
          }}
          className="menu-toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </motion.header>
  )
}

export default Header

