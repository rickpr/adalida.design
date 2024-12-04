import { IconMoodUp } from '@tabler/icons-react'
import React from 'react'

import ValidatingImage from 'images/gaintain/validating.webp'

import Icon from './icon'

const Validating = (): JSX.Element => {
  return (
    <div data-aos='fade-up' className='gaintain-side-by-side reverse'>
      <div className='gaintain-explanation'>
        <section className='more-padding'>
          <Icon><IconMoodUp /></Icon>
          <h1 className='default-weight no-margin'>Validating the Prototype:</h1>
          <div>
            Testing the design under different use cases made it clear lifters track their information using three main
            {' '}<strong><em>types of sets</em>:</strong>
          </div>
          <ol>
            <li>Weighted sets</li>
          </ol>
          <ol start={2}>
            <li>Weighted supersets</li>
          </ol>
          <ol start={3}>
            <li>Non-weighted sets</li>
          </ol>
          <div>
            This design was updated to support different types of tracking, workouts, and practices lifters encounter.
          </div>
        </section>
      </div>
      <img src={ValidatingImage} alt='Different types of sets' />
    </div>
  )
}

export default Validating
