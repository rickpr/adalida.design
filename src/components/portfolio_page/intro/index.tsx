import React from 'react'

import useIsMobile from 'hooks/use_is_mobile'
import Duck from 'components/duck'
import LetsChat from 'components/lets_chat'

const Intro = (): React.ReactElement | null => {
  const isMobile = useIsMobile()
  if (isMobile === null) return null

  return (
    <div className='portfolio-intro' data-aos='fade-up'>
      <div className='portfolio-intro-duck'><Duck /></div>
      <h1 className='no-margin'>Hi, I’m Adalida - I’m a Product Designer with a knack for strategic reasoning.</h1>
      <div>
        My English - Philosophy background contributes to how I solve complex problems and create user-friendly products.
        With a bit of quacking, I collaborate with engineers to bring innovative ideas to life.
      </div>
      <div>Based in San Francisco, California and open to work.</div>
      <LetsChat />
    </div>
  )
}

export default Intro
