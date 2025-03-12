import { IconRuler } from '@tabler/icons-react'
import React, { forwardRef, type Ref } from 'react'

import BrandPrinciplesImage from 'images/querque_candles/brand_principles.webp'

import Icon from './icon'

const BrandPrinciples = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='case-study-top-to-bottom querque' ref={ref}>
    <div className='case-study-explanation'>
      <section>
        <div className='querque-icon-heading'><Icon><IconRuler /></Icon> <h5>Brand Principles</h5></div>
      </section>
    </div>
    <img src={BrandPrinciplesImage} alt='Brand principles' />
  </div>
))

BrandPrinciples.displayName = 'BrandPrinciples'

export default BrandPrinciples
