import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'
import { FaReact, FaNode } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Vumi Mobile App',
      description: 'A feature-rich mobile application built with React Native, designed for performance, scalability, and user engagement. The app includes intuitive swipe functionality, real-time chat powered by Socket.io, and advanced event management modules with location-based features. It supports social authentication via Google, Apple, and LinkedIn, and delivers push notifications through Firebase Cloud Messaging (FCM). Additionally, the application integrates a dynamic Reel feature for sharing short-form video content and interactive Event modules that allow users to create, discover, and participate in nearby events seamlessly.',
      image: '/images/download.jpeg',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Firebase', 'OAuth', 'JWT'],
      link: null,
      github: null,
      featured: true,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'AI Chatbot & Voice Calling Bot',
      description: 'An AI-powered chatbot built with Python and Django. Implements Retrieval-Augmented Generation (RAG) and Vector DB for context-aware responses. Includes voice calling functionality with speech-to-text and text-to-speech integration. Enables natural, real-time AI-driven conversations with users. Deployed on AWS for scalability, reliability, and high performance. Worked with Worktual to develop conversational AI solutions for customer engagement and automation.',
      image: '/images/bot.jpeg',
      tags: ['Python', 'Django', 'AWS', 'RAG', 'Vector DB', 'Speech-to-Text', 'TTS'],
      link: 'https://worktual.in/conversational-ai/?utm_term=conversational%20ai%20agent&utm_campaign=AI+CHATBOT+/INDIA&utm_source=adwords&utm_medium=ppc&hsa_acc=8932543227&hsa_cam=23045763545&hsa_grp=182729879701&hsa_ad=775405019699&hsa_src=g&hsa_tgt=kwd-2455019491807&hsa_kw=conversational%20ai%20agent&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=23045763545&gbraid=0AAAAA-kBKAVxr3s0x1r0hM0ORbKotMh4P&gclid=Cj0KCQjw35bIBhDqARIsAGjd-cbTkvv1IWAIXNuBjYD0sOnm0jCEu2xsVerCNJe01p9fmZTQDLH8rJEaAg5dEALw_wcB',
      github: '#',
      featured: true,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: '360HR Job Posting Website',
      description: 'A scalable job posting platform designed with a fully responsive UI and efficient state management for smooth performance across devices. Built with a Node.js backend featuring RESTful APIs that handle user management, authentication, and complex workflow automation. The React-based frontend provides a fast, intuitive, and modern user experience optimized for job seekers and employers alike. Includes real-time updates for job listings, applications, and notifications to enhance engagement. Implements role-based access control (RBAC) ensuring secure and structured operations. Integrated with cloud-based storage and CI/CD pipelines for continuous deployment and scalability. Engineered for high availability, data consistency, and seamless integration with third-party services.',
      image: '/images/360HR.png',
      tags: ['React', 'Node.js', 'RESTful APIs', 'JavaScript', 'TypeScript', 'MongoDB'],
      link: 'https://360hr.cloud/',
      github: '#',
      featured: false,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Restaurant E-Commerce App',
      description: 'A full-stack restaurant e-commerce application built with a modern JavaScript stack. On the frontend: a responsive, user-friendly interface developed with React Native (client folder) enabling seamless browsing, ordering and checkout of menu items. On the backend: a robust server application (server folder) providing RESTful APIs for user authentication, product management, order processing, and payments. Users can sign up/login, browse the restaurant menu, add items to their cart, place orders, and view order history in real time. Administrators have access to manage menu items, update availability, track incoming orders, and monitor sales. Flexible architecture separates concerns into client and server modules allowing for easy scalability, maintenance, and future feature expansion (e.g., mobile app support, third-party integrations).',
      image: '/images/restaurant-app.png',
      tags: ['React Native', 'Node.js', 'RESTful APIs', 'JavaScript', 'MongoDB'],
      link: '#',
      github: 'https://github.com/AffanZahid804/Restaurant-E-Commerce-App',
      featured: false,
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Campus Fix',
      description: 'A state-of-the-art mobile application built with React Native to streamline maintenance and support across campus environments. The platform allows students and staff to log issues, browse status updates, and communicate in real time with service teams. Behind the scenes, it integrates a Node.js backend with RESTful APIs to handle user authentication, issue tracking, role-based access and workflow automation. The user experience is polished and intuitive, featuring responsive design, push notifications and an optimized interface for both Android and iOS. The architecture supports scalable deployment and separation of concerns, making it maintainable and extensible for future enhancements. With Campus Fix, institutions gain a centralized, efficient solution to monitor, prioritize and resolve facilities issues with transparency and speed.',
      image: '/images/campusfix.jpeg',
      tags: ['React Native', 'Firebase', 'JavaScript'],
      link: '#',
      github: 'https://github.com/AffanZahid804/Campus-Fix',
      featured: false,
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      title: 'AppointmentWebApp',
      description: 'A full-stack web application built to streamline booking, managing and tracking appointments. The system includes both frontend and backend modules, built with modern technologies to ensure responsiveness, real-time updates, and maintainable architecture. The frontend is structured as a React.js web app for clients/users to view available appointment slots, schedule new ones and monitor their status. The backend is built with Node.js and Express providing RESTful APIs, data persistence via MongoDB, and core business logic for appointment workflows. Key features include: appointment creation, slot management, user authentication, and real-time status updates. The architecture was designed for scalability, clean API design and modular code so workflows like scheduling, editing and tracking appointments can be extended and maintained easily. This project demonstrates end-to-end full-stack development: database design, REST API creation, frontend UI/UX, and deployment readiness.',
      image: '/images/appointment.jpg',
      tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'JavaScript'],
      link: '#',
      github: 'https://github.com/AffanZahid804/AppointmentWebApp',
      featured: true,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
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
        A showcase of my recent work and projects I've built
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

            <div style={{
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

