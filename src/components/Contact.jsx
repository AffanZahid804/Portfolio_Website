import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiBriefcase } from 'react-icons/fi'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'zahidaffan72@gmail.com',
      link: 'mailto:zahidaffan72@gmail.com',
      color: '#6366f1'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+92-3314906039',
      link: 'tel:+923314906039',
      color: '#8b5cf6'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'Lahore, Pakistan',
      link: '#',
      color: '#ec4899'
    }
  ]

  const socialLinks = [
    { icon: <FiGithub />, name: 'GitHub', link: 'https://github.com/AffanZahid804', color: '#333' },
    { icon: <FiLinkedin />, name: 'LinkedIn', link: 'https://www.linkedin.com/in/affan-zahid', color: '#0077b5' },
    { icon: <FiBriefcase />, name: 'Upwork', link: 'https://www.upwork.com/freelancers/~01dabd00704ad7f10b?viewMode=1', color: '#14a800' },
  ]

  return (
    <section id="contact" className="section" style={{ position: 'relative', paddingBottom: '150px' }}>
      <div className="glow" style={{ top: '20%', right: '-300px' }} />
      
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Let's work together to bring your ideas to life
      </motion.p>

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        marginTop: '60px',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 style={{
            fontSize: '2.2rem',
            fontWeight: 700,
            marginBottom: '20px',
            background: 'var(--gradient-1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Let's Start a Conversation
          </h3>
          <p style={{
            color: 'var(--gray)',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            marginBottom: '50px',
          }}>
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your visions. Feel free to reach out through any of the channels below.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            marginBottom: '50px',
          }}>
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                style={{
                  padding: '25px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '15px',
                  background: `linear-gradient(135deg, ${info.color}, ${info.color}dd)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: 'var(--white)',
                  flexShrink: 0,
                }}>
                  {info.icon}
                </div>
                <div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'var(--gray)',
                    marginBottom: '5px',
                  }}>
                    {info.title}
                  </div>
                  <div style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--light)',
                  }}>
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: 600,
              marginBottom: '25px',
              color: 'var(--light)',
            }}>
              Connect With Me
            </h4>
            <div style={{
              display: 'flex',
              gap: '15px',
              flexWrap: 'wrap',
            }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '55px',
                    height: '55px',
                    borderRadius: '15px',
                    background: 'var(--dark-light)',
                    border: `2px solid ${social.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: social.color,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = `${social.color}20`
                    e.target.style.borderColor = social.color
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'var(--dark-light)'
                    e.target.style.borderColor = `${social.color}40`
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
          borderTop: '1px solid rgba(99, 102, 241, 0.1)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p style={{
          color: 'var(--gray)',
          fontSize: '1rem',
        }}>
          © 2024 Affan Zahid. All rights reserved. Built with ❤️ using React & Vite.
        </p>
      </motion.div>
    </section>
  )
}

export default Contact

