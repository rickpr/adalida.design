import React from 'react'

import BadgeButton from 'components/badge_button'
import { makeMediaTag } from 'components/media_with_text'
import useIsMobile from 'hooks/use_is_mobile'
import FileQuery from 'queries/file'

const AdalidaFace = 'images/about/adalida_face.webp'

const Intro = (): JSX.Element | null => {
  const isMobile = useIsMobile()
  if (isMobile === null) return null

  return (
    <div className='about-intro' data-aos='fade-up'>
      {makeMediaTag({ media: AdalidaFace, style: { maxWidth: '80dvw', maxHeight: '70dvh', width: '100%', height: '100%' } })}
      <div className='about-intro-text'>
        <h6>A bit about me,</h6>
        <div>
          I break down language, identify patterns, and translate real-world workflows into scalable, intuitive digital
          experiences. As a systems thinker, I collaborate closely across design, data, and engineering to align
          solutions with real-world constraints.
        </div>
        <div>
          Good design is clear and purposeful. I focus on understanding the core problem and its constraints before
          shaping a solution that balances usability, strategy, and execution.
        </div>
        <div>Every interaction should be intuitive, functional, and meaningful.</div>
        <BadgeButton to={FileQuery('resume.pdf').publicURL}>VIEW RESUME</BadgeButton>
      </div>
    </div>
  )
}

export default Intro
