import React from 'react'

import SectionHeading from '../section_heading'
import Intro from './intro'
import Container from './container'
import Thanks from './thanks'

const PortfolioPage = (): JSX.Element => {
  return (
    <>
      <Intro />
      <div data-aos='fade-up'><SectionHeading title='Works Selected' /></div>
      <Container />
      <Thanks />
    </>
  )
}

export default PortfolioPage
