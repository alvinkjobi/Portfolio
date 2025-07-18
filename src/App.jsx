// src/App.jsx
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import { Suspense } from 'react'
import TextModel from './components/TextModel.jsx'
import ControlsWithReset from './components/ControlWithReset.jsx'
import Particles from './components/Particles.jsx'
import About from './components/About.jsx'
import NavBar from './components/NavBar.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'



export default function App() {
  return (
    <div className="main-wrapper">
      <NavBar />
      {/* Hero Section with Canvas */}
      <section id="hero" className="hero-section">
        <div style={{ width: '100%', position: 'absolute', zIndex: 0 }}>
          <Particles
            particleColors={['#ffffff', '#f1f5f2ff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 2, 5]} intensity={1.5} />
          <spotLight
            position={[0, 5, 5]}
            angle={0.3}
            penumbra={1}
            intensity={1.5}
            color="#80c8ff"
            castShadow
          />
          <Suspense fallback={null}>
            
            <TextModel position={[0, 0.8, 0]} scale={0.01} />
            
            <Environment preset="sunset" />
            <ContactShadows position={[0, -1.2, 0]} opacity={0.5} scale={10} blur={2.5} />
          </Suspense>
          <ControlsWithReset />
        </Canvas>

        <div className="below-model-text">
          <p>Frontend Developer • BTech ECE Graduate</p>
          <span className="hero-subtext">
            I craft elegant, interactive experiences at the intersection of design and code.
          </span>
        </div>

        {/* Scroll Indicator that links to About */}
      
      </section>

      {/* About Section */}
      <About />
      {/* Projects Section */}
      <Projects />
      {/* Contact Section */}
      <Contact />
    </div>
  )
}
