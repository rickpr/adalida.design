import { IconPlayerPlayFilled } from '@tabler/icons-react'
import React, { forwardRef, type Ref } from 'react'

import InstructionsVideo from 'videos/gaintain/instructions.mp4'

import Icon from './icon'

const Instructions = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='gaintain-side-by-side' ref={ref}>
    <div className='gaintain-explanation'>
      <section>
        <Icon><IconPlayerPlayFilled /></Icon>
        <h5>Interactions: Instructions</h5>
        <p>
          GainTain is designed to support users in maintaining proper form with its extensive library of instructional
          videos and written tutorials.
        </p>
        <p>
          A simple tap of the play button brings up a detailed demonstration video paired with step-by-step instructions,
          ensuring every movement is performed safely and effectively.
        </p>
        <p>
          Whether mastering a new exercise or refreshing technique, GainTain provides the clarity and confidence needed
          to excel in every workout.
        </p>
      </section>
    </div>
    <video src={InstructionsVideo} autoPlay loop muted playsInline />
  </div>
))

Instructions.displayName = 'Instructions'

export default Instructions
