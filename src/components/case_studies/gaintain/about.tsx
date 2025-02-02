import React, { forwardRef, type Ref } from 'react'

import AboutImage from 'images/gaintain/about.webp'

const About = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='gaintain-about' ref={ref}>
    <h3>GAINTAIN</h3>
    <h5>A fitness app designed for a comprehensive workout log to meticulously track exercises, sets, reps, and progress.</h5>
    <img src={AboutImage} alt='About Gaintain' />
    <div className='gaintain-overview'>
      <div className='row'>
        <div className='cell'>
          <div className='subtitle-2'>Team</div>
          <div className='body-2'>1 Product Designer + 1 Engineer</div>
        </div>
        <div className='cell right'>
          <div className='subtitle-2'>Timeline</div>
          <div className='body-2'>2 weeks</div>
        </div>
      </div>
      <div className='row'>
        <div className='cell bottom'>
          <div className='subtitle-2'>Overview</div>
          <div className='body-2'>
            Gaintain is a fitness app designed for individuals serious about tracking and enhancing their bodybuilding
            and weightlifting workouts. Gaintain offers a comprehensive workout log to meticulously track exercises,
            sets, reps, and progress. Gaintain prioritizes transparency and user control, making it the ultimate tool
            for achieving fitness goals.
          </div>
        </div>
      </div>
    </div>
  </div>
))

About.displayName = 'About'

export default About
