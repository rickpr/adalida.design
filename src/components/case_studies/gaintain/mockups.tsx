import React from 'react'

import MockupsImage from 'images/gaintain/mockups.webp'

const Mockups = (): JSX.Element => (
  <div data-aos='fade-up' className='gaintain-mockups' style={{ backgroundImage: `url(${MockupsImage})` }} />
)

export default Mockups
