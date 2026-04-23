import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'

const Reviews = () => {
  const reviews = [
    {
      name: 'Tobias Grodge',
      role: 'CEO 360HR',
      location: 'Germany',
      initials: 'TG',
      rating: 5,
      review: 'Exceptional work! Affan delivered exactly what we needed and exceeded our expectations. The project was completed on time and the code quality was outstanding. Highly recommended for any React/Node.js project.',
      project: '360 HR website',
      color: '#2563eb',
    },
    {
      name: 'Muhammad Ali',
      role: 'Team Lead, Euphoria XR',
      location: 'Lahore, Pakistan',
      initials: 'MA',
      rating: 5,
      review: 'Working with Affan was an excellent experience. Very professional, responsive, and skilled. The dashboard he built is exactly what we envisioned and more. Will definitely work with him again.',
      project: 'Euphoria XR',
      projectLabel: 'Company',
      color: '#0369a1',
    },
    {
      name: 'Franklin V.',
      role: 'T-Mobile',
      location: 'Brooklyn, USA',
      initials: 'FV',
      rating: 5,
      review: 'Outstanding developer! Affan transformed our website into a modern, fast, and user-friendly platform. Our conversion rates increased significantly. His attention to detail is remarkable.',
      project: 'T-Mobile',
      projectLabel: 'Company',
      color: '#0f766e',
    },
  ]

  return (
    <section id="reviews" className="section" style={{ position: 'relative' }}>
      <div
        className="glow"
        style={{
          top: '50%',
          left: '-300px',
          transform: 'translateY(-50%)',
          background: 'radial-gradient(circle, rgba(var(--glow-rgb), 0.2) 0%, transparent 70%)',
        }}
      />

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Client Reviews
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
        What my clients say about working with me
      </motion.p>

      <div
        className="reviews-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '35px',
          marginTop: '60px',
        }}
      >
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.7 }}
            whileHover={{ y: -12, scale: 1.02 }}
            style={{
              padding: '36px',
              position: 'relative',
              borderTop: `3px solid ${review.color}`,
              overflow: 'hidden',
            }}
          >
            {/* Background glow */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${review.color}12 0%, transparent 70%)`,
                pointerEvents: 'none',
              }}
            />

            {/* Quote icon */}
            <motion.div
              style={{
                position: 'absolute',
                top: '20px',
                right: '24px',
                fontSize: '2.8rem',
                color: review.color,
                opacity: 0.15,
              }}
              whileHover={{ scale: 1.2, opacity: 0.25 }}
              transition={{ duration: 0.3 }}
            >
              <FaQuoteLeft />
            </motion.div>

            {/* Stars */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '22px', marginTop: '8px' }}>
              {[...Array(review.rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + i * 0.07 }}
                >
                  <FiStar
                    size={18}
                    style={{ fill: '#ca8a04', color: '#ca8a04', filter: 'drop-shadow(0 0 4px rgba(202, 138, 4, 0.35))' }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Review text */}
            <p style={{
              color: 'var(--gray)',
              lineHeight: 1.85,
              marginBottom: '28px',
              fontSize: '1rem',
              fontStyle: 'italic',
              position: 'relative',
              zIndex: 1,
            }}>
              "{review.review}"
            </p>

            {/* Project info */}
            <div style={{
              padding: '14px 18px',
              background: `${review.color}10`,
              borderRadius: '12px',
              marginBottom: '24px',
              border: `1px solid ${review.color}20`,
            }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--gray)', marginBottom: '4px' }}>
                {review.projectLabel || 'Project'}:
              </div>
              <div style={{ fontWeight: 700, color: review.color, fontSize: '0.95rem' }}>
                {review.project}
              </div>
            </div>

            {/* Client info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${review.color}, ${review.color}80)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  flexShrink: 0,
                  boxShadow: `0 6px 20px ${review.color}40`,
                }}
              >
                {review.initials}
              </motion.div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '4px' }}>
                  {review.name}
                </div>
                <div style={{ color: 'var(--gray)', fontSize: '0.88rem' }}>
                  {review.role}
                </div>
                <div style={{ color: 'var(--gray)', fontSize: '0.8rem', opacity: 0.7 }}>
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
