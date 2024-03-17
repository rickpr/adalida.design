import React, { useEffect, useRef, useState } from 'react'

import AnimatedPath, { type Animate } from 'components/animated_path'

const startPath = `
M12 3 a7.5 7.5 0 0 0 7.92 12.446
M19.92 15.446 a9 9 0 1 1 -8.313 -12.454
M17 4.5 v0.5
M18.5 6 h-0.5
M17 7.5 v-0.5
M15.5 6 h0.5
M19 11 l1 0
M20 10 l0 1
M20 11 l1 0
M20 11 l0 1
`

const endPath = `
M15 15 a4 4 0 0 0 -6 -6
M15 15 a4 4 0 1 1 -6 -6
M12 3 v1
M3 12 h1
M12 20 v1
M20 12 h1
M5.6 5.6 l.7 .7
M18.4 5.6 l-.7 .7
M17.7 17.7 l.7 .7
M6.3 17.7 l-.7 .7
`

const Icon = ({ darkMode }: { darkMode: boolean }): JSX.Element => {
  const [dur, setDur] = useState('1ms')
  const animate = useRef<Animate>(null)

  const animateForward = (): void => { animate.current?.animateForward() }
  const animateReverse = (): void => { animate.current?.animateReverse() }

  useEffect(() => { darkMode ? animateReverse() : animateForward() }, [darkMode])
  // This prevents the animation from running on page load
  useEffect(() => { setTimeout(() => { setDur('250ms') }, 1000) }, [])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <AnimatedPath startPath={startPath} endPath={endPath} dur={dur} ref={animate} />
    </svg>
  )
}

export default Icon
