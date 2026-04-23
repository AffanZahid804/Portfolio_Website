import { motion } from 'framer-motion'
import { FiCode, FiLayers, FiTrendingUp, FiAward, FiUsers, FiBriefcase } from 'react-icons/fi'

const About = () => {
  const features = [
    {
      icon: <FiCode />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following industry best practices and SOLID principles',
      color: '#6366f1',
    },
    {
      icon: <FiLayers />,
      title: 'Modern Stack',
      description: 'Using cutting-edge technologies and frameworks for optimal performance and user experience',
      color: '#8b5cf6',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Performance',
      description: 'Optimized applications that load fast, run smoothly, and scale efficiently',
      color: '#ec4899',
    },
  ]

  const stats = [
    { icon: <FiBriefcase />, number: '10+', label: 'Projects Worked On' },
    { icon: <FiUsers />, number: '5+', label: 'Happy Clients' },
    { icon: <FiAward />, number: '3+', label: 'Years Experience' },
  ]

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
  }

  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div
        className="glow"
        style={{
          top: '50%',
          left: '-300px',
          transform: 'translateY(-50%)',
        }}
      />

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* Divider */}
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
        Get to know more about my journey, expertise, and passion for creating exceptional digital experiences
      </motion.p>

      <div
        className="about-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '80px',
          alignItems: 'start',
          marginTop: '60px',
        }}
      >
        {/* Left */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="about-left-heading"
            style={{
              fontSize: '2.4rem',
              fontWeight: 700,
              marginBottom: '30px',
              lineHeight: 1.2,
            }}
          >
            Building Scalable Solutions with{' '}
            <span className="gradient-text">Innovation & Excellence</span>
          </motion.h3>

          {[
            `I'm a results-driven Software Engineer based in Lahore, Pakistan, with about three years of experience building scalable web and mobile applications. I focus on clean architecture, production-ready systems, and the MERN stack alongside NestJS, PostgreSQL, MongoDB, and AWS.`,
            <>I ship end-to-end solutions—SaaS platforms, real-time apps, and backend services—including geolocation and discovery features, Socket.io chat, and RESTful APIs for international clients.</>,
            <>Currently at <strong style={{ color: 'var(--primary)' }}>Euphoria XR</strong> as a Software Engineer. Previously at <strong style={{ color: 'var(--primary)' }}>360HR</strong>, <strong style={{ color: 'var(--primary)' }}>Skylinx Technologies</strong>, and <strong style={{ color: 'var(--primary)' }}>OOP Technologies</strong>. Also available for freelance work on <strong style={{ color: 'var(--primary)' }}>Upwork</strong>.</>,
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={itemVariants}
              style={{
                fontSize: '1.08rem',
                color: 'var(--gray)',
                lineHeight: 1.85,
                marginBottom: '22px',
              }}
            >
              {text}
            </motion.p>
          ))}

          {/* Stats */}
          <div
            className="about-stats-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              marginTop: '10px',
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                whileHover={{ scale: 1.07, y: -5 }}
                style={{ textAlign: 'center', padding: '28px 18px' }}
              >
                <div style={{
                  fontSize: '1.8rem',
                  color: 'var(--primary)',
                  marginBottom: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                  {stat.icon}
                </div>
                <div className="stat-number" style={{
                  fontSize: '2.4rem',
                  fontWeight: 800,
                  marginBottom: '8px',
                }}>
                  {stat.number}
                </div>
                <div style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.4 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Feature Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card"
              whileHover={{ scale: 1.03, x: 10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              style={{ padding: '32px' }}
            >
              <motion.div
                style={{
                  width: '68px',
                  height: '68px',
                  marginBottom: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `linear-gradient(135deg, ${feature.color}, ${feature.color}cc)`,
                  borderRadius: '18px',
                  fontSize: '1.9rem',
                  color: 'var(--white)',
                  boxShadow: `0 12px 36px ${feature.color}50`,
                }}
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {feature.icon}
              </motion.div>
              <h4 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '12px' }}>
                {feature.title}
              </h4>
              <p style={{ color: 'var(--gray)', lineHeight: 1.75, fontSize: '0.98rem' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
