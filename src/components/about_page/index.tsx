import React from 'react'

import Background from './background'
import Intro from './intro'
import Services from './services'
import Writing from './writing'
import Thanks from './thanks'

const AboutPage = (): JSX.Element => {
  return (
    <div className='about-page'>
      <Intro />
      <Services />
      <Background />
      <Writing />
      <Thanks />
    </div>
  )
}

export default AboutPage
