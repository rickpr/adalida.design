import { IconCode } from '@tabler/icons-react'
import React, { forwardRef, type Ref } from 'react'

import DeveloperImage from 'images/gaintain/developer.webp'

import Icon from './icon'

const Developer = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='gaintain-side-by-side reverse' ref={ref}>
    <div className='gaintain-explanation'>
      <section>
        <Icon><IconCode /></Icon>
        <h1 className='default-weight no-margin'>Developer Specifications:</h1>
        To complete a workout, click the check mark.
        The content is populated by the Gaintain CMS based on the data in the user profile.
        <div>Checkmark Icon (Tap): Records workout as complete</div>
        <div>Numbered Segmented Picker (Tap): Changes view of exercise in workout</div>
        <div>
          Plus and minus icon (Tap): Adjusts the recorded weight where the starting weight is what the user completed
          in the prior workout. If first workout, start at zero.
        </div>
        <div>Play Video Icon (Tap): Sheet pops up containing  instructional video with written instructions.</div>
        <div>Page controls (Swipe left or right): Changes view to next step in the workout.</div>
        <div>Next button (Tap): View swipes right to next set for the exercise.</div>
      </section>
    </div>
    <img src={DeveloperImage} alt='Developer specifications' />
  </div>
))

Developer.displayName = 'Developer'

export default Developer
