import React, { forwardRef, type Ref } from 'react'

import { Projects } from 'projects'
import IntroVideo from 'videos/gaintain/intro.mp4'
import IntroLoopVideo from 'videos/gaintain/intro_loop.mp4'

import IntroVideos from '../intro_videos'

const backgroundImage = Projects.Gaintain.colors.primary

const About = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='gaintain-about' ref={ref}>
    <h3><strong className='case-study-gradient-text' style={{ backgroundImage }}>GAINTAIN</strong></h3>
    <h5>A fitness app designed for a comprehensive workout log to meticulously track exercises, sets, reps, and progress.</h5>
    <IntroVideos videos={[IntroVideo, IntroLoopVideo]} />
    <div className='case-study-overview'>
      <div className='row'>
        <div>
          <span className='subtitle-2'>Role:</span> <span className='body-2'>Lead Product / Strategy</span>
        </div>
        <div>
          <span className='subtitle-2'>Timeline:</span> <span className='body-2'>8 weeks</span>
        </div>
        <div>
          <span className='subtitle-2'>Team:</span> <span className='body-2'>1 Engineer, 1 Designer</span>
        </div>
      </div>
    </div>
  </div>
))

About.displayName = 'About'

export default About
