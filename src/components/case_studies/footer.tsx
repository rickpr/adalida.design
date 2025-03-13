import { useLocation } from '@reach/router'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import React, { useContext } from 'react'

import BadgeButton from 'components/badge_button'
import Duck from 'components/duck'

import IconHeading from './icon_heading'

import Context from './context'

const studies = ['gaintain', 'phronesis', 'querque_candles']

const Footer = (): JSX.Element => {
  const { pathname } = useLocation()
  const color = useContext(Context)?.colors?.primary
  const currentIndex = studies.findIndex((study) => pathname.includes(study))
  const nextCaseStudy = studies[(currentIndex + 1) % studies.length]
  const to = `/case_studies/${nextCaseStudy}`

  return (
    <div data-aos='fade-up' className='pre-footer'>
      <div className='flex-center' style={{ gap: '1.125em' }}>
        <IconHeading icon={<Duck />} heading='Thanks for making it to the end! Read my next case study here:' />
      </div>
      <BadgeButton to={to} style={color !== undefined ? { background: color, color: '#F5F5F5' } : {}}>
        Read case study <IconArrowNarrowRight />
      </BadgeButton>
    </div>
  )
}

export default Footer
