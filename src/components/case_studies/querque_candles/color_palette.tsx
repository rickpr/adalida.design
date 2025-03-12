import { IconPalette } from '@tabler/icons-react'
import React, { forwardRef, type Ref } from 'react'

import ColorPaletteImage from 'images/querque_candles/color_palette.webp'

import Icon from '../icon'

const ColorPalette = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='case-study-top-to-bottom querque' ref={ref}>
    <div className='case-study-explanation'>
      <section>
        <div className='querque-icon-heading'><Icon><IconPalette /></Icon> <h5>Color Palette</h5></div>
      </section>
    </div>
    <img src={ColorPaletteImage} alt='Color Palette' />
  </div>
))

ColorPalette.displayName = 'ColorPalette'

export default ColorPalette
