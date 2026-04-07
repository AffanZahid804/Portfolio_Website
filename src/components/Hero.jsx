import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowRight, FiBriefcase, FiArrowDown } from 'react-icons/fi'
import {
  SiReact, SiNodedotjs, SiJavascript,
  SiMongodb, SiTypescript, SiAmazonwebservices
} from 'react-icons/si'
import profileImage from '../assets/images/profile.jpeg'

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'React Specialist',
  'Mobile App Developer',
  'Node.js Expert',
]

const techIcons = [
  { icon: <SiReact />, x: '6%', y: '18%', delay: 0, duration: 16 },
  { icon: <SiNodedotjs />, x: '86%', y: '22%', delay: 2.5, duration: 20 },
  { icon: <SiJavascript />, x: '10%', y: '72%', delay: 4, duration: 14 },
  { icon: <SiMongodb />, x: '82%', y: '68%', delay: 1.5, duration: 22 },
  { icon: <SiTypescript />, x: '50%', y: '6%', delay: 3, duration: 18 },
  { icon: <SiAmazonwebservices />, x: '50%', y: '88%', delay: 2, duration: 24 },
]

const useTypingEffect = (texts, typingSpeed = 90, deletingSpeed = 45, pauseTime = 2200) => {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]
    let timer

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timer = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1))
        }, typingSpeed)
      } else {
        timer = setTimeout(() => setIsDeleting(true), pauseTime)
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, deletingSpeed)
      } else {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  return displayText
}

