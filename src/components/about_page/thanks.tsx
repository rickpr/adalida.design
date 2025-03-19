import React from 'react'

import Duck from 'components/duck'

const Thanks = (): JSX.Element =>
  <h5 className='pre-footer' data-aos='fade-up' data-aos-offset='0'>
    <div className='flex-center' style={{ gap: '1em' }}>
      <div className='glass case-study-icon'><Duck /></div>
      <div style={{ opacity: 0.75 }}>Thanks for visiting!</div>
    </div>
  </h5>

export default Thanks
