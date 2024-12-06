import { IconPlusMinus } from '@tabler/icons-react'
import React from 'react'

import DataEntryVideo from 'videos/gaintain/data_entry.mp4'

import Icon from './icon'

const DataEntry = (): JSX.Element => {
  return (
    <div data-aos='fade-up' className='gaintain-side-by-side reverse'>
      <div className='gaintain-explanation'>
        <section>
          <Icon><IconPlusMinus/></Icon>
          <h1 className='default-weight no-margin'>Data Entry</h1>
          <div>Gaintain is designed for users to track and adjust their weight and repetitions with ease.</div>
          <div>The weight and repetitions starting number is set to the last recorded input. This empowers lifters with
            the information to decide to increase or decrease the weight depending on their goals.
          </div>
          <div>No more wondering what you did last time or how heavy you should go. Gaintain’s got you covered!</div>
        </section>
      </div>
      <video src={DataEntryVideo} autoPlay loop muted playsInline width='100%' />
    </div>
  )
}

export default DataEntry
