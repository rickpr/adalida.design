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
          <h5>Interactions: Data Entry</h5>
          <p>GainTain simplifies tracking by allowing users to easily log and adjust their weight and repetitions.</p>
          <p>
            Each set begins with the last recorded input, giving lifters the context needed to decide whether to increase
            or decrease their weight based on their goals.
          </p>
          <p>
            By eliminating guesswork, GainTain ensures users can focus on progress without worrying about what they did
            last time—because GainTain’s got it covered.
          </p>
        </section>
      </div>
      <video src={DataEntryVideo} autoPlay loop muted playsInline />
    </div>
  )
}

export default DataEntry
