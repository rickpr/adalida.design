import { IconExclamationCircleFilled } from '@tabler/icons-react'
import React, { forwardRef, type Ref } from 'react'

import UhOhImage from 'images/gaintain/uh_oh.webp'

import Duck from 'components/duck'
import Icon from './icon'

const UhOh = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='gaintain-side-by-side reverse' ref={ref}>
    <div className='gaintain-explanation'>
      <section>
        <Icon><IconExclamationCircleFilled /></Icon>
        <h5>Uh-oh a User Problem:</h5>
        <div className='subtitle-2'>
          &ldquo;As a <strong><em>decade long bodybuilder</em></strong>, I wanted to <strong>track my workouts</strong> so
          that I could <strong>capture my progress, consistency, and growth</strong>&rdquo;
        </div>
      </section>
      <section>
        <Icon><Duck /></Icon>
        <h5>Defining the Problem:</h5>
        <div className='subtitle-2'>
          How can I help <strong><em>experienced weightlifters capture their workout data</em></strong> so that they
          can <strong><em>make informed decisions</em></strong> about their fitness journey?
        </div>
      </section>
    </div>
    <img src={UhOhImage} alt='About Gaintain' />
  </div>
))

UhOh.displayName = 'UhOh'

export default UhOh
