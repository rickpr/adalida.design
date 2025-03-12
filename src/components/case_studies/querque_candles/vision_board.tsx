import { IconEyeHeart } from '@tabler/icons-react'
import React, { forwardRef, type Ref } from 'react'

import VisionBoardImage from 'images/querque_candles/vision_board.webp'

import Icon from './icon'

const VisionBoard = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='case-study-top-to-bottom querque' ref={ref}>
    <div className='case-study-explanation'>
      <section>
        <div className='querque-icon-heading'><Icon><IconEyeHeart /></Icon> <h5>Vision Board</h5></div>
      </section>
    </div>
    <img src={VisionBoardImage} alt='Vision Board' />
  </div>
))

VisionBoard.displayName = 'VisionBoard'

export default VisionBoard
