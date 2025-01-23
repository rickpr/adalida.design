import { IconAB2 } from '@tabler/icons-react'
import React, { forwardRef, type Ref } from 'react'

import ABTestingImage from 'images/gaintain/ab_testing.webp'

import Icon from './icon'

const ABTesting = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='gaintain-side-by-side reverse' ref={ref}>
    <div className='gaintain-explanation'>
      <section className='more-padding'>
        <Icon><IconAB2 /></Icon>
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
    <img className='gaintain-ab-testing-image' src={ABTestingImage} alt='Comparing two versions' />
  </div>
))

ABTesting.displayName = 'ABTesting'

export default ABTesting
