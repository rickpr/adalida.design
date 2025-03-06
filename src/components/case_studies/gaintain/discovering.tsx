import { IconExclamationCircleFilled } from '@tabler/icons-react'
import React, { forwardRef, type Ref } from 'react'

import DiscoveringImage from 'images/gaintain/discovering.webp'

import Duck from 'components/duck'
import Icon from './icon'

const Discovering = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='gaintain-side-by-side reverse' ref={ref}>
    <div className='gaintain-explanation'>
      <section>
        <Icon><IconExclamationCircleFilled /></Icon>
        <h5>Discovering the Gap:</h5>
        <div className='subtitle-2'>
          Workout tracking is valuable, but most apps lock it behind coaching or subscriptions.
        </div>
        <div className='subtitle-2'>
          <strong>
            <em>How can we give trainees full control&mdash;seamlessly tracking progress without relying on a trainer?</em>
          </strong>
        </div>
      </section>
      <section>
        <Icon><Duck /></Icon>
        <h5>Defining the Solution:</h5>
        <div className='subtitle-2'>
          A seamless, fast workout tracker that prioritizes effortless logging&mdash;eliminating the need for multiple apps
          while giving trainees full control over their progress.
        </div>
        <div className='subtitle-2'>
          By focusing on <strong><em>input efficiency over complexity,</em></strong> it <strong><em>ensures consistent
          tracking and meaningful insights without reliance on a trainer.</em></strong>
        </div>
      </section>
    </div>
    <img src={DiscoveringImage} alt='About Gaintain' />
  </div>
))

Discovering.displayName = 'Discovering'

export default Discovering
