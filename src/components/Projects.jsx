import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiExternalLink, FiArrowRight } from 'react-icons/fi'
import SectionMeta from './SectionMeta'
import dentalicImg from '../assets/images/assets/image.png'
import hrImg from '../assets/images/assets/image-copy.png'
import bitrixImg from '../assets/images/assets/bitrix.png'
import tmobileImg from '../assets/images/assets/tmobile.png'
import reveriaImg from '../assets/images/assets/reveria.png'
import instantBoxesImg from '../assets/images/assets/instant-custom-boxes.png'

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const projects = [
    {
      title: 'Dentalic',
      description: 'Dental management SaaS to streamline clinic operations—from patient scheduling to billing. Boost efficiency, improve patient care, and simplify administrative tasks.',
      image: dentalicImg,
      tags: ['Digital Health', 'Web App', 'SaaS'],
      link: 'https://mongid.com/en/dentalic',
      featured: true,
      gradient: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
      accentColor: '#64748b',
    },
    {
      title: '360HR',
      description:
        'Enterprise-grade job portal and recruitment platform—job posting workflows, applicant tracking, and analytics dashboards for teams hiring at scale.',
      image: hrImg,
      tags: ['HR & SaaS', 'React', 'Node.js', 'Cloud'],
      link: 'https://360hr.cloud/',
      featured: true,
      gradient: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
      accentColor: '#3b82f6',
    },
    {
      title: 'Bitrix24 Tasks & Projects',
      description: 'Free online task management platform to streamline team collaboration—from task assignment to project completion. Boost productivity and simplify workflow.',
      image: bitrixImg,
      tags: ['Task Management', 'Web Platform'],
      link: 'https://www.bitrix24.com/',
      featured: false,
      gradient: 'linear-gradient(135deg, #485563 0%, #29323c 100%)',
      accentColor: '#485563',
    },
    {
      title: 'T-Mobile',
      description: 'Leading US wireless operator—full-suite digital platform for personal and business connectivity. Seamless customer-first experience for millions nationwide.',
      image: tmobileImg,
      tags: ['Telecom & Digital', 'Enterprise'],
      link: 'https://www.t-mobile.com/',
      featured: false,
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
      accentColor: '#4338ca',
    },
    {
      title: 'French Riviera Travel',
      description:
        'Travel and experience discovery platform with location-based exploration, curated listings, and smooth user interaction—built for performance, usability, and content management.',
      image: reveriaImg,
      tags: ['Travel & Tourism', 'Web Platform'],
      link: 'https://frenchriviera.travel/',
      featured: false,
      gradient: 'linear-gradient(135deg, #0c4a6e 0%, #155e75 100%)',
      accentColor: '#0891b2',
    },
    {
      title: 'Instant Custom Boxes',
      description: 'Leading custom packaging platform—design, customize, and order printed boxes with instant pricing, fast turnaround, and free shipping.',
      image: instantBoxesImg,
      tags: ['Packaging & E-Commerce', 'Web App'],
      link: 'https://www.instantcustomboxes.com/',
      featured: true,
      gradient: 'linear-gradient(135deg, #44403c 0%, #57534e 100%)',
      accentColor: '#78716c',
    },
  ]

  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <div className="section-num">04</div>
      <div className="glow" style={{ top: '10%', right: '-300px', background: 'radial-gradient(circle,rgba(var(--glow-rgb),0.2) 0%,transparent 70%)' }} />

      <SectionMeta label="04 — Projects" />

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
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
        A showcase of projects I've worked on
      </motion.p>

      <div
        className="projects-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(370px, 1fr))',
          gap: '36px',
          marginTop: '60px',
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.7 }}
            whileHover={isMobile ? {} : { y: -16, scale: 1.02 }}
            style={{
              padding: 0,
              overflow: 'hidden',
              border: project.featured
                ? `1px solid ${project.accentColor}50`
                : '1px solid rgba(var(--glow-rgb), 0.1)',
              boxShadow: project.featured
                ? `0 0 30px ${project.accentColor}20`
                : 'none',
            }}
          >
            {/* Image header */}
            <div
              style={{
                height: '210px',
                background: project.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Overlay shimmer */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 0, 0, 0.12)',
                  zIndex: 1,
                }}
              />

              {/* Project image */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>

              {project.featured && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 300 }}
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'rgba(0, 0, 0, 0.55)',
                    backdropFilter: 'blur(12px)',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#fff',
                    zIndex: 3,
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  ⭐ Featured
                </motion.div>
              )}
            </div>

            <div className="project-content" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--gray)', lineHeight: 1.75, marginBottom: '22px', fontSize: '0.97rem' }}>
                {project.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    whileHover={isMobile ? {} : { y: -3, scale: 1.05 }}
                    style={{
                      padding: '5px 13px',
                      background: `${project.accentColor}14`,
                      border: `1px solid ${project.accentColor}35`,
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      color: project.accentColor,
                      fontWeight: 600,
                      cursor: 'default',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {project.link && project.link !== '#' && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  whileHover={isMobile ? {} : { scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '0.92rem',
                    padding: '11px 20px',
                    background: project.gradient,
                    boxShadow: `0 8px 24px ${project.accentColor}35`,
                  }}
                >
                  <FiExternalLink style={{ marginRight: '6px' }} /> Live Demo
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ textAlign: 'center', marginTop: '60px' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <a href="#" className="btn btn-outline" style={{ padding: '15px 40px', fontSize: '1.05rem' }}>
          View All Projects <FiArrowRight />
        </a>
      </motion.div>
    </section>
  )
}

export default Projects
