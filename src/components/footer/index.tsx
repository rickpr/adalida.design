import { IconMailFilled } from '@tabler/icons-react'
import React from 'react'

import BadgeButton from 'components/badge_button'
import Duck from 'components/duck'
import FileQuery from 'queries/file'

const Footer = (): JSX.Element => (
  <div className='footer'>
    <div className='footer-row'>
      <div className='footer-column'>
        <div className='footer-logo'>
          <Duck />
          <h6>ADALIDA.DESIGN</h6>
        </div>
        <div className='footer-links'>
          <a href='https://www.linkedin.com/in/adalidabaca/'>LinkedIn</a>
          <a href='https://dribbble.com/adalida-baca'>Dribbble</a>
          <a href='https://adalida.notion.site/A-Heavenly-Read-dfe9351a7e204898a1451de826b3e812'>Blog</a>
          <a href={FileQuery('resume.pdf').publicURL} target='_blank' rel='noreferrer'>Resume</a>
        </div>
      </div>
      <div className='footer-column'>
        <h6>Let’s chat?</h6>
        <BadgeButton to='mailto:hi@adalida.design'>
          <IconMailFilled height='1em' width='1em' /> EMAIL ADI
        </BadgeButton>
      </div>
    </div>
    <div className='footer-row'>
      <hr />
    </div>
    <div className='footer-row subtitle-2'>
      <div className='footer-column'>© 2025</div>
      <div className='footer-column'>Made with lots of coffee and green chile!</div>
    </div>
  </div>
)

export default Footer
