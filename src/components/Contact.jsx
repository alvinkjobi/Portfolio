// src/components/Contact.jsx
import './Contact.css'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="contact-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Feel free to reach out for collaborations, freelance opportunities, or just to say hi!
      </motion.p>

      <motion.div
        className="contact-links"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <a href="mailto:alvinkjobi@gmail.com" className="icon-link" aria-label="Email">
          <img src="/mail.svg" alt="Email" />
        </a>

        <a
          href="https://www.linkedin.com/in/alvin-k-jobi-ba4934235"
          target="_blank"
          rel="noreferrer"
          className="icon-link"
          aria-label="LinkedIn"
        >
          <img src="/linkedin.svg" alt="LinkedIn" />
        </a>

        <a
          href="https://github.com/alvinkjobi"
          target="_blank"
          rel="noreferrer"
          className="icon-link"
          aria-label="GitHub"
        >
          <img src="/git.svg" alt="GitHub" />
        </a>

        <a
          href="https://instagram.com/alvin_k_jobi"
          target="_blank"
          rel="noreferrer"
          className="icon-link"
          aria-label="Instagram"
        >
          <img src="/instagram.svg" alt="Instagram" />
        </a>
      </motion.div>
    </section>
  )
}
