import React from 'react'

import TrackImage from 'images/gaintain/track.webp'

const Track = (): JSX.Element => {
  return (
    <div data-aos='fade-up' className='gaintain-about'>
      <h3><strong>GAINTAIN</strong></h3>
      <h5>Where Gains are Data-Driven</h5>
      <img src={TrackImage} alt='Where Gains are Data-Driven' />
    </div>
  )
}

export default Track
