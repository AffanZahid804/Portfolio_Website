import { motion } from 'framer-motion'
import { FiCode, FiLayers, FiTrendingUp, FiAward, FiUsers, FiBriefcase } from 'react-icons/fi'

const About = () => {
  const features = [
    {
      icon: <FiCode />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following industry best practices and SOLID principles'
    },
    {
      icon: <FiLayers />,
      title: 'Modern Stack',
      description: 'Using cutting-edge technologies and frameworks for optimal performance and user experience'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Performance',
      description: 'Optimized applications that load fast, run smoothly, and scale efficiently'
    }
  ]

  const stats = [
    { icon: <FiBriefcase />, number: '10+', label: 'Projects Worked On' },
    { icon: <FiUsers />, number: '5+', label: 'Happy Clients' },
    { icon: <FiAward />, number: '2+', label: 'Years Experience' },
  ]

  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="glow" style={{ top: '50%', left: '-300px', transform: 'translateY(-50%)' }} />
      
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Get to know more about my journey, expertise, and passion for creating exceptional digital experiences
      </motion.p>

      <div className="about-container" style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '80px',
        alignItems: 'start',
        marginTop: '60px',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="about-left-heading" style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '30px',
            lineHeight: 1.2,
          }}>
            Building Scalable Solutions with <span className="gradient-text">Innovation & Excellence</span>
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--gray)',
            lineHeight: 1.8,
            marginBottom: '25px',
          }}>
            I'm a Software Engineer based in Lahore, Pakistan, with strong experience in React.js, React Native, 
            Node.js, and modern JavaScript. I build scalable web and mobile applications, real-time systems, 
            and RESTful APIs, and have delivered production-ready solutions across SaaS, mobile, and web for 
            international clients and remote teams.
          </p>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--gray)',
            lineHeight: 1.8,
            marginBottom: '25px',
          }}>
            Currently, I'm working at <strong style={{ color: 'var(--primary)' }}>Euphoria XR</strong> as a Software Engineer, 
            where I build scalable mobile and web applications with React Native and Node.js. My work includes 
            real-time chat (Socket.io), push notifications (Firebase), OAuth/JWT authentication, and a real-estate 
            listing platform (NestJS, PostgreSQL, AWS).
          </p>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--gray)',
            lineHeight: 1.8,
            marginBottom: '40px',
          }}>
            I've previously worked at <strong style={{ color: 'var(--primary)' }}>360HR</strong>, <strong style={{ color: 'var(--primary)' }}>Skylinx Technologies</strong>, and <strong style={{ color: 'var(--primary)' }}>OopTech</strong>, 
            delivering React, Next.js, and MERN stack solutions for global clients. I'm available for 
            freelance projects on <strong style={{ color: 'var(--primary)' }}>Upwork</strong>, where I help businesses transform their ideas 
            into impactful digital products.
          </p>

          <div className="about-stats-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
          }}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  textAlign: 'center',
                  padding: '30px 20px',
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  color: 'var(--primary)',
                  marginBottom: '15px',
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  background: 'var(--gradient-1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '10px',
                }}>
                  {stat.number}
                </div>
                <div style={{
                  color: 'var(--gray)',
                  fontSize: '0.95rem',
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card"
              whileHover={{ scale: 1.02, x: 10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              style={{
                padding: '35px',
              }}
            >
              <div style={{
                width: '70px',
                height: '70px',
                marginBottom: '25px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--gradient-1)',
                borderRadius: '18px',
                fontSize: '2rem',
                color: 'var(--white)',
                boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
              }}>
                {feature.icon}
              </div>
              <h4 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '15px',
              }}>
                {feature.title}
              </h4>
              <p style={{
                color: 'var(--gray)',
                lineHeight: 1.7,
                fontSize: '1rem',
              }}>
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

