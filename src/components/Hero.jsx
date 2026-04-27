import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowRight, FiBriefcase, FiArrowDown } from 'react-icons/fi'
import {
  SiReact, SiNodedotjs, SiJavascript,
  SiMongodb, SiTypescript, SiAmazonwebservices
} from 'react-icons/si'
import profileImage from '../assets/images/profile.jpeg'
import { CV_CACHE_BUST, CV_PATH } from '../cvAsset'

const roles = [
  'Software Engineer',
  'MERN Stack Developer',
  'Mobile App Developer',
  'Full Stack Developer',
  'React & Node.js Developer',
]

const techIcons = [
  { icon: <SiReact />, x: '3%', y: '20%', delay: 0, duration: 16 },
  { icon: <SiNodedotjs />, x: '88%', y: '18%', delay: 2.5, duration: 20 },
  { icon: <SiJavascript />, x: '5%', y: '75%', delay: 4, duration: 14 },
  { icon: <SiMongodb />, x: '85%', y: '72%', delay: 1.5, duration: 22 },
  { icon: <SiTypescript />, x: '48%', y: '4%', delay: 3, duration: 18 },
  { icon: <SiAmazonwebservices />, x: '48%', y: '90%', delay: 2, duration: 24 },
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
        timer = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), typingSpeed)
      } else {
        timer = setTimeout(() => setIsDeleting(true), pauseTime)
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => setDisplayText(displayText.slice(0, -1)), deletingSpeed)
      } else {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  return displayText
}

// Clip-masked word reveal — each word slides up from behind an overflow:hidden wrapper
const WordReveal = ({ text, className, delay = 0.3, style = {} }) => (
  <span className={className} aria-label={text} style={style}>
    {text.split(' ').map((word, i, arr) => (
      <span
        key={word + i}
        style={{
          display: 'inline-block',
          overflow: 'hidden',
          verticalAlign: 'bottom',
          marginRight: i < arr.length - 1 ? '0.22em' : 0,
        }}
      >
        <motion.span
          initial={{ y: '105%' }}
          animate={{ y: 0 }}
          transition={{
            delay: delay + i * 0.08,
            duration: 0.75,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          style={{ display: 'inline-block' }}
        >
          {word}
        </motion.span>
      </span>
    ))}
  </span>
)

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.4, 0, 0.2, 1] },
})

