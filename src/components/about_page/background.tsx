import React from 'react'

import Section from './section'
import ScrollAnimatedText from 'components/scroll_animated_text'

const text = `My background in UX design, research, and technical communication, with a B.A. in English-Philosophy, shapes how I analyze data, synthesize insights, and refine user experiences.

I specialize in product strategy, stakeholder alignment, and process optimization, conducting competitive research, improving onboarding, and streamlining workflows to enhance usability.  Explore my LinkedIn & Writing for more insights.`

const Background = (): JSX.Element => {
  return (
    <Section title='Background'>
      <h4><strong><ScrollAnimatedText text={text} /></strong></h4>
    </Section>
  )
}

export default Background
