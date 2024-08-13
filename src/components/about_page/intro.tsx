import React from 'react'

import LetsChat from 'components/lets_chat'
import { makeMediaTag } from 'components/media_with_text'
import useIsMobile from 'hooks/use_is_mobile'

const AdalidaFace = 'images/about/adalida_face.webp'

const Intro = (): JSX.Element | null => {
  const isMobile = useIsMobile()
  if (isMobile === null) return null

  return (
    <div className='intro'>
      <div className='image'>
        {makeMediaTag({ media: AdalidaFace, style: { maxWidth: '80dvh', width: '100%' }})}
      </div>
      <div className='intro-text'>
        <div className='heading'>A bit about me...</div>
        <div>
          I&apos;m an energetic, resourceful, and versatile Product Designer.
          Weekdays, I&apos;m a Rubber Duck cosplaying as a Product Designer. Weekends, I&apos;m a Product Designer cosplaying as a Rubber Duck.
        </div>
        <div>
          Someone asked me what my favorite cereal was, and I realized I didn&apos;t have an answer.
          So, I embarked on a quest, buying and testing every cereal option I could find.
          Yet, even after trying them all, I still couldn&apos;t decide.
          It was only then that I paused and asked myself: do I even like cereal?
        </div>
        <LetsChat />
      </div>
    </div>
  )
}

export default Intro
