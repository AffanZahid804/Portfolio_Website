import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'

const Reviews = () => {
  const reviews = [
    {
      name: 'Tobias Grodge',
      role: 'CEO 360HR',
      location: 'Germany',
      rating: 5,
      review: 'Exceptional work! Affan delivered exactly what we needed and exceeded our expectations. The project was completed on time and the code quality was outstanding. Highly recommended for any React/Node.js project.',
      project: '360 HR website',
      platform: 'upwork',
      verified: true
    },
    {
      name: 'Muhammad Ali',
      role: 'Team Lead, Euphoria XR',
      location: 'Lahore, Pakistan',
      rating: 5,
      review: 'Working with Affan was an excellent experience. Very professional, responsive, and skilled. The dashboard he built is exactly what we envisioned and more. Will definitely work with him again on future projects.',
      project: 'Euphoria XR',
      projectLabel: 'Company',
      platform: 'upwork',
      verified: true
    },
    {
      name: 'Franklin V.',
      role: 'T-Mobile',
      location: 'Brooklyn, USA',
      rating: 5,
      review: 'Outstanding developer! Affan transformed our website into a modern, fast, and user-friendly platform. Our conversion rates increased significantly. His attention to detail is remarkable.',
      project: 'T-Mobile',
      projectLabel: 'Company',
      platform: 'upwork',
      verified: true
    }
  ]

  return (
    <section id="reviews" className="section" style={{ position: 'relative' }}>
      <div className="glow" style={{ top: '50%', left: '-300px', transform: 'translateY(-50%)', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)' }} />
      
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Client Reviews
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        What my clients say about working with me
      </motion.p>

      <div className="reviews-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '35px',
        marginTop: '60px',
      }}>
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            style={{
              padding: '35px',
              position: 'relative',
            }}
          >
            {/* Quote Icon */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              fontSize: '3rem',
              opacity: 0.1,
              color: 'var(--primary)',
            }}>
              <FaQuoteLeft />
            </div>


            {/* Rating */}
            <div style={{
              display: 'flex',
              gap: '5px',
              marginBottom: '25px',
              marginTop: '40px',
            }}>
              {[...Array(review.rating)].map((_, i) => (
                <FiStar
                  key={i}
                  size={20}
                  style={{
                    fill: '#fbbf24',
                    color: '#fbbf24',
                  }}
                />
              ))}
            </div>

            {/* Review Text */}
            <p style={{
              color: 'var(--gray)',
              lineHeight: 1.8,
              marginBottom: '30px',
              fontSize: '1.05rem',
              fontStyle: 'italic',
              position: 'relative',
              zIndex: 1,
            }}>
              "{review.review}"
            </p>

            {/* Project Info */}
            <div style={{
              padding: '15px',
              background: 'rgba(99, 102, 241, 0.05)',
              borderRadius: '10px',
              marginBottom: '25px',
              border: '1px solid rgba(99, 102, 241, 0.1)',
            }}>
              <div style={{
                fontSize: '0.85rem',
                color: 'var(--gray)',
                marginBottom: '5px',
              }}>
                {review.projectLabel || 'Project'}:
              </div>
              <div style={{
                fontWeight: 600,
                color: 'var(--primary)',
              }}>
                {review.project}
              </div>
            </div>

            {/* Client Info */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
            }}>
              <div style={{
                flex: 1,
              }}>
                <div style={{
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  marginBottom: '5px',
                  color: 'var(--light)',
                }}>
                  {review.name}
                </div>
                <div style={{
                  color: 'var(--gray)',
                  fontSize: '0.95rem',
                  marginBottom: '3px',
                }}>
                  {review.role}
                </div>
                <div style={{
                  color: 'var(--gray)',
                  fontSize: '0.85rem',
                  opacity: 0.7,
                }}>
                  {review.location}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Reviews

