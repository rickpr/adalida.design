import { IconDatabaseCog } from '@tabler/icons-react'
import React, { forwardRef, type Ref } from 'react'

import OrderedFeatureList from 'components/feature_list/ordered'
import UnorderedFeatureList from 'components/feature_list/unordered'
import ResearchImage from 'images/gaintain/research.webp'

import IconHeading from '../icon_heading'

const Research = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='case-study-side-by-side' ref={ref}>
    <div className='case-study-explanation'>
      <section>
        <IconHeading icon={<IconDatabaseCog />} heading='Research & Key Insights:' />
        <div className='body-2'>

          To understand how people track workouts, I explored tracking strategies shared in fitness blogs, guides, and
          videos. Two main approaches emerged:
        </div>
        <UnorderedFeatureList
          items={[
            { title: 'Paper Notebooks', description: 'Reliable but hard to review.' },
            { title: 'Digital Apps', description: 'Convenient but fragmented.' }
          ]}
        />
        <div className='body-2'>Neither fully supported both consistency and insights, leading to three essential features:</div>
        <OrderedFeatureList
          items={[
            { title: 'Workout Logging', description: 'Track exercises, weights, and reps in one place.' },
            { title: 'Instructional Guidance', description: 'Exercise cues without app-switching.' },
            { title: 'Built-in Stopwatch', description: 'Integrated rest timer for efficiency.' }
          ]}
        />
        <div className='body-2'>
          These insights <strong>informed the data structure</strong> behind the design, ensuring a seamless,
          frictionless tracking system that eliminates app-switching.
        </div>
      </section>
    </div>
    <img src={ResearchImage} alt='Analyzing' />
  </div>
))

Research.displayName = 'Research'

export default Research
