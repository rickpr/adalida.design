import React from 'react'

import LetsChat from 'components/lets_chat'
import useIsMobile from 'hooks/use_is_mobile'

const Intro = (): React.ReactElement | null => {
  const isMobile = useIsMobile()
  if (isMobile === null) return null

  return (
    <div className='portfolio-intro' data-aos='fade-up'>
      <h3><em>Hello, I&apos;m Adalida&mdash;</em></h3>
      <h5>
        A driven product designer who brings a philosopher&apos;s reasoning, a writer&apos;s clarity, and a
        designer&apos;s eye for detail.
      </h5>
      <h5>
        I collaborate with engineers to build thoughtful, user-centered products that transform complex challenges into clear,
        actionable solutions&mdash;with a dash of rubber duck debugging for good measure.
      </h5>
      <div className='based-in-san-francisco subtitle-1'>
        <div className='green-dot'></div>
        <em>Based in San Francisco, California and open to work.</em>
      </div>
      <LetsChat />
    </div>
  )
}

export default Intro
