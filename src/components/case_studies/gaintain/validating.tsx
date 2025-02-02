import { IconMoodUp } from '@tabler/icons-react'
import React, { forwardRef, type Ref } from 'react'

import NumberedList from 'components/numbered_list'
import ValidatingImage from 'images/gaintain/validating.webp'

import Icon from './icon'

const Validating = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='gaintain-side-by-side reverse' ref={ref}>
    <div className='gaintain-explanation'>
      <section className='more-padding'>
        <Icon><IconMoodUp /></Icon>
        <h5>Validating the Prototype:</h5>
        <p>
          To ensure GainTain could support the diverse needs of lifters, I conducted scenario testing, simulating
          real-world use cases to evaluate the prototype’s versatility.
        </p>
        <p>Research revealed that lifters organize their tracking around three core set types:</p>
        <NumberedList
          items={[
            'Weighted sets: for traditional strength exercises.',
            'Weighted supersets: for routines that combine multiple exercises seamlessly.',
            'Non-weighted sets: for bodyweight movements, high-intensity interval training (HIIT), and stretches.',
          ]}
        />
        <p>This design was updated to support different types of tracking, workouts, and practices lifters encounter.</p>
      </section>
    </div>
    <img src={ValidatingImage} alt='Different types of sets' />
  </div>
))

Validating.displayName = 'Validating'

export default Validating
