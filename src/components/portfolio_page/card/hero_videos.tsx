import React, { useEffect, useRef, useState } from 'react'

const HeroVideos = ({ videos }: { videos: [string, string] }): JSX.Element => {
  const [intro, loop] = videos
  const [looping, setLooping] = useState(false)
  const introRef = useRef<HTMLVideoElement>(null)
  const loopRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const introVideo = introRef.current
    const loopVideo = loopRef.current
    const eventListener = (): void => {
      setLooping(true)
      void loopVideo?.play()
    }

    if (introVideo !== null && loopVideo !== null) {
      introVideo.addEventListener('ended', eventListener)
    }

    return () => {
      if (introVideo !== null && loopVideo !== null) {
        introVideo.removeEventListener('ended', eventListener)
      }
    }
  }, [introRef, loopRef])

  return (
    <div className='portfolio-hero-image'>
      <video src={loop} loop muted playsInline width='100%' className='absolute' ref={loopRef} />
      {!looping && <video src={intro} autoPlay muted playsInline width='100%' className='absolute' ref={introRef} />}
    </div>
  )
}

export default HeroVideos
