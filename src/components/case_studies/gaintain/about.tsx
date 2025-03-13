import React, { forwardRef, type Ref } from 'react'

import AboutImage from 'images/gaintain/about.webp'
import { Projects } from 'projects'
const backgroundImage = Projects.Gaintain.colors.primary

const About = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='gaintain-about' ref={ref}>
    <h3><strong className='case-study-gradient-text' style={{ backgroundImage }}>GAINTAIN</strong></h3>
    <h5>A fitness app designed for a comprehensive workout log to meticulously track exercises, sets, reps, and progress.</h5>
    <img src={AboutImage} alt='About Gaintain' />
    <div className='case-study-overview'>
      <div className='row'>
        <div className='cell'>
          <div className='subtitle-2'>Team</div>
          <div className='body-2'>1 Product Designer + 1 Engineer</div>
        </div>
        <div className='cell right'>
          <div className='subtitle-2'>Timeline</div>
          <div className='body-2'>8 weeks</div>
        </div>
      </div>
      <div className='row'>
        <div className='cell bottom'>
          <div className='subtitle-2'>Overview</div>
          <div className='body-2'>
            This case study covers the development of GainTain, a greenfield fitness app for experienced bodybuilders
            and lifters who have been training for years. As the Product Designer & Manager, I led the design and
            project management, tackling challenges like aligning UI design with backend capabilities and gathering
            meaningful user feedback on a tight budget.
          </div>
        </div>
      </div>
    </div>
  </div>
))

About.displayName = 'About'

export default About
