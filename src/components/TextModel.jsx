import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function TextModel({ position = [0, 0.8, 0], scale = 0.008 }) {
  const { scene } = useGLTF('/Text1.glb')
  const ref = useRef()
  const [lastInteraction, setLastInteraction] = useState(Date.now())

  const defaultRotation = [0, 0, 0]

  const handleInteraction = () => {
    setLastInteraction(Date.now())
  }

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: 'hsla(213, 100%, 91%)',
          roughness: 0.5,
          metalness: 0.3,
          transparent: true,
          opacity: 1,
          emissive: new THREE.Color('220, 100%, 60%, 0.8'), // Light-emitting color (cyan glow)
          emissiveIntensity: 1.5,
        })
      }
    })
  }, [scene])

  useFrame(({ clock }) => {
    const now = Date.now()
    const elapsed = (now - lastInteraction) / 1000
    const pulse = (Math.sin(clock.getElapsedTime() * 2) + 1) / 2 // 0 to 1

    scene.traverse((child) => {
      if (child.isMesh && child.material.emissiveIntensity !== undefined) {
        child.material.emissiveIntensity = 0.5 + pulse // Pulsing effect
      }
    })

    if (ref.current) {
      // Hover animation
      ref.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1

      // Smooth rotation reset after 3s of inactivity
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
