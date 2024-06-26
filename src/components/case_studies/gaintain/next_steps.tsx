import React from 'react'

import Card from './card'
import MediaWithText from '../../media_with_text'

const NextSteps = (): JSX.Element => {
  const text = (
    <div className='gaintain-text space'>
      <h3>&#47;&#47; Next Steps</h3>
      <p><strong>1 |</strong> Design an admin desktop side for workout creation, video linking inputs, etc.</p>
      <p><strong>2 |</strong> Conduct an ethnographic usability study with multiple participants at a gym.</p>
      <p><strong>3 |</strong> Design a landing page where users can view their progress and data over time.</p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/gaintain/next_steps.webp' text={text} />
    </Card>
  )
}

export default NextSteps
