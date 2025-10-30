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
  **I am** <strong>Alvin K Jobi</strong>, a B.Tech Electronics and Communication Engineering graduate (2025 pass out). **I am** passionate about building digital experiences that are both visually appealing and technically sound.
  <br /><br />
  **I am** currently a **Systems Engineer Trainee at Infosys**.
  <br /><br />
  As a tech enthusiast and freelance **Frontend Developer**, **I** specialize in crafting modern user interfaces using **React**. **I** also develop full-stack applications with the **MERN stack** (MongoDB, Express, React, Node.js).
  <br /><br />
  **My** focus is on creativity, continuous learning, and pushing the boundaries of web development.
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
