import { IconSpacingHorizontal } from '@tabler/icons-react'
import React, { forwardRef, type Ref } from 'react'

import ProportionsAndPaddingImage from 'images/querque_candles/proportions_and_padding.webp'

import Icon from './icon'

const ProportionsAndPadding = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='case-study-top-to-bottom querque' ref={ref}>
    <div className='case-study-explanation'>
      <section>
        <div className='querque-icon-heading'><Icon><IconSpacingHorizontal/></Icon> <h5>Proportions and Padding</h5></div>
      </section>
    </div>
    <img src={ProportionsAndPaddingImage} alt='Proportions and Padding' />
  </div>
))

ProportionsAndPadding.displayName = 'ProportionsAndPadding'

export default ProportionsAndPadding
