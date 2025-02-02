import React from 'react'

import Duck from 'components/duck'
import LetsChat from 'components/lets_chat'
import useIsMobile from 'hooks/use_is_mobile'

const Intro = (): React.ReactElement | null => {
  const isMobile = useIsMobile()
  if (isMobile === null) return null

  return (
    <div className='portfolio-intro' data-aos='fade-up'>
      <div className='portfolio-intro-duck'><Duck /></div>
      <h5>
        Hello - I’m Adalida a product designer with an interdisciplinary background offering fresh perspective and
        creative problem-solving.
      </h5>
      <h5>
        I collaborate closely with engineers to build thoughtful, user-centered products,
        tackling challenges with clarity—and a bit of quacking for good measure.
      </h5>
      <div className='subtitle-1'>Based in San Francisco, California and open to work.</div>
      <LetsChat />
    </div>
  )
}

export default Intro
