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
          <div>Gaintain is built with an extensive video and instructional library.</div>
          <div>
            When the play button is pushed, users can see an instructional video of the exercise along with
            instructions covering how to complete the exercise.
          </div>
          <div>Need a refresher on how to complete an exercise, Gaintain is here for you!</div>


        </section>
      </div>
      <video src={InstructionsVideo} autoPlay loop muted playsInline width='100%' />
    </div>
  )
}

export default Instructions
