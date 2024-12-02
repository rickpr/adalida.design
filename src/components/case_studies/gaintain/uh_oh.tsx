import React from 'react'

import UhOhImage from 'images/gaintain/uh_oh.webp'

import Icon from './icon'
import Duck from './icons/duck'
import Exclamation from './icons/exclamation'

const UhOh = (): JSX.Element => {
  return (
    <div data-aos='fade-up' className='gaintain-side-by-side padding reverse'>
      <div className='gaintain-explanation'>
        <section>
          <Icon><Exclamation /></Icon>
          <h1 className='default-weight no-margin'>Uh-oh a User Problem:</h1>
          <em>
            &ldquo;As a <strong>decade long bodybuilder</strong>, I wanted to <strong>track my workouts</strong> so
            that I could <strong>capture my progress</strong>, consistency, and growth&rdquo;
          </em>
        </section>
        <section>
          <Icon><Duck /></Icon>
          <h1 className='default-weight no-margin'>Defining the Problem:</h1>
          <div>
            How can I <strong>help <em>experienced weightlifters and bodybuilders</em> capture their workout data</strong> so
            that can make informed decisions about their fitness journey?
          </div>
        </section>
      </div>
      <img src={UhOhImage} alt='About Gaintain' />
    </div>
  )
}

export default UhOh
