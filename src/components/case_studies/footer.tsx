import { useLocation } from '@reach/router'
import React from 'react'

import BadgeButton from 'components/badge_button'

const Footer = (): JSX.Element => {
  const { pathname } = useLocation()
  const to = pathname.includes('gaintain')
    ? '/case_studies/phronesis'
    : '/case_studies/gaintain'

  return (
    <div data-aos='fade-up' className='pre-footer'>
      <h5>👋 Thanks for making it the end! Read my next case study here:</h5>
      <BadgeButton to={to}>Read next case study</BadgeButton>
    </div>
  )
}

export default Footer
