import React from 'react'

import Card from './card'
import CaptionedFigure from 'components/captioned_figure'
import { makeMediaTag } from '../../media_with_text'

const Check = (): JSX.Element => {
  const text = (
    <div className='gaintain-text'>
      <h3>&#47;&#47; CHECK</h3>
      <p>
        The hi-fidelity design process allowed the Gaintain app to be up
        and running in just a few hours using the iOS component kit available
        on Figma Community. Over the next two months, the team iteratively
        improved the app, focusing on enhancing its functionality, usability,
        and design, based on feedback from users like Tina.
      </p>
    </div>
  )

  const mediaTag = makeMediaTag({ media: 'images/gaintain/check.webp' })
  const figmaLink = (
    <a
      href='https://www.figma.com/proto/p9h30Mv9nEaMXP9CEaMJTz/Gaintain-Creative-Process?page-id=0%3A1&node-id=283%3A652&viewport=-398%2C-458%2C0.1&scaling=contain&starting-point-node-id=283%3A652'
      target='_blank'
      rel='noreferrer'
    >
      Creative Process
    </a>
  )

  return (
    <Card>
      <div className='gaintain-check'>
        <div className='caption'>
          <CaptionedFigure caption={figmaLink} figure={mediaTag} />
        </div>
        <div className='caption'>
          {text}
        </div>
      </div>
    </Card>
  )
}

export default Check