const Hero = () => {
  const [imageError, setImageError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const typedRole = useTypingEffect(roles)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const socialLinks = [
    {
      href: 'https://github.com/AffanZahid804',
      label: 'GitHub',
      icon: <FiGithub />,
      color: '#94a3b8',
      hoverBg: 'var(--gradient-1)',
    },
    {
      href: 'https://www.linkedin.com/in/affan-zahid',
      label: 'LinkedIn',
      icon: <FiLinkedin />,
      color: '#0ea5e9',
      hoverBg: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
    },
    {
      href: 'https://www.upwork.com/freelancers/~01dabd00704ad7f10b?mp_source=share',
      label: 'Upwork',
      icon: <FiBriefcase />,
      color: '#14a800',
      hoverBg: 'linear-gradient(135deg, #14a800, #0d7a00)',
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
    }
  }

  return (
    <section
      id="home"
      className="section"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '120px',
        minHeight: '100vh',
      }}
    >
      {/* Floating tech icons background */}
      {!isMobile && techIcons.map((t, i) => (
        <div
          key={i}
          className="tech-float-icon"
          style={{
            left: t.x,
            top: t.y,
            '--duration': `${t.duration}s`,
            '--delay': `${t.delay}s`,
            fontSize: '2.5rem',
          }}
        >
          {t.icon}
        </div>
      ))}

      {/* Section glow blobs */}
      <div
        className="glow"
        style={{ top: '-200px', left: '-200px' }}
      />
      <div
        className="glow"
        style={{
          bottom: '-200px',
          right: '-200px',
          background: 'radial-gradient(circle, rgba(var(--glow-rgb), 0.2) 0%, transparent 70%)',
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
          maxWidth: '1400px',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
        className="hero-container"
      >
        {/* Left Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Welcome badge */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              background: 'rgba(var(--glow-rgb), 0.1)',
              border: '1px solid rgba(var(--glow-rgb), 0.3)',
              borderRadius: '50px',
              fontSize: '0.9rem',
              marginBottom: '30px',
              color: 'var(--primary)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 20px rgba(var(--glow-rgb), 0.15)',
            }}
          >
            <span style={{ animation: 'float-slow 2.5s ease-in-out infinite', display: 'inline-block' }}>👋</span>
            Welcome to My Portfolio
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '20px',
              letterSpacing: '-2px',
            }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Affan Zahid</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              fontWeight: 700,
              marginBottom: '30px',
              color: 'var(--light)',
              height: '2.5rem',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span className="gradient-text">{typedRole}</span>
            <span className="typing-cursor" />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '1.15rem',
              color: 'var(--gray)',
              lineHeight: 1.85,
              marginBottom: '40px',
              maxWidth: '580px',
            }}
          >
            Full Stack & Mobile Developer with 5+ years building scalable web and mobile
            applications. Expert in React, Node.js, React Native, and cloud services.
            Available for projects on{' '}
            <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Upwork</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-buttons"
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '50px',
            }}
          >
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work <FiArrowRight />
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiMail /> Get In Touch
            </motion.a>
            <motion.a
              href={`${import.meta.env.BASE_URL}AffanResume-Dev.pdf`}
              className="btn btn-outline"
              download
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiDownload /> Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="hero-social-links"
            variants={itemVariants}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'inherit',
            }}
          >
            <span style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>Follow me</span>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            {socialLinks.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -6, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(var(--glow-rgb), 0.08)',
                  borderRadius: '50%',
                  color: s.color,
                  fontSize: '1.3rem',
                  border: '1px solid rgba(var(--glow-rgb), 0.2)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = s.hoverBg
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.boxShadow = `0 8px 24px rgba(var(--glow-rgb), 0.5)`
                  e.currentTarget.style.borderColor = 'transparent'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(var(--glow-rgb), 0.08)'
                  e.currentTarget.style.color = s.color
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'rgba(var(--glow-rgb), 0.2)'
                }}
              >
                {s.icon}
              </motion.a>
            ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column — Profile Photo */}
        <motion.div
          className="hero-image-column"
          initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.4, 0, 0.2, 1] }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Outer orbit rings - only on desktop */}
          {!isMobile && (
            <>
              <div
                style={{
                  position: 'absolute',
                  width: '560px',
                  height: '560px',
                  borderRadius: '50%',
                  border: '1px dashed rgba(var(--glow-rgb), 0.2)',
                  animation: 'spin-ring 25s linear infinite',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Orbit dot 1 */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    left: '50%',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    boxShadow: '0 0 16px rgba(var(--glow-rgb), 0.9)',
                    transform: 'translateX(-50%)',
                  }}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  width: '620px',
                  height: '620px',
                  borderRadius: '50%',
                  border: '1px dashed rgba(var(--glow-rgb), 0.12)',
                  animation: 'spin-ring-reverse 35s linear infinite',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Orbit dot 2 */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: '50%',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    boxShadow: '0 0 12px rgba(var(--glow-rgb), 0.8)',
                    transform: 'translateX(-50%)',
                  }}
                />
              </div>
            </>
          )}

          {/* Profile circle */}
          <div
            className="hero-profile"
            style={{
              width: '480px',
              height: '480px',
              borderRadius: '50%',
              background: 'var(--gradient-1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `
                0 0 0 4px rgba(var(--glow-rgb), 0.3),
                0 0 50px rgba(var(--glow-rgb), 0.35),
                0 25px 80px rgba(var(--glow-rgb), 0.25)
              `,
              animation: isMobile ? 'none' : 'float-slow 7s ease-in-out infinite',
              position: 'relative',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            {/* Inner circle */}
            <div
              style={{
                position: 'absolute',
                inset: '6px',
                borderRadius: '50%',
                background: 'var(--dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              {!imageError ? (
                <img
                  src={profileImage}
                  alt="Affan Zahid"
                  onError={() => setImageError(true)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />
              ) : (
                <div
                  style={{
                    fontSize: '7rem',
                    fontWeight: 700,
                    color: 'var(--white)',
                  }}
                >
                  AZ
                </div>
              )}
            </div>
          </div>

          {/* Floating skill badges */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            style={{
              position: 'absolute',
              right: '-20px',
              top: '15%',
              background: 'rgba(10, 10, 20, 0.85)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(var(--glow-rgb), 0.25)',
              borderRadius: '14px',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 8px 32px rgba(var(--glow-rgb), 0.2)',
              animation: 'float 5s ease-in-out infinite',
            }}
          >
            <span style={{ fontSize: '1.4rem' }}>⚡</span>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--gray)' }}>Experience</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--light)' }}>5+ Years</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.7 }}
            style={{
              position: 'absolute',
              left: '-10px',
              bottom: '20%',
              background: 'rgba(10, 10, 20, 0.85)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(var(--glow-rgb), 0.25)',
              borderRadius: '14px',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 8px 32px rgba(var(--glow-rgb), 0.2)',
              animation: 'float 6s ease-in-out infinite',
              animationDelay: '1.5s',
            }}
          >
            <span style={{ fontSize: '1.4rem' }}>🚀</span>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--gray)' }}>Projects</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--light)' }}>10+ Built</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — hidden on mobile */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--gray)',
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        <span>Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
