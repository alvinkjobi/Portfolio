import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function TextModel({ position = [0, 0.8, 0] }) {
  const { scene } = useGLTF('/Text1.glb')
  const ref = useRef()
  const [lastInteraction, setLastInteraction] = useState(Date.now())
  const [scale, setScale] = useState(0.01) // Default scale

  const defaultRotation = [0, 0, 0]

  const handleInteraction = () => {
    setLastInteraction(Date.now())
  }

  // 🔁 Responsive scale based on screen width
  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth
      if (width < 500) {
        setScale(0.001) // Smaller for mobile
      } else if (width < 768) {
        setScale(0.005)
      } else {
        setScale(0.01) // Default desktop scale
      }
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: 'hsla(213, 100%, 91%)',
          roughness: 0.5,
          metalness: 0.3,
          transparent: true,
          opacity: 1,
          emissive: new THREE.Color('hsl(220, 100%, 60%)'),
          emissiveIntensity: 1.5,
        })
      }
    })
  }, [scene])

  useFrame(({ clock }) => {
    const now = Date.now()
    const elapsed = (now - lastInteraction) / 1000
    const pulse = (Math.sin(clock.getElapsedTime() * 2) + 1) / 2

    scene.traverse((child) => {
      if (child.isMesh && child.material.emissiveIntensity !== undefined) {
        child.material.emissiveIntensity = 0.5 + pulse
      }
    })

    if (ref.current) {
      ref.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1

      if (elapsed > 3) {
        ref.current.rotation.x += (defaultRotation[0] - ref.current.rotation.x) * 0.05
        ref.current.rotation.y += (defaultRotation[1] - ref.current.rotation.y) * 0.05
        ref.current.rotation.z += (defaultRotation[2] - ref.current.rotation.z) * 0.05
      }
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={scale}
      position={position}
      onPointerDown={handleInteraction}
      onPointerMove={handleInteraction}
      onPointerUp={handleInteraction}
    />
  )
}

export default TextModel
