import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const About = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; This is your heading</h3>
      <p>
        You can write here as much as you want, this text will always look nice,
        whether you write longer paragraphs or just a few words. Click here and
        try it out.
      </p>
    </div>
  )

  return (
    <Card title='// ABOUT THE PROJECT'>
      <MediaWithText media='images/zaras_cleaning/about.png' text={text} />
    </Card>
  )
}

export default About
