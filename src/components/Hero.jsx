import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowRight, FiBriefcase } from 'react-icons/fi'

const Hero = () => {
  const [imageError, setImageError] = useState(false)
  
  // Image path - use BASE_URL so images work with base path (e.g. /Portfolio_Website/)
  const profileImage = `${import.meta.env.BASE_URL}images/affan.jpeg`
  return (
    <section id="home" className="section" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '120px',
    }}>
      <div className="glow" style={{ top: '-200px', left: '-200px' }} />
      <div className="glow" style={{ bottom: '-200px', right: '-200px', background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)' }} />
      
      <div style={{
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
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '50px',
              fontSize: '0.9rem',
              marginBottom: '30px',
              color: 'var(--primary)',
            }}
          >
            👋 Welcome to My Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '30px',
              letterSpacing: '-2px',
            }}
          >
            Hi, I'm <span className="gradient-text">Affan Zahid</span>
            <br />
            <span style={{ fontSize: '0.8em' }}>Software Engineer</span>
            <br />
        
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              fontSize: '1.25rem',
              color: 'var(--gray)',
              lineHeight: 1.8,
              marginBottom: '40px',
              maxWidth: '600px',
            }}
          >
            Full Stack and Mobile Application Developer with experience building scalable web and mobile applications using React.js, React Native, Next.js, Node.js, Nest.js, and modern JavaScript. Skilled in high-performance user-centric products, real-time systems, and RESTful APIs. Available for projects on Upwork.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              marginBottom: '50px',
            }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline">
              <FiMail /> Get In Touch
            </a>
            <a href={`${import.meta.env.BASE_URL}AffanResume-Dev.pdf`} className="btn btn-outline" download target="_blank" rel="noopener noreferrer">
              <FiDownload /> Download CV
            </a>
          </motion.div>

          <motion.div
            className="hero-social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ color: 'var(--gray)', marginRight: '10px' }}>Follow me:</span>
            <a href="https://github.com/AffanZahid804" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--dark-light)',
              borderRadius: '50%',
              color: 'var(--light)',
              fontSize: '1.3rem',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--gradient-1)'
              e.target.style.transform = 'translateY(-5px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'var(--dark-light)'
              e.target.style.transform = 'translateY(0)'
            }}
            >
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/affan-zahid" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--dark-light)',
              borderRadius: '50%',
              color: 'var(--light)',
              fontSize: '1.3rem',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--gradient-1)'
              e.target.style.transform = 'translateY(-5px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'var(--dark-light)'
              e.target.style.transform = 'translateY(0)'
            }}
            >
              <FiLinkedin />
            </a>
            <a href="https://www.upwork.com/freelancers/~01dabd00704ad7f10b?mp_source=share" target="_blank" rel="noopener noreferrer" aria-label="Upwork" style={{
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--dark-light)',
              borderRadius: '50%',
              color: '#14a800',
              fontSize: '1.3rem',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(20, 168, 0, 0.3)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#14a800'
              e.target.style.color = 'var(--white)'
              e.target.style.transform = 'translateY(-5px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'var(--dark-light)'
              e.target.style.color = '#14a800'
              e.target.style.transform = 'translateY(0)'
            }}
            >
              <FiBriefcase />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-column"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div className="hero-profile" style={{
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'var(--gradient-1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '8rem',
            fontWeight: 700,
            color: 'var(--white)',
            boxShadow: '0 30px 80px rgba(99, 102, 241, 0.5)',
            animation: 'float 6s ease-in-out infinite',
            position: 'relative',
            overflow: 'hidden',
            flexShrink: 0,
          }}>
            <div style={{
              position: 'absolute',
              inset: '10px',
              borderRadius: '50%',
              background: 'var(--dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
              {profileImage && !imageError ? (
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
                <div style={{
                  fontSize: '8rem',
                  fontWeight: 700,
                  color: 'var(--white)',
                }}>
                  AZ
                </div>
              )}
            </div>
            
            <div style={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              border: '2px solid rgba(99, 102, 241, 0.3)',
              animation: 'float 8s ease-in-out infinite',
              animationDelay: '1s',
            }} />
            <div style={{
              position: 'absolute',
              width: '650px',
              height: '650px',
              borderRadius: '50%',
              border: '2px solid rgba(236, 72, 153, 0.2)',
              animation: 'float 10s ease-in-out infinite',
              animationDelay: '2s',
            }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

