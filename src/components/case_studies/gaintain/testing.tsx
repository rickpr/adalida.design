import { IconAB2 } from '@tabler/icons-react'
import React, { forwardRef, type Ref } from 'react'

import UnorderedFeatureList from 'components/feature_list/unordered'
import TestingImage from 'images/gaintain/testing.webp'

import Icon from '../icon'

const Testing = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='case-study-side-by-side reverse' ref={ref}>
    <div className='case-study-explanation'>
      <section className='more-padding'>
        <Icon><IconAB2 /></Icon>
        <h5>Testing for Usability</h5>
        <p>
          Using <strong><em>contextual inquiry</em></strong>, I tested two MVP UI designs in a real-world gym
          environment to evaluate usability. Observing users in their routines revealed key challenges that
          shaped design refinements:
        </p>
        <UnorderedFeatureList
          italic
          items={[
            {
              title: 'Equipment Availability',
              description: 'Limited machine access required flexible workout planning.'
            },
            {
              title: 'Environmental Challenges',
              description: 'Chalk-covered hands led to larger tap targets and gesture-based controls.'
            },
            {
              title: 'Timer Usability',
              description: 'The timer was duplicated across screens, causing confusion.'
            }
          ]}
        />
        <p><strong><em>
          Findings from these tests directly influenced the design, ensuring an intuitive, adaptable, and efficient
          tracking experience.
        </em></strong></p>
      </section>
    </div>
    <img className='gaintain-internal-testing-image' src={TestingImage} alt='Comparing two versions' />
  </div>
))

Testing.displayName = 'Testing'

export default Testing
