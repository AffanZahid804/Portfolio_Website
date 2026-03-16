import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      type: 'fulltime',
      title: 'Software Engineer',
      company: 'Euphoria XR',
      location: 'Remote',
      period: 'June 2024 – Present',
      description: 'Building scalable web and mobile applications with React Native and Node.js. Delivering real-time systems, RESTful APIs, and secure authentication.',
      achievements: [
        'Architected advanced mobile features using React Native and Node.js',
        'Designed real-time push notifications using Firebase Cloud Messaging',
        'Built chat module using Socket.io with real-time synchronization',
        'Implemented OAuth & JWT-based secure authentication with social logins',
        'MongoDB geospatial features for location-based discovery',
        'Developed scalable real-estate platform: NestJS + PostgreSQL on AWS',
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'NestJS', 'PostgreSQL', 'AWS', 'Socket.io', 'Firebase', 'OAuth', 'JWT'],
      color: '#ec4899',
    },
    {
      type: 'fulltime',
      title: 'Associate Software Engineer',
      company: '360HR',
      location: 'Remote',
      period: 'July 2023 – Aug 2024',
      description: 'Led development of scalable Job Posting platform with optimized UI and high-performance React interfaces.',
      achievements: [
        'Built scalable Job Posting platform with optimized UI',
        'Developed Node.js RESTful APIs and React interfaces',
        'Collaborated on debugging and new feature delivery',
      ],
      technologies: ['React', 'Node.js', 'RESTful APIs', 'JavaScript', 'HTML/CSS'],
      color: '#6366f1',
    },
    {
      type: 'fulltime',
      title: 'React.js Developer',
      company: 'Skylinx Technologies',
      location: 'Remote',
      period: 'Jan 2022 – 2023',
      description: 'Developed scalable React.js and Next.js applications for global clients.',
      achievements: [
        'Built React.js and Next.js apps for global clients',
        'Built responsive UI components and dashboards',
        'Integrated APIs, authentication, and third-party services',
        'Performance optimization with lazy loading',
      ],
      technologies: ['React', 'Next.js', 'JavaScript', 'RESTful APIs', 'HTML/CSS'],
      color: '#8b5cf6',
    },
    {
      type: 'fulltime',
      title: 'MERN Stack Developer',
      company: 'OopTech',
      location: 'Remote',
      period: 'Jan 2021 – Dec 2021',
      description: 'Built full-stack applications using MERN stack including admin dashboards, SaaS platforms, and APIs.',
      achievements: [
        'Built full-stack MERN applications',
        'Developed admin dashboards and SaaS platforms',
        'Integrated payment gateways and external APIs',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript'],
      color: '#f97316',
    },
    {
      type: 'freelance',
      title: 'Freelance Developer',
      company: 'Web & Mobile Applications',
      location: 'Remote',
      period: 'Jan 2021 – June 2021',
      description: 'Delivered custom web and mobile apps for international clients.',
      achievements: [
        'Delivered React.js and Next.js web applications',
        'React Native mobile apps with API integrations',
        'Managed deployment and client delivery lifecycle',
      ],
      technologies: ['React', 'React Native', 'Next.js', 'Node.js', 'JavaScript'],
      color: '#10b981',
    },
  ]

  return (
    <section id="experience" className="section" style={{ position: 'relative' }}>
      <div className="glow" style={{ bottom: '20%', left: '-300px' }} />

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
