// src/components/Projects.jsx
import './Projects.css'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react' // install via: npm install lucide-react

export default function Projects() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef
    if (current) {
      const scrollAmount = 300
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="scroll-container">
        <button className="scroll-arrow left" onClick={() => scroll('left')}>
          <ChevronLeft size={32} />
        </button>

        <div className="projects-grid-wrapper" ref={scrollRef}>
          <motion.div 
            className="project-card"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(114, 172, 244, 0.4)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.06 }}
          >
            <div className="project-header">
              <h3>AFA Fan Page</h3>
              <a 
                href="https://github.com/alvinkjobi/Sports-Fan-Page.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-icon"
              >
                <img src="/git.svg" alt="GitHub" />
              </a>
            </div>
            <p className="project-description">
              A full-stack fan website dedicated to the Argentina Football Association (AFA), built using the MERN stack. Features include dynamic news updates, trophy gallery, player highlights, and a dual login system for users and admins. Fans can browse merchandise, book match tickets, and engage with official content.
            </p>
            <div className="tech-stack">
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">Express</span>
              <span className="tech-badge">React</span>
              <span className="tech-badge">Node.js</span>
            </div>
          </motion.div>

          <motion.div 
            className="project-card"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(114, 172, 244, 0.4)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.06 }}
          >
            <div className="project-header">
              <h3>Football Analysis Project</h3>
              <a 
                href="https://github.com/alvinkjobi/Football-Analysis-Project.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-icon"
              >
                <img src="/git.svg" alt="GitHub" />
              </a>
            </div>
            <p className="project-description">
              A football video analysis tool that uses YOLO for real-time player detection on the field. Built using Python and integrated with a MERN dashboard for viewing and managing analysis results.
            </p>
            <div className="tech-stack">
              <span className="tech-badge">Python</span>
              <span className="tech-badge">YOLOv8</span>
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">Express</span>
              <span className="tech-badge">React</span>
              <span className="tech-badge">Node.js</span>
            </div>
          </motion.div>

          <motion.div 
            className="project-card"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(114, 172, 244, 0.4)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.06 }}
          >
            <div className="project-header">
              <h3>SmartFilterBot</h3>
              <a 
                href="https://github.com/alvinkjobi/Sample-Excel-Filtering.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-icon"
              >
                <img src="/git.svg" alt="GitHub" />
              </a>
            </div>
            <p className="project-description">
              An intelligent Excel-based assistant to detect high-risk journal entries using 7 smart filters with Tkinter UI.
            </p>
            <div className="tech-stack">
              <span className="tech-badge">Python</span>

              <span className="tech-badge">Excel</span>
            </div>
          </motion.div>

          <motion.div 
            className="project-card"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(114, 172, 244, 0.4)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.06 }}
          >
            <div className="project-header">
              <h3>Tic Tac Toe Game</h3>
              <a 
                href="https://github.com/alvinkjobi/12th-Project.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-icon"
              >
                <img src="/git.svg" alt="GitHub" />
              </a>
            </div>
            <p className="project-description">
              A classic Tic Tac Toe game built using Python's Tkinter library with MySQL integration to store player scores. Features a user-friendly GUI and persistent game data.
            </p>
            <div className="tech-stack">
              <span className="tech-badge">Python</span>

              <span className="tech-badge">MySQL</span>
            </div>
          </motion.div>

        </div>

        <button className="scroll-arrow right" onClick={() => scroll('right')}>
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  )
}