const Hero = () => {
  const [imageError, setImageError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const typedRole = useTypingEffect(roles)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const socialLinks = [
    { href: 'https://github.com/AffanZahid804', label: 'GitHub', icon: <FiGithub />, color: '#94a3b8', hoverBg: 'var(--gradient-1)' },
    { href: 'https://www.linkedin.com/in/affan-zahid', label: 'LinkedIn', icon: <FiLinkedin />, color: '#0ea5e9', hoverBg: 'linear-gradient(135deg,#0ea5e9,#0284c7)' },
    { href: 'https://www.upwork.com/freelancers/~01dabd00704ad7f10b?mp_source=share', label: 'Upwork', icon: <FiBriefcase />, color: '#14a800', hoverBg: 'linear-gradient(135deg,#14a800,#0d7a00)' },
  ]

  return (
    <section
      id="home"
      className="section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '110px',
        paddingBottom: '80px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Floating tech icons — desktop only */}
      {!isMobile && techIcons.map((t, i) => (
        <div
          key={i}
          className="tech-float-icon"
          style={{ left: t.x, top: t.y, '--duration': `${t.duration}s`, '--delay': `${t.delay}s`, fontSize: '2.2rem' }}
        >
          {t.icon}
        </div>
      ))}

      {/* Single subtle background glow */}
      <div className="glow" style={{ top: '-80px', left: '-120px', opacity: 0.6 }} />

      <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>

        {/* ── TOP META ROW ─────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '20px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            marginBottom: '52px',
            overflow: 'hidden',
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            style={{ fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(148,163,184,0.45)' }}
          >
            Portfolio — 2026
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <span className="status-dot" />
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.1em', color: 'rgba(148,163,184,0.45)' }}>
              Available for work
            </span>
          </motion.div>
        </div>

        {/* ── EDITORIAL NAME + PHOTO ────────────────────── */}
        <div
          className="hero-name-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'flex-end',
            gap: '40px',
            marginBottom: isMobile ? '32px' : '48px',
          }}
        >
          {/* Giant name */}
          <h1
          style={{
            fontSize: 'clamp(2.8rem, 6vw, 6.5rem)',
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '-3px',
            margin: 0,
          }}
          >
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <motion.span
                initial={{ y: '108%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.25, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                style={{ display: 'block', color: 'var(--light)' }}
              >
                AFFAN
              </motion.span>
            </span>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <motion.span
                initial={{ y: '108%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.38, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="gradient-text"
                style={{ display: 'block' }}
              >
                ZAHID
              </motion.span>
            </span>
          </h1>

          {/* Circular photo — desktop right, mobile hidden (reappears below) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="hero-photo-circle"
            style={{
              width: 'clamp(140px, 18vw, 220px)',
              height: 'clamp(140px, 18vw, 220px)',
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0,
              border: '1.5px solid rgba(var(--glow-rgb), 0.2)',
            }}
          >
            {!imageError ? (
              <img
                src={profileImage}
                alt="Affan Zahid"
                onError={() => setImageError(true)}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--gradient-1)', fontSize: '3rem', fontWeight: 700 }}>
                AZ
              </div>
            )}
          </motion.div>
        </div>

        {/* ── DIVIDER — sweeps left-to-right ─────────── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.52, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, rgba(var(--glow-rgb),0.35) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
            transformOrigin: '0%',
            marginBottom: '44px',
          }}
        />

        {/* ── BOTTOM GRID: role/bio left · buttons/social right ── */}
        <div
          className="hero-bottom-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr',
            gap: isMobile ? '36px' : '80px',
            alignItems: 'start',
          }}
        >
          {/* Left col: role + bio */}
          <div>
            <motion.div
              {...fadeUp(0.65)}
              style={{
                fontSize: 'clamp(1.2rem, 2.2vw, 1.75rem)',
                fontWeight: 700,
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
              }}
            >
              <span className="gradient-text">{typedRole}</span>
              <span className="typing-cursor" />
            </motion.div>

            <motion.p
              {...fadeUp(0.75)}
              style={{ fontSize: '1.05rem', color: 'var(--gray)', lineHeight: 1.85, maxWidth: '540px' }}
            >
              Software Engineer with 3+ years building scalable web and mobile applications
              across the MERN stack, NestJS, and cloud (AWS, Firebase). Strong focus on clean
              architecture, performance, and maintainable production systems. Available for projects on{' '}
              <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Upwork</span>.
            </motion.p>
          </div>

          {/* Right col: CTA buttons + socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <motion.div
              {...fadeUp(0.8)}
              className="hero-buttons"
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
            >
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work <FiArrowRight />
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-outline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiMail /> Get In Touch
              </motion.a>
              <motion.a
                href={`${import.meta.env.BASE_URL}${CV_PATH}?v=${CV_CACHE_BUST}`}
                className="btn btn-outline"
                download="Affan-Zahid-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiDownload /> Download CV
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.9)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ color: 'rgba(148,163,184,0.45)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Connect
              </span>
              <div style={{ display: 'flex', gap: '12px' }}>
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -5, scale: 1.12 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      width: '46px',
                      height: '46px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(var(--glow-rgb), 0.07)',
                      borderRadius: '50%',
                      color: s.color,
                      fontSize: '1.2rem',
                      border: '1px solid rgba(var(--glow-rgb), 0.18)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(8px)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = s.hoverBg
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.borderColor = 'transparent'
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(var(--glow-rgb),0.5)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(var(--glow-rgb), 0.07)'
                      e.currentTarget.style.color = s.color
                      e.currentTarget.style.borderColor = 'rgba(var(--glow-rgb), 0.18)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── SCROLL HINT ──────────────────────────────── */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            style={{
              position: 'absolute',
              bottom: '-20px',
              right: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(148,163,184,0.35)',
              fontSize: '0.68rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
            }}
          >
            <span>Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FiArrowDown size={14} />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Hero
