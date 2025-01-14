import React from 'react'

import TrackImage from 'images/gaintain/track.webp'

const Track = (): JSX.Element => {
  return (
    <div data-aos='fade-up' className='gaintain-top-to-bottom'>
      <div className='gaintain-header'>GAINTAIN</div>
      <h1 className='default-weight'>Where Gains are Data-Driven</h1>
      <img src={TrackImage} alt='Where Gains are Data-Driven' />
    </div>
  )
}

export default Track
