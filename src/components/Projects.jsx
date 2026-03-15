import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'
import dentalicImg from '../assets/images/assets/image.png'
import hrImg from '../assets/images/assets/image-copy.png'
import bitrixImg from '../assets/images/assets/bitrix.png'
import tmobileImg from '../assets/images/assets/tmobile.png'
import reveriaImg from '../assets/images/assets/reveria.png'
import instantBoxesImg from '../assets/images/assets/instant-custom-boxes.png'

const Projects = () => {
  const projects = [
    {
      title: 'Dentalic',
      description: 'Dental management software to streamline clinic operations—from patient scheduling to billing. Boost efficiency, improve patient care, and simplify administrative tasks.',
      image: dentalicImg,
      tags: ['Digital Health', 'Web App', 'SaaS'],
      link: 'https://mongid.com/en/dentalic',
      github: null,
      featured: true,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: '360HR',
      description: 'Comprehensive cloud-based HR management system to streamline operations—from employee onboarding to payroll. Boost productivity, improve engagement, and simplify HR tasks.',
      image: hrImg,
      tags: ['HR & SaaS', 'React', 'Node.js', 'Cloud'],
      link: 'https://360hr.cloud/',
      github: null,
      featured: true,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Bitrix24 Tasks & Projects',
      description: 'Free online task management platform to streamline team collaboration—from task assignment to project completion. Boost productivity, improve accountability, and simplify workflow.',
      image: bitrixImg,
      tags: ['Task Management', 'Web Platform'],
      link: 'https://www.bitrix24.com/',
      github: null,
      featured: false,
      gradient: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)'
    },
    {
      title: 'T-Mobile',
      description: 'Leading American wireless operator—full-suite digital platform for personal and business connectivity. From devices and 5G plans to account management, a seamless customer-first experience for millions nationwide.',
      image: tmobileImg,
      tags: ['Telecom & Digital', 'Enterprise'],
      link: 'https://www.t-mobile.com/',
      github: null,
      featured: false,
      gradient: 'linear-gradient(135deg, #e20074 0%, #6c1a8c 100%)'
    },
    {
      title: 'French Riviera Travel',
      description: "Premier online travel platform for the French Riviera—curated guides, destination experiences, and booking resources for your perfect Mediterranean getaway along the Côte d'Azur.",
      image: reveriaImg,
      tags: ['Travel & Tourism', 'Web Platform'],
      link: 'https://frenchriviera.travel/',
      github: null,
      featured: false,
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)'
    },
    {
      title: 'Instant Custom Boxes',
      description: 'Leading online custom packaging platform to design, customize, and order printed boxes with instant pricing, fast turnaround, and free shipping—all from a seamless self-serve web experience.',
      image: instantBoxesImg,
      tags: ['Packaging & E-Commerce', 'Web App'],
      link: 'https://www.instantcustomboxes.com/',
      github: null,
      featured: true,
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ]

  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <div className="glow" style={{ top: '10%', right: '-300px', background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)' }} />
      
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A showcase of projects I've worked on
      </motion.p>

      <div className="projects-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '40px',
        marginTop: '60px',
      }}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -15, scale: 1.02 }}
            style={{
              padding: 0,
              overflow: 'hidden',
              position: 'relative',
              border: project.featured ? '2px solid var(--primary)' : '1px solid rgba(99, 102, 241, 0.1)',
            }}
          >
            {/* Project Image/Icon */}
            <div style={{
              height: '200px',
              background: project.gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '6rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.1)',
              }} />
              <div style={{ 
                position: 'relative', 
                zIndex: 1,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {typeof project.image === 'string' && (project.image.startsWith('/') || project.image.startsWith('http')) ? (
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
                ) : typeof project.image === 'string' ? (
                  <span style={{ fontSize: '6rem' }}>{project.image}</span>
                ) : (
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
                )}
              </div>
              {project.featured && (
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--white)',
                  zIndex: 2,
                }}>
                  ⭐ Featured
                </div>
              )}
            </div>

            <div className="project-content" style={{
              padding: '35px',
            }}>
              <h3 style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                marginBottom: '15px',
                color: 'var(--light)',
              }}>
                {project.title}
              </h3>

              <p style={{
                color: 'var(--gray)',
                lineHeight: 1.7,
                marginBottom: '25px',
                fontSize: '1rem',
              }}>
                {project.description}
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '30px',
              }}>
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '6px 14px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      color: 'var(--primary)',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(project.link || project.github) && (
                <div style={{
                  display: 'flex',
                  gap: '15px',
                }}>
                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        fontSize: '0.95rem',
                        padding: '12px 20px',
                      }}
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{
                        padding: '12px 20px',
                      }}
                    >
                      <FiGithub />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{
          textAlign: 'center',
          marginTop: '60px',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <a href="#" className="btn btn-outline" style={{
          padding: '15px 40px',
          fontSize: '1.1rem',
        }}>
          View All Projects <FiArrowRight />
        </a>
      </motion.div>
    </section>
  )
}

export default Projects

