import React from 'react'

import Card from '../card'
import PictureCaption from '../picture_caption'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Define = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Problem'
        text='Citizens United makes it difficult for people to see who is financially sponsoring their local representatives.'
      />
      <PictureCaption
        heading='Solution'
        text='Provide a fast and transparent way for people to learn about a politician, their political and voting history, and their donors.'
      />
    </div>
  )
  return (
    <Card>
      <h1>&#47;&#47; Define</h1>
      <MediaWithText
        media='images/cyph/define.png'
        text={pictureCaption}
        reversed={true}
      />
    </Card>
  )
}

export default Define
