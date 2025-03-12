import { IconChevronsRight } from '@tabler/icons-react'
import React, { forwardRef, type Ref } from 'react'

import NextStepsImage from 'images/querque_candles/next_steps.webp'

import Icon from '../icon'

const NextSteps = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='case-study-top-to-bottom querque' ref={ref}>
    <div className='case-study-explanation'>
      <section>
        <div className='querque-icon-heading'>
          <Icon><IconChevronsRight/></Icon> <h5>Next Steps: Website Development</h5></div>
      </section>
    </div>
    <img src={NextStepsImage} alt='Next Steps' />
  </div>
))

NextSteps.displayName = 'Next Steps'

export default NextSteps
