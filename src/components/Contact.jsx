import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiBriefcase } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'zahidaffan72@gmail.com',
      link: 'mailto:zahidaffan72@gmail.com',
      color: '#6366f1',
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+92-3314906039',
      link: 'tel:+923314906039',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'Lahore, Pakistan',
      link: '#',
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899, #f59e0b)',
    },
  ]

  const socialLinks = [
    { icon: <FiGithub />, name: 'GitHub', link: 'https://github.com/AffanZahid804', color: '#94a3b8', bg: 'linear-gradient(135deg, #374151, #6b7280)' },
    { icon: <FiLinkedin />, name: 'LinkedIn', link: 'https://www.linkedin.com/in/affan-zahid', color: '#0ea5e9', bg: 'linear-gradient(135deg, #0ea5e9, #0284c7)' },
    { icon: <FiBriefcase />, name: 'Upwork', link: 'https://www.upwork.com/freelancers/~01dabd00704ad7f10b?viewMode=1', color: '#14a800', bg: 'linear-gradient(135deg, #14a800, #0d7a00)' },
    { icon: <SiWhatsapp />, name: 'WhatsApp', link: 'https://wa.me/923314906039', color: '#25d366', bg: 'linear-gradient(135deg, #25d366, #128c7e)' },
  ]

  return (
    <section id="contact" className="section" style={{ position: 'relative', paddingBottom: '150px' }}>
      <div
        className="glow"
        style={{ top: '20%', right: '-300px' }}
      />

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="section-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Let's work together to bring your ideas to life
      </motion.p>

      <div style={{ maxWidth: '820px', margin: '0 auto', marginTop: '60px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3
            className="contact-section-heading gradient-text"
            style={{
              fontSize: '2.4rem',
              fontWeight: 800,
              marginBottom: '18px',
            }}
          >
            Let's Start a Conversation
          </h3>
          <p style={{ color: 'var(--gray)', fontSize: '1.1rem', lineHeight: 1.85, marginBottom: '52px' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your visions. Feel free to reach out through any of the channels below.
          </p>

          {/* Contact cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '52px' }}>
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="card"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ scale: 1.03, x: 12 }}
                style={{
                  padding: '24px 28px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  color: 'inherit',
                }}
              >
                <motion.div
                  style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '16px',
                    background: info.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    color: 'var(--white)',
                    flexShrink: 0,
                    boxShadow: `0 10px 28px ${info.color}40`,
                  }}
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {info.icon}
                </motion.div>
                <div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--gray)', marginBottom: '5px', fontWeight: 500 }}>
                    {info.title}
                  </div>
                  <div style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--light)' }}>
                    {info.value}
                  </div>
                </div>
                <div style={{ marginLeft: 'auto', color: info.color, fontSize: '1.2rem', opacity: 0.5 }}>
                  →
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social links */}
          <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px' }}>
              Connect With Me
            </h4>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 300 }}
                  whileHover={{ scale: 1.15, y: -6 }}
                  whileTap={{ scale: 0.92 }}
                  style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '16px',
                    background: 'rgba(var(--glow-rgb), 0.08)',
                    border: `2px solid ${social.color}35`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: social.color,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = social.bg
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.borderColor = 'transparent'
                    e.currentTarget.style.boxShadow = `0 10px 28px ${social.color}50`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(var(--glow-rgb), 0.08)'
                    e.currentTarget.style.color = social.color
                    e.currentTarget.style.borderColor = `${social.color}35`
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        style={{
          marginTop: '100px',
          textAlign: 'center',
          paddingTop: '40px',
          borderTop: '1px solid rgba(var(--glow-rgb), 0.12)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p style={{ color: 'var(--gray)', fontSize: '0.98rem' }}>
          © 2025{' '}
          <span className="gradient-text" style={{ fontWeight: 700 }}>Affan Zahid</span>
          . All rights reserved. Built with ❤️ using React & Vite.
        </p>
      </motion.div>
    </section>
  )
}

export default Contact
