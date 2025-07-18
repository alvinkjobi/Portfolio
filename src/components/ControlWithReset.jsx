import { OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function ControlsWithReset() {
  const controlsRef = useRef()
  const { camera } = useThree()

  const defaultPosition = new THREE.Vector3(0, 0, 5)
  const defaultTarget = new THREE.Vector3(0, 0, 0)

  const [lastInteraction, setLastInteraction] = useState(Date.now())
  const [resetStart, setResetStart] = useState(null)

  const handleInteraction = () => {
    setLastInteraction(Date.now())
    setResetStart(null) // cancel any ongoing reset
  }

  useFrame(() => {
    const now = Date.now()
    const idleTime = (now - lastInteraction) / 150

    if (idleTime > 0.1 && !resetStart) {
      // Begin reset after 0.5s of no touch
      setResetStart(now)
    }

    if (resetStart && controlsRef.current) {
      const progress = Math.min((now - resetStart) / 1000, 1) // 5 seconds
      const ease = 1 - Math.pow(1 - progress, 1) // easeOutCubic

      // Lerp camera position and controls target
      camera.position.lerpVectors(camera.position, defaultPosition, ease)
      controlsRef.current.target.lerpVectors(controlsRef.current.target, defaultTarget, ease)

      controlsRef.current.update()

      if (progress === 1) {
        setResetStart(null) // reset done
      }
    }
  })

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      onStart={handleInteraction}
      onChange={handleInteraction}
      onEnd={handleInteraction}
    />
  )
}
