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
          <div>
            Gaintain&apos;s UI tracks and adjusts the recorded weight where the starting weight is what the user
            completed prior to the current workout. This empowers lifters to make their own informed choices about
            their physical fitness journey.
          </div>
        </section>
      </div>
      <video src={DataEntryVideo} autoPlay loop muted playsInline width='100%' />
    </div>
  )
}

export default DataEntry
