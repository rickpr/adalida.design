import React, { useContext, type CSSProperties } from 'react'

import DarkModeContext from 'dark_mode_context'

import SphereWithTransition from './sphere_with_transition'

const transform = (): string => {
  const rotate = Math.floor(Math.random() * 360)
  return `translate(-50%, -50%) rotate(${rotate}deg)`
}

const cornerSphereSize = '60dvmin'
const middleSphereSize = '20dvmin'
const smallSphereSize = '10dvmin'

const cornerSpheres: CSSProperties[] = [
  {
    height: cornerSphereSize,
    width: cornerSphereSize,
    left: 0,
    top: '-15dvmin',
    transform: transform()
  },
  {
    height: cornerSphereSize,
    width: cornerSphereSize,
    left: '100%',
    top: 0,
    transform: transform()
  },
  {
    height: cornerSphereSize,
    width: cornerSphereSize,
    left: '-10%',
    top: '100%',
    transform: transform()
  },
  {
    height: cornerSphereSize,
    width: cornerSphereSize,
    left: '100%',
    top: '115dvh',
    transform: transform()
  }
]

const middleSpheres: CSSProperties[] = [
  {
    height: middleSphereSize,
    width: middleSphereSize,
    left: '25%',
    top: '30%',
    transform: transform()
  },
  {
    height: middleSphereSize,
    width: middleSphereSize,
    left: '63%',
    top: '38%',
    transform: transform()
  },
  {
    height: middleSphereSize,
    width: middleSphereSize,
    left: '65%',
    top: '75%',
    transform: transform()
  }
]

const smallSpheres: CSSProperties[] = [
  {
    height: smallSphereSize,
    width: smallSphereSize,
    left: '31%',
    top: '48%',
    transform: transform()
  },
  {
    height: smallSphereSize,
    width: smallSphereSize,
    left: '48%',
    top: '51%',
    transform: transform()
  },
  {
    height: smallSphereSize,
    width: smallSphereSize,
    left: '40%',
    top: '65%',
    transform: transform()
  }
]

const spherePositions: CSSProperties[] = [...cornerSpheres, ...middleSpheres, ...smallSpheres]

const minAnimationDurationSeconds = 5
const maxAnimationDurationSeconds = 15


const animationDurations = spherePositions.map(() =>
  Math.random() * (maxAnimationDurationSeconds - minAnimationDurationSeconds) + minAnimationDurationSeconds
)
const animationDelays = animationDurations.map((animationDurationSeconds) =>
  -(Math.random() * animationDurationSeconds / 2)
)

const Spheres = (): JSX.Element[] => {
  const { darkMode } = useContext(DarkModeContext)
  return spherePositions.map((position, index) => (
    <div
      key={index}
      className={`background-sphere ${darkMode ? 'dark' : 'light'}`}
      style={{
        ...position,
        animationDuration: `${animationDurations[index]}s`,
        animationDelay: `${animationDelays[index]}s`
      }}>
      <SphereWithTransition />
    </div>
  ))
}

export default Spheres
