import React, { useEffect, useRef, useState } from 'react'

const IntroVideos = ({ videos }: { videos: [string, string] }): JSX.Element => {
  const [intro, loop] = videos
  const [looping, setLooping] = useState(false)
  const introRef = useRef<HTMLVideoElement>(null)
  const loopRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const introVideo = introRef.current
    const loopVideo = loopRef.current
    let timeout: NodeJS.Timeout | null = null
    const eventListener = (): void => {
      void loopVideo?.play()
      introVideo?.style.setProperty('opacity', '0')
      timeout = setTimeout(() => { setLooping(true) }, 500)
    }

    if (introVideo !== null && loopVideo !== null) {
      introVideo.addEventListener('ended', eventListener)
    }

    return () => {
      if (introVideo !== null && loopVideo !== null) {
        introVideo.removeEventListener('ended', eventListener)
      }
      if (timeout !== null) clearTimeout(timeout)
    }
  }, [introRef, loopRef])

  return (
    <div className='intro-videos'>
      <video src={loop} loop muted playsInline className='absolute' ref={loopRef} />
      {!looping && <video src={intro} autoPlay muted playsInline className='absolute' ref={introRef} />}
    </div>
  )
}

export default IntroVideos
