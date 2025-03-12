import { IconPlusMinus } from '@tabler/icons-react'
import React from 'react'

import FrictionlessVideo from 'videos/gaintain/frictionless.mp4'

import Icon from '../icon'

const Frictionless = (): JSX.Element => {
  return (
    <div data-aos='fade-up' className='case-study-side-by-side reverse'>
      <div className='case-study-explanation'>
        <section>
          <Icon><IconPlusMinus /></Icon>
          <h5>Frictionless Workout Logging</h5>
          <p>
            GainTain simplifies tracking by <strong><em>automatically pre-filling weight and reps</em></strong> based on
            the last recorded input.
          </p>
          <p>
            Users can <strong><em>adjust as needed</em></strong>, reducing friction and eliminating guesswork.
          </p>
          <p>
            By minimizing manual entry, this feature <strong><em>enhances efficiency, reduces cognitive load, and helps
            lifters stay focused on progress.</em></strong>
          </p>
        </section>
      </div>
      <video src={FrictionlessVideo} autoPlay loop muted playsInline />
    </div>
  )
}

export default Frictionless
