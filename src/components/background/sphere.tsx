import React from 'react'

interface Props {
  darkMode: boolean
  animationDurationSeconds: number
  animationDelaySeconds: number
}

const Sphere = ({ darkMode, animationDurationSeconds, animationDelaySeconds }: Props): JSX.Element => {
  const animationDuration = `${animationDurationSeconds}s`
  const animationDelay = `${animationDelaySeconds}s`
  return <div className={`sphere sphere-${darkMode ? 'dark' : 'light'}`} style={{ animationDuration, animationDelay }} />
}

export default Sphere
