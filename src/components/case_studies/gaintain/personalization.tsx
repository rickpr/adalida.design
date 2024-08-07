import React from 'react'

import Card from './card'
import MediaWithText from '../../media_with_text'

const Personalization = (): JSX.Element => {
  const text = (
    <div className='gaintain-text'>
      <h3>&#47;&#47; Design for Everyone</h3>
      <p>
        Tina was particularly impressed with Gaintain&apos;s customizable
        background color feature. She found it to be an inclusive feature
        that allowed her to engage with the app and make it her own, whether
        she was tracking weights, reps, or supersets.
      </p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/gaintain/personalization.webp' text={text} reversed />
    </Card>
  )
}

export default Personalization
