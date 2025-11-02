import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      type: 'fulltime',
      title: 'Full Stack Developer',
      company: 'Euphoria XR',
      location: 'Remote',
      period: 'June 2024 – Present',
      description: 'Contributing to innovative web and mobile applications with a focus on scalable, user-centric solutions. Working on cutting-edge projects including mobile apps and AI-powered chatbots.',
      achievements: [
        'Architected and implemented intuitive swipe functionality in React Native, enhancing user engagement',
        'Designed and deployed real-time push notifications using Firebase Cloud Messaging',
        'Engineered robust chat module with Socket.io for real-time bidirectional communication',
        'Developed comprehensive event management system with location-based features using MongoDB geospatial queries',
        'Implemented secure authentication systems using OAuth and JWT for multiple social platforms',
        'Built AI-powered chatbot with RAG and Vector DB for accurate, context-aware responses',
        'Developed voice calling functionality with speech-to-text and text-to-speech capabilities'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Python', 'Django', 'AWS', 'Socket.io', 'Firebase', 'OAuth', 'JWT', 'RAG', 'Vector DB']
    },
    {
      type: 'fulltime',
      title: 'Associate Software Engineer',
      company: '360HR',
      location: 'Remote',
      period: 'July 2023 - Aug 2024',
      description: 'Led development of scalable Job Posting Website, optimizing responsive design and state management to enhance user experience and system reliability.',
      achievements: [
        'Led development of scalable Job Posting Website with optimized responsive design',
        'Built and maintained robust Node.js RESTful APIs for user management and workflows',
        'Crafted sleek, high-performance React interfaces for fast and intuitive user experience',
        'Ensured seamless real-time data processing for job applications and user interactions',
        'Collaborated with team on software projects and debugging complex issues'
      ],
      technologies: ['React', 'Node.js', 'RESTful APIs', 'JavaScript', 'HTML/CSS']
    },
    {
      type: 'fulltime',
      title: 'Web Developer',
      company: 'T-Mobile',
      location: 'Remote',
      period: 'June 2022 - August 2023',
      description: 'Experienced React and Node.js Developer contributing to the development and optimization of internal web tools, improving performance, and enhancing user experience across digital platforms.',
      achievements: [
        'Developed and optimized internal web tools using React and Node.js',
        'Improved application performance and enhanced user experience across digital platforms',
        'Built scalable, high-performance applications with a focus on functionality and user-centric design',
        'Implemented API-driven architectures for seamless data processing',
        'Collaborated with cross-functional teams to deliver cutting-edge web solutions'
      ],
      technologies: ['React', 'Node.js', 'JavaScript', 'RESTful APIs', 'HTML/CSS', 'Web Performance Optimization']
    }
  ]

  const getIcon = (type) => {
    return <FiBriefcase />
  }

  const getColor = (type) => {
    if (type === 'upwork') return '#14a800'
    if (type === 'freelance') return '#6366f1'
    return '#ec4899'
  }

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
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        My professional journey and the projects I've worked on
      </motion.p>

      <div className="experience-timeline" style={{
        position: 'relative',
        paddingLeft: '40px',
        marginTop: '60px',
      }}>
        {/* Timeline line */}
        <div className="experience-timeline-line" style={{
          position: 'absolute',
          left: '20px',
          top: 0,
          bottom: 0,
          width: '3px',
          background: 'var(--gradient-1)',
          borderRadius: '3px',
        }} />

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
        }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              style={{
                position: 'relative',
              }}
            >
              {/* Timeline dot */}
              <div className="experience-dot" style={{
                position: 'absolute',
                left: '-50px',
                top: '10px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${getColor(exp.type)}, ${getColor(exp.type)}dd)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                color: 'var(--white)',
                boxShadow: `0 0 20px ${getColor(exp.type)}60`,
                zIndex: 2,
                border: '4px solid var(--dark)',
              }}>
                {getIcon(exp.type)}
              </div>

              <div className="card experience-content" style={{
                padding: '40px',
                marginLeft: '20px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '20px',
                  marginBottom: '25px',
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '1.6rem',
                      fontWeight: 700,
                      marginBottom: '8px',
                      color: 'var(--light)',
                    }}>
                      {exp.title}
                    </h3>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      flexWrap: 'wrap',
                      marginBottom: '15px',
                    }}>
                      <span style={{
                        color: getColor(exp.type),
                        fontWeight: 600,
                        fontSize: '1.1rem',
                      }}>
                        {exp.company}
                      </span>
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        color: 'var(--gray)',
                        fontSize: '0.95rem',
                      }}>
                        <FiMapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--gray)',
                    fontSize: '0.95rem',
                  }}>
                    <FiCalendar size={16} />
                    {exp.period}
                  </div>
                </div>

                <p style={{
                  color: 'var(--gray)',
                  lineHeight: 1.7,
                  marginBottom: '25px',
                  fontSize: '1.05rem',
                }}>
                  {exp.description}
                </p>

                <div style={{
                  marginBottom: '25px',
                }}>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    marginBottom: '15px',
                    color: 'var(--light)',
                  }}>
                    Key Achievements:
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        color: 'var(--gray)',
                      }}>
                        <span style={{
                          color: getColor(exp.type),
                          fontSize: '1.2rem',
                          marginTop: '2px',
                        }}>
                          ✓
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    marginBottom: '15px',
                    color: 'var(--light)',
                  }}>
                    Technologies Used:
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                  }}>
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '8px 16px',
                          background: `rgba(${exp.type === 'upwork' ? '20, 168, 0' : exp.type === 'freelance' ? '99, 102, 241' : '236, 72, 153'}, 0.1)`,
                          border: `1px solid rgba(${exp.type === 'upwork' ? '20, 168, 0' : exp.type === 'freelance' ? '99, 102, 241' : '236, 72, 153'}, 0.3)`,
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          color: getColor(exp.type),
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

