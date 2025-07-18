// src/components/About.jsx
import './About.css'
import { motion } from 'framer-motion'
/*let image = null
try {
  image = require('../assets/mongo_input.jpg')
} catch (e) {
  console.warn("Image not found, skipping image display.")
}*/

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <div className="about-content-wrapper">
        {/* Animated Text sliding left */}
        <motion.div
          className="about-text"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p>
  I'm <strong>Alvin K Jobi</strong>, a B.Tech Electronics and Communication Engineering graduate (2025 pass out) with a passion for building visually compelling and technically refined digital experiences.
  <br /><br />
  A tech enthusiast and freelance <strong>Frontend Developer</strong>, I specialize in crafting modern interfaces using <strong>React</strong> and immersive 3D web experiences with <strong>React Three Fiber</strong>. I also develop full-stack applications using the <strong>MERN stack</strong>.
  <br /><br />
  I thrive on creativity, continuous learning, and pushing the boundaries of what’s possible on the web.
</p>

        </motion.div>

      {/* 
        <motion.div
          className="about-image"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img src={image} alt="Alvin K Jobi" /> 
        </motion.div>*/}
      </div>
    </section>
  )
}
