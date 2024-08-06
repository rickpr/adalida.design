import React from 'react'

import useIsMobile from 'hooks/use_is_mobile'

import Duck from './duck'

const Intro = (): React.ReactElement | null => {
  const isMobile = useIsMobile()
  if (isMobile === null) return null

  return (
    <div className='portfolio-intro' data-aos='fade-up'>
      <div className='portfolio-intro-duck'><Duck /></div>
      <div className='portfolio-intro-hi'>
        <div className='hi'>
          Hi, I&apos;m Adalida - I&apos;m a product designer based in San Francisco and open to work.
        </div>
        <div className='intro'>
          With a knack for reasoning from my english-philosophy background, I solve complex problems and create user-friendly
          products. I enjoy collaborating with engineers to bring innovative ideas to life through clear communication and a bit of quacking.
        </div>
        <a className='badge' href='https://linkedin.com/in/adalidabaca' target='_blank' rel='noreferrer'>
          Find Me on LinkedIn
        </a>
      </div>
    </div>
  )
}

export default Intro
