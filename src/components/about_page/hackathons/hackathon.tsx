import { IconArrowNarrowRight } from '@tabler/icons-react'
import React from 'react'

import UniversalLink from 'components/universal_link'
import type { Hackathon as HackathonType } from 'hackathons'

const Hackathon = ({ hackathon }: { hackathon: HackathonType }): JSX.Element => {
  return (
    <div className='glass card hackathon'>
      <div className='info-row'>
        <div className='caption-1'>{hackathon.location}</div>
        <div className='caption-1'>{hackathon.year}</div>
      </div>
      <div className='subtitle-1'>{hackathon.name}</div>
      <div className='info-row caption-1'>{hackathon.sponsor}</div>
      <div className='caption-1'>{hackathon.description}</div>
      <UniversalLink to={hackathon.link} className='btn animated-link'>
        VIEW PRESENTATION <IconArrowNarrowRight />
      </UniversalLink>
    </div>
  )
}

export default Hackathon
