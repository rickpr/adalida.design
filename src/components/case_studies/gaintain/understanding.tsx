import React from 'react'

import UnderstandingImage from 'images/gaintain/understanding.webp'

import Icon from './icon'
import Data from './icons/data'

const Understanding = (): JSX.Element => {
  return (
    <div data-aos='fade-up' className='gaintain-side-by-side'>
      <div className='gaintain-explanation'>
        <section>
          <Icon><Data /></Icon>
          <h1 className='default-weight no-margin'>Understanding the Data:</h1>
          <div>What preexisting solutions exist currently? Are some solutions better than others?</div>
          <div>
            Research shows a variety of methods for tracking exist. The most successful mediums of tracking included a
            physical notebook or a digital application. Either medium consistently tracked three core elements for a workout:
          </div>
          <div className='list'>
            <ol className='bold-numbers'>
              <li>
                <strong>Record System</strong> - the exercise, weight and repetition achieved for each set. This informs
                the user of their progression to either increase or stay the same weight
              </li>
            </ol>
            <div>Other pieces of information accessed during a workout, but weren’t recorded included:</div>
            <ol start={2} className='bold-numbers'>
              <li>
                <strong>Workout Instructions</strong> - video and written instructions for each exercise.
              </li>
            </ol>
            <ol start={3} className='bold-numbers'>
              <li><strong>Stopwatch</strong> - timer for timed rest pauses.</li>
            </ol>
          </div>
        </section>
      </div>
      <img src={UnderstandingImage} alt='Understanding' />
    </div>
  )
}

export default Understanding
