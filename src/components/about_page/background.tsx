import React from 'react'

import Section from './section'
import ScrollAnimatedText from 'components/scroll_animated_text'

const text = `I hold an interdisciplinary B.A. in English-Philosophy with a specialization in Technical and Professional Communication. Exploring the intersection of these fields allowed me to study how humans think, communicate, and interact.

This unique blend enriches my approach to UX design, enabling me to create thoughtful, user-centric products. For insights on the intersection of design, philosophy, and language, including my past work, explore my blog.`

const Background = (): JSX.Element => {
  return (
    <Section title='Background'>
      <h4><strong><ScrollAnimatedText text={text} /></strong></h4>
    </Section>
  )
}

export default Background
