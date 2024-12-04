import { IconPlayerPlayFilled } from '@tabler/icons-react'
import React from 'react'

import InstructionsVideo from 'videos/gaintain/instructions.mp4'

import Icon from './icon'

const Instructions = (): JSX.Element => {
  return (
    <div data-aos='fade-up' className='gaintain-side-by-side'>
      <div className='gaintain-explanation'>
        <section>
          <Icon><IconPlayerPlayFilled /></Icon>
          <h1 className='default-weight no-margin'>Instructions</h1>
          <div>
            Gaintain&apos;s UI tracks and adjusts the recorded weight where the starting weight is what the user
            completed prior to the current workout. This empowers lifters to make their own informed choices about
            their physical fitness journey.
          </div>
        </section>
      </div>
      <video src={InstructionsVideo} autoPlay loop muted playsInline width='100%' />
    </div>
  )
}

export default Instructions
