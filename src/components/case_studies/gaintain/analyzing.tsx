import { IconDatabaseCog } from '@tabler/icons-react'
import React, { forwardRef, type Ref } from 'react'

import NumberedList from 'components/numbered_list'
import AnalyzingImage from 'images/gaintain/analyzing.webp'

import Icon from './icon'

const Analyzing = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='gaintain-side-by-side' ref={ref}>
    <div className='gaintain-explanation'>
      <section>
        <Icon><IconDatabaseCog /></Icon>
        <h5>Analyzing the Raw Data:</h5>
        <p>
          First, I investigated how fitness enthusiasts currently manage their data. Common approaches Included:
        </p>
        <p>
          A. Paper Notebooks: A trusted method for many, but navigating past pages, analyzing trends, or retrieving old
          workouts was time-consuming and inefficient.
        </p>
        <p>
          B. Digital Apps: A modern solution, but often fragmented. Users relied on multiple apps for tracking, timers,
          and form instructions, creating disjointed experiences. Paywalls further limited functionality, leaving users
          frustrated.
        </p>
        <p>
          Through research into fitness communities, user reviews, and personal observations, I identified three
          essential features every solution needed:
        </p>
        <NumberedList
          items={[
            'Record System -  to log exercises, weights, and reps, providing clear insights into progress.',
            'Workout Instructions - to offer guidance and ensure proper form.',
            'Stopwatch - to simplify tracking rest periods and maintain workout flow.',
          ]}
        />
      </section>
    </div>
    <img src={AnalyzingImage} alt='Analyzing' />
  </div>
))

Analyzing.displayName = 'Analyzing'

export default Analyzing
