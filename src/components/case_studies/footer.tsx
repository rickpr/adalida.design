import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import React from 'react'

const Footer = (): JSX.Element => {
  const { pathname } = useLocation()
  const to = pathname.includes('gaintain')
    ? '/case_studies/phronesis'
    : '/case_studies/gaintain'

  return (
    <div data-aos='fade-up' className='case-study-footer'>
      <div className='wave'>👋</div>
      <div className='big thanks'>
        Thanks for making it the end! Read my next case study here:
        <Link className='button' to={to}>Read next case study</Link>
      </div>
    </div>
  )
}

export default Footer
