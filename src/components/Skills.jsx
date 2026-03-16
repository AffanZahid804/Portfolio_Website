import { motion } from 'framer-motion'
import {
  SiReact, SiJavascript, SiNodedotjs, SiPython,
  SiHtml5, SiCss3, SiMongodb, SiPostgresql,
  SiGit, SiFirebase, SiNextdotjs, SiExpress,
  SiDjango, SiAmazonwebservices, SiSocketdotio, SiNestjs
} from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

const allSkills = [
  { name: 'React', icon: <SiReact />, color: '#61dafb' },
  { name: 'React Native', icon: <FaReact />, color: '#61dafb' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
  { name: 'HTML5', icon: <SiHtml5 />, color: '#e34f26' },
  { name: 'CSS3', icon: <SiCss3 />, color: '#1572b6' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
  { name: 'NestJS', icon: <SiNestjs />, color: '#E0234E' },
  { name: 'Express', icon: <SiExpress />, color: '#94a3b8' },
  { name: 'Python', icon: <SiPython />, color: '#3776ab' },
  { name: 'Django', icon: <SiDjango />, color: '#44b78b' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
  { name: 'Socket.io', icon: <SiSocketdotio />, color: '#94a3b8' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#ffca28' },
  { name: 'AWS', icon: <SiAmazonwebservices />, color: '#ff9900' },
  { name: 'Git', icon: <SiGit />, color: '#f05032' },
]

const row1 = allSkills.slice(0, 6)
const row2 = allSkills.slice(6, 12)
const row3 = allSkills.slice(12)

const SkillCard = ({ skill }) => (
  <div className="marquee-skill-card">
    <div
      className="marquee-skill-icon"
      style={{ color: skill.color, '--skill-color': skill.color }}
    >
      {skill.icon}
    </div>
    <span className="marquee-skill-name">{skill.name}</span>
    <div
      className="marquee-skill-glow"
      style={{ background: `radial-gradient(circle, ${skill.color}25 0%, transparent 70%)` }}
    />
  </div>
)

const MarqueeRow = ({ skills, direction = 'left', speed = 30 }) => {
  const doubled = [...skills, ...skills, ...skills, ...skills]
  return (
    <div className="marquee-container">
      <div
        className={`marquee-track marquee-${direction}`}
        style={{ '--marquee-speed': `${speed}s` }}
      >
        {doubled.map((skill, i) => (
          <SkillCard key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div
        className="glow"
        style={{
          top: '20%',
          right: '-300px',
          background: 'radial-gradient(circle, rgba(var(--glow-rgb), 0.25) 0%, transparent 70%)',
        }}
      />
      <div
        className="glow"
        style={{
          bottom: '10%',
          left: '-300px',
          background: 'radial-gradient(circle, rgba(var(--glow-rgb), 0.15) 0%, transparent 70%)',
        }}
      />

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Skills
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
        Technologies and tools I use to bring ideas to life
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
          marginTop: '50px',
        }}
      >
        {/* Row labels + marquees */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px',
              paddingLeft: '20px',
            }}
          >
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              boxShadow: '0 0 12px #6366f180',
            }} />
            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--gray)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Frontend & Mobile
            </span>
          </motion.div>
          <MarqueeRow skills={row1} direction="left" speed={28} />
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px',
              paddingLeft: '20px',
            }}
          >
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              boxShadow: '0 0 12px #8b5cf680',
            }} />
            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--gray)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Backend & APIs
            </span>
          </motion.div>
          <MarqueeRow skills={row2} direction="right" speed={32} />
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px',
              paddingLeft: '20px',
            }}
          >
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ec4899, #f59e0b)',
              boxShadow: '0 0 12px #ec489980',
            }} />
            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--gray)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Cloud & DevOps
            </span>
          </motion.div>
          <MarqueeRow skills={row3} direction="left" speed={24} />
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
