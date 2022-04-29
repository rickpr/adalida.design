import React from 'react'

import Card from '../card'
import PictureCaption from '../picture_caption'
import ImageWithText from '../image_with_text'

import 'sass/adalida_page/cyph.scss'

const Prototype = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Problem'
        text="People found HBOMax's collection small and had trouble viewing their entire title collection."
      />
      <PictureCaption
        heading='Solution'
        text="Provide an easy to navigate search option where viewers can see all titles in a A-Z format and allow them to filter their searches by genre, actor, or title name."
      />
    </div>
  )

  return (
    <Card title='// Prototype'>
      <ImageWithText image='images/hbo_max/prototype.png' text={pictureCaption} />
    </Card>
  )
}

export default Prototype
