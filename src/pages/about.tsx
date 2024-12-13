import React from 'react'

import MainPage from 'components'
import SEO from 'components/seo'
import Profile from 'components/seo/profile'

const About = (): JSX.Element => {
  return <MainPage />
}

export const Head = (): JSX.Element => (
  <>
    <SEO title='About' />
    <Profile />
  </>
)

export default About
