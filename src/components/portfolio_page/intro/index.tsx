import React, { useContext } from 'react'

import DarkModeContext from 'dark_mode_context'
import BadgeButton from 'components/badge_button'
import TypewriterText from 'components/typewriter_text'
import useIsMobile from 'hooks/use_is_mobile'

const Intro = (): React.ReactElement | null => {
  const { darkMode } = useContext(DarkModeContext)
  const isMobile = useIsMobile()
  if (isMobile === null) return null
  const underlineClassName = darkMode ? 'fancy-underline dark' : 'fancy-underline'

  return (
    <div className='portfolio-intro' data-aos='fade-up'>
      <h3><em><TypewriterText text="Hello, I&apos;m Adalida&mdash;" /></em></h3>
      <h5>
        A driven product designer who brings a <u className={underlineClassName}>philosopher&apos;s reasoning</u>,
        a <u className={underlineClassName}>writer&apos;s clarity</u>, and a{' '}
        <u className={underlineClassName}>designer&apos;s eye</u> for detail.
      </h5>
      <h5>
        I collaborate with engineers to build thoughtful, user-centered products that transform complex challenges into clear,
        actionable solutions&mdash;with a dash of rubber duck debugging for good measure.
      </h5>
      <div className='based-in-san-francisco subtitle-1'>
        <div className='green-dot'></div>
        <em>Based in San Francisco, California and open to work.</em>
      </div>
      <BadgeButton to='https://www.linkedin.com/in/adalidabaca/'>VIEW LINKEDIN</BadgeButton>
    </div>
  )
}

export default Intro
