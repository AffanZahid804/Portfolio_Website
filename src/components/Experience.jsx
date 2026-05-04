import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import SectionMeta from './SectionMeta'

const Experience = () => {
  const experiences = [
    {
      type: 'fulltime',
      title: 'Software Engineer',
      company: 'Techtimize',
      location: 'Lahore, Pakistan · On-site',
      period: 'Oct 2025 – Present',
      description:
        'Full-time software engineer building production web platforms for business clients with React.js, Node.js, and modern JavaScript—focused on scalable frontends, reliable APIs, and secure backends.',
      achievements: [
        'Develop and maintain full-stack web applications using React.js, Node.js, and modern JavaScript for production-level clients',
        'Build responsive, component-driven UIs with reusable architecture, clean UX, and optimized performance (lazy loading, code splitting, asset optimization)',
        'Design and maintain RESTful APIs and backend services; integrate databases, authentication, admin panels, and role-based access control',
        'Deliver scalable React.js and Next.js apps for global clients; integrate third-party APIs, auth flows, and Stripe',
        'Design microservices-style backends with NestJS and PostgreSQL on AWS, including a secure admin portal',
      ],
      technologies: ['React.js', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'AWS', 'Stripe'],
      color: '#7c3aed',
    },
    {
      type: 'fulltime',
      title: 'Software Engineer',
      company: 'Euphoria XR',
      location: 'Lahore, Pakistan · On-site',
      period: 'June 2024 – Oct 2025',
      description:
        'Developed and maintained a production React Native app—core work across location-based discovery, real-time chat, social features, profiles, and event workflows.',
      achievements: [
        'Built location-based discovery so users explore nearby events, profiles, and content through proximity-based recommendations',
        'Implemented a scalable real-time chat module with Socket.io—reliable delivery, presence, and low-latency messaging',
        'Shipped social features: friend requests, profile interactions, and connection management',
        'Built and integrated RESTful APIs for mobile features, user data, events, and real-time communication',
      ],
      technologies: ['React Native', 'React', 'Node.js', 'Socket.io', 'REST APIs', 'MongoDB'],
      color: '#3b82f6',
    },
  ]

  return (
    <section id="experience" className="section" style={{ position: 'relative' }}>
      <div className="section-num">03</div>
      <div className="glow" style={{ bottom: '20%', left: '-300px' }} />

      <SectionMeta label="03 — Experience" />

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Work Experience
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
        My professional journey and the projects I've worked on
      </motion.p>

      <div
        className="experience-timeline"
        style={{
          position: 'relative',
          paddingLeft: '40px',
          marginTop: '60px',
        }}
      >
        {/* Timeline line */}
        <motion.div
          className="experience-timeline-line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            left: '18px',
            top: 0,
            bottom: 0,
            width: '3px',
            background: 'var(--gradient-1)',
            borderRadius: '3px',
            transformOrigin: 'top',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '55px' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              style={{ position: 'relative' }}
            >
              {/* Timeline dot */}
              <motion.div
                className="experience-dot"
                whileInView={{ scale: [0, 1.3, 1] }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
                style={{
                  position: 'absolute',
                  left: '-52px',
                  top: '12px',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${exp.color}, ${exp.color}cc)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  color: 'var(--white)',
                  boxShadow: `0 0 20px ${exp.color}70, 0 0 40px ${exp.color}30`,
                  zIndex: 2,
                  border: '4px solid var(--dark)',
                }}
              >
                <FiBriefcase />
              </motion.div>

              <motion.div
                className="card experience-content"
                whileHover={{ y: -6 }}
                style={{
                  padding: '38px',
                  marginLeft: '20px',
                  borderLeft: `3px solid ${exp.color}30`,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '16px',
                    marginBottom: '22px',
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.55rem', fontWeight: 700, marginBottom: '8px' }}>
                      {exp.title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <span style={{ color: exp.color, fontWeight: 700, fontSize: '1.05rem' }}>
                        {exp.company}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--gray)', fontSize: '0.9rem' }}>
                        <FiMapPin size={13} /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: `${exp.color}15`,
                      border: `1px solid ${exp.color}30`,
                      borderRadius: '20px',
                      padding: '6px 16px',
                      color: exp.color,
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <FiCalendar size={14} />
                    {exp.period}
                  </div>
                </div>

                <p style={{ color: 'var(--gray)', lineHeight: 1.75, marginBottom: '22px', fontSize: '1rem' }}>
                  {exp.description}
                </p>

                {/* Achievements */}
                <div style={{ marginBottom: '22px' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', color: 'var(--light)' }}>
                    Key Achievements
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                    {exp.achievements.map((ach, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--gray)', fontSize: '0.95rem' }}
                      >
                        <span style={{ color: exp.color, fontSize: '1rem', marginTop: '2px', flexShrink: 0 }}>✦</span>
                        <span>{ach}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ y: -3, scale: 1.05 }}
                      style={{
                        padding: '5px 14px',
                        background: `${exp.color}12`,
                        border: `1px solid ${exp.color}30`,
                        borderRadius: '20px',
                        fontSize: '0.82rem',
                        color: exp.color,
                        fontWeight: 600,
                        cursor: 'default',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
