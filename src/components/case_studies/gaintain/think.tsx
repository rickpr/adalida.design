import React from 'react'

import Card from './card'
import MediaWithText from '../../media_with_text'

const Think = (): JSX.Element => {
  const text = (
    <div className='gaintain-text'>
      <h3>&#47;&#47; THINK</h3>
      <p>
        As part of the research phase for the Gaintain app, a survey was
        conducted with a fitness enthusiast, Tina. Tina expressed her frustration
        with existing workout tracking apps and described her ideal workout tracking
        experience. Using the insights gathered from Tina and other users like her,
        I created a set of user personas to guide the development of Gaintain.
      </p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/gaintain/think.webp' text={text} />
    </Card>
  )
}

export default Think
