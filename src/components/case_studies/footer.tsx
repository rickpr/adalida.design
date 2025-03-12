import { useLocation } from '@reach/router'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import React, { useContext } from 'react'

import BadgeButton from 'components/badge_button'
import Duck from 'components/duck'

import Icon from './icon'

import Context from './context'

const Footer = (): JSX.Element => {
  const { pathname } = useLocation()
  const color = useContext(Context)?.color
  const to = pathname.includes('gaintain')
    ? '/case_studies/phronesis'
    : '/case_studies/gaintain'

  return (
    <div data-aos='fade-up' className='pre-footer'>
      <div className='flex-center' style={{ gap: '1.125em' }}>
        <Icon><Duck /></Icon>
        <h5 style={color !== undefined ? { color } : {}}>
          Thanks for making it the end! Read my next case study here:
        </h5>
      </div>
      <BadgeButton to={to} style={color !== undefined ? { backgroundColor: color, color: '#F5F5F5' } : {}}>
        Read case study <IconArrowNarrowRight />
      </BadgeButton>
    </div>
  )
}

export default Footer
