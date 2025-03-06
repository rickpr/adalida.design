import React from 'react'

import Background from './background'
import Intro from './intro'
import Writing from './writing'
import Thanks from './thanks'

const AboutPage = (): JSX.Element => {
  return (
    <div className='about-page'>
      <Intro />
      <Background />
      <Writing />
      <Thanks />
    </div>
  )
}

export default AboutPage
