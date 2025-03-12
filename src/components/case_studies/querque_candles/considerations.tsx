import { IconInfoTriangleFilled } from '@tabler/icons-react'
import React, { forwardRef, type Ref } from 'react'

import ConsiderationsImage from 'images/querque_candles/considerations.webp'

import Icon from '../icon'

const Considerations = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='case-study-top-to-bottom querque' ref={ref}>
    <div className='case-study-explanation'>
      <section>
        <div className='querque-icon-heading'><Icon><IconInfoTriangleFilled/></Icon> <h5>Considerations</h5></div>
      </section>
    </div>
    <img src={ConsiderationsImage} alt='Considerations' />
  </div>
))

Considerations.displayName = 'Considerations'

export default Considerations
