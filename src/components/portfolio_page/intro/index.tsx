import React, { useContext } from 'react'

import DarkModeContext from 'dark_mode_context'
import useIsMobile from 'hooks/use_is_mobile'

import Duck from './duck'

const Intro = (): React.ReactElement | null => {
  const isMobile = useIsMobile()
  const { darkMode } = useContext(DarkModeContext)
  if (isMobile === null) return null

  return (
    <div className='intro' data-aos='fade-up'>
      <div className='portfolio-intro-duck'><Duck /></div>
      <div className='intro-text'>
        <div className='heading'>
          Hi, I&apos;m Adalida - I&apos;m a Product Designer based in San Francisco and open to work.
        </div>
        <div>
          With a knack for reasoning from my English-Philosophy background, I solve complex problems and create user-friendly
          products. I enjoy collaborating with engineers to bring innovative ideas to life through clear communication and a bit of quacking.
        </div>
        <a className={`badge big-badge badge-danger ${darkMode && 'dark'}`} href='https://linkedin.com/in/adalidabaca' target='_blank' rel='noreferrer'>
          Find Me on LinkedIn
        </a>
      </div>
    </div>
  )
}

export default Intro
