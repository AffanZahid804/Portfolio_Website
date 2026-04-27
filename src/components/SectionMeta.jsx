import { motion } from 'framer-motion'

/**
 * Editorial section header row used by every section.
 * Label slides in from left, divider line extends right.
 */
const SectionMeta = ({ label }) => (
  <div className="section-meta" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '56px', overflow: 'hidden' }}>
    <motion.span
      className="section-meta-tag"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
    >
      {label}
    </motion.span>
    <motion.div
      className="section-meta-line"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.85, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
      style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)', transformOrigin: 'left' }}
    />
  </div>
)

export default SectionMeta
