import React from 'react'

import TimerVideo from 'videos/gaintain/timer.mp4'

import Card from './card'
import { makeMediaTag } from '../../media_with_text'

const Timer = (): JSX.Element => {
  const text = (
    <div>
      <h3>&#47;&#47; 03 | Timer</h3>
      <p>
        Gaintain&apos;s timer feature allows Sarah to easily track her rest
        pauses during her time under tension workouts, without having to switch
        between multiple apps.
      </p>
    </div>
  )

  return (
    <Card>
      <div className='video-card-content'>
        {text}
        <div className='video-card-video'>
          {makeMediaTag({ media: TimerVideo })}
        </div>
      </div>
    </Card>
  )
}

export default Timer
