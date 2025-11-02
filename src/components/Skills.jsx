import { motion } from 'framer-motion'
import { 
  SiReact, SiJavascript, SiNodedotjs, SiPython, 
  SiHtml5, SiCss3, SiMongodb, SiPostgresql,
  SiGit, SiFigma, SiFirebase, SiTypescript,
  SiNextdotjs, SiTailwindcss, SiExpress, SiDjango,
  SiAmazonaws, SiSocketdotio
} from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend & Mobile',
      color: '#6366f1',
      skills: [
        { name: 'React', icon: <SiReact />, level: 92, color: '#61dafb' },
        { name: 'React Native', icon: <FaReact />, level: 90, color: '#61dafb' },
        { name: 'JavaScript', icon: <SiJavascript />, level: 90, color: '#f7df1e' },
        { name: 'HTML5', icon: <SiHtml5 />, level: 95, color: '#e34f26' },
        { name: 'CSS3', icon: <SiCss3 />, level: 92, color: '#1572b6' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85, color: '#000000' },
      ]
    },
    {
      title: 'Backend & APIs',
      color: '#8b5cf6',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, level: 92, color: '#339933' },
        { name: 'Express', icon: <SiExpress />, level: 90, color: '#000000' },
        { name: 'Python', icon: <SiPython />, level: 88, color: '#3776ab' },
        { name: 'Django', icon: <SiDjango />, level: 85, color: '#092e20' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 90, color: '#47a248' },
        { name: 'RESTful APIs', icon: <SiNodedotjs />, level: 92, color: '#339933' },
        { name: 'Socket.io', icon: <SiSocketdotio />, level: 88, color: '#010101' },
        { name: 'Firebase', icon: <SiFirebase />, level: 87, color: '#ffca28' },
      ]
    },
    {
      title: 'Cloud & AI',
      color: '#ec4899',
      skills: [
        { name: 'AWS', icon: <SiAmazonaws />, level: 85, color: '#ff9900' },
        { name: 'OAuth 2.0', icon: <SiGit />, level: 88, color: '#4285f4' },
        { name: 'JWT', icon: <SiGit />, level: 90, color: '#d63aff' },
        { name: 'RAG & Vector DB', icon: <SiPython />, level: 85, color: '#3776ab' },
        { name: 'Git', icon: <SiGit />, level: 90, color: '#f05032' },
      ]
    }
  ]

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="glow" style={{ top: '20%', right: '-300px', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)' }} />
      
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Technologies and tools I use to bring ideas to life
      </motion.p>

      <div className="skills-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '40px',
        marginTop: '60px',
      }}>
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
            whileHover={{ y: -10 }}
            style={{
              padding: '40px',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '35px',
              paddingBottom: '20px',
              borderBottom: `3px solid ${category.color}`,
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {category.title}
              </h3>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '25px',
            }}>
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}>
                      <div style={{
                        fontSize: '1.8rem',
                        color: skill.color || category.color,
                      }}>
                        {skill.icon}
                      </div>
                      <span style={{
                        fontWeight: 600,
                        fontSize: '1.1rem',
                      }}>
                        {skill.name}
                      </span>
                    </div>
                    <span style={{
                      color: 'var(--gray)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                    }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '10px',
                    background: 'var(--dark-lighter)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3,
                        duration: 1,
                        ease: "easeOut"
                      }}
                      style={{
                        height: '100%',
                        background: `linear-gradient(90deg, ${skill.color || category.color}, ${category.color})`,
                        borderRadius: '10px',
                        boxShadow: `0 0 10px ${skill.color || category.color}40`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills

