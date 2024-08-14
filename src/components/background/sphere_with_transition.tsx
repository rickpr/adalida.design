import React, { useContext, useEffect, useMemo, useState } from 'react'

import DarkModeContext from 'dark_mode_context'
import Sphere from './sphere'

const minAnimationDurationSeconds = 5
const maxAnimationDurationSeconds = 15

const SphereWithTransition = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [oldDarkMode, setOldDarkMode] = useState(darkMode)

  const animationDurationSeconds = useMemo(
    () => Math.random() * (maxAnimationDurationSeconds - minAnimationDurationSeconds) + minAnimationDurationSeconds,
    []
  )
  const animationDelaySeconds = useMemo(
    () => -(Math.random() * animationDurationSeconds / 2),
    [animationDurationSeconds]
  )

  useEffect(() => {
    setIsTransitioning(true)
    const opacityTimeout = setTimeout(() => { setOpacity(1) }, 50)
    const useStateTimeout = setTimeout(() => {
      setOldDarkMode(darkMode)
      setOpacity(0)
      setIsTransitioning(false)
    }, 550)
    return () => {
      clearTimeout(opacityTimeout)
      clearTimeout(useStateTimeout)
    }
  }, [darkMode])

  return (
    <>
      <div className='old-sphere'>
        <Sphere
          darkMode={oldDarkMode}
          animationDurationSeconds={animationDurationSeconds}
          animationDelaySeconds={animationDelaySeconds}
        />
      </div>
      <div className='next-sphere' style={{ opacity, visibility: isTransitioning ? 'visible' : 'hidden' }}>
        <Sphere
          darkMode={darkMode}
          animationDurationSeconds={animationDurationSeconds}
          animationDelaySeconds={animationDelaySeconds}
        />
      </div>
    </>
  )
}

export default SphereWithTransition
