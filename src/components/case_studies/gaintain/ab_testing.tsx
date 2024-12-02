import React from 'react'

import ABTestingImage from 'images/gaintain/ab_testing.webp'

import Icon from './icon'
import ABTestingIcon from './icons/ab_testing'

const ABTesting = (): JSX.Element => {
  return (
    <div data-aos='fade-up' className='gaintain-side-by-side padding reverse'>
      <div className='gaintain-explanation'>
        <section className='more-padding'>
          <Icon><ABTestingIcon /></Icon>
          <h1 className='default-weight no-margin'>A/B Testing the MVP:</h1>
          <div>
            I tested the Swift UI interactions with guerrilla ethnographic studies in the gym. The insights from testing
            pointed to users encountering problems when:
          </div>
          <ol>
            <li>Machines were inaccessible (taken or not operative).</li>
          </ol>
          <ol start={2}>
            <li>Chalk on hands during heavy weight exercises.</li>
          </ol>
          <ol start={3}>
            <li>Using the timer effectively.</li>
          </ol>
        </section>
      </div>
      <img src={ABTestingImage} alt='Comparing two versions' />
    </div>
  )
}

export default ABTesting
