import React from 'react'

import TrackImage from 'images/gaintain/track.webp'

const Track = (): JSX.Element => {
  return (
    <div data-aos='fade-up' className='gaintain-top-to-bottom'>
      <div className='huge'>Track each exercise meticulously</div>
      <img src={TrackImage} alt='Tracking each exercise' />
    </div>
  )
}

export default Track
