import { IconAB2 } from '@tabler/icons-react'
import React, { forwardRef, type Ref } from 'react'

import NumberedList from 'components/numbered_list'
import InternalTestingImage from 'images/gaintain/internal_testing.webp'

import Icon from './icon'

const InternalTesting = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='gaintain-side-by-side reverse' ref={ref}>
    <div className='gaintain-explanation'>
      <section className='more-padding'>
        <Icon><IconAB2 /></Icon>
        <h5>MVP Internal Testing</h5>
        <p>
          Using contextual inquiry, I tested the MVP in a real-world gym environment. Immersing directly in the workout
          experience allowed me to observe how the design performed under actual conditions and gather insights into
          usability and functionality. Testing revealed several challenges related to:
        </p>
        <NumberedList
          items={[
            'Equipment Availability: Inaccessibility of machines disrupted workout tracking, emphasizing the need for flexible planning.',
            'Environmental Challenges: Chalk-covered hands made touchscreen interactions difficult, reinforcing the importance of intuitive and robust controls.',
            'Timer Usability: The timer required optimization to integrate seamlessly into rest and workout flows.'
          ]}
        />
      </section>
    </div>
    <img className='gaintain-internal-testing-image' src={InternalTestingImage} alt='Comparing two versions' />
  </div>
))

InternalTesting.displayName = 'InternalTesting'

export default InternalTesting
