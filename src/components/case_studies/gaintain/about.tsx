import React from 'react'

import AboutImage from 'images/gaintain/about.webp'

const About = (): JSX.Element => {
  return (
    <div data-aos='fade-up' className='gaintain-about'>
      <div className='gaintain-header'>GAINTAIN</div>
      <h1 className='default-weight'>A fitness app designed for a comprehensive workout log to meticulously track exercises, sets, reps, and progress.</h1>
      <img src={AboutImage} alt='About Gaintain' />
      <div className='gaintain-overview'>
        <div className='row'>
          <div className='cell'>
            <div>Team</div>
            <span>1 Product Designer + 1 Engineer</span>
          </div>
          <div className='cell right'>
            <div>Timeline</div>
            <span>2 weeks</span>
          </div>
        </div>
        <div className='row'>
          <div className='cell bottom'>
            <div>Overview</div>
            <span>
              Gaintain is a fitness app designed for individuals serious about tracking and enhancing their bodybuilding
              and weightlifting workouts. Gaintain offers a comprehensive workout log to meticulously track exercises,
              sets, reps, and progress. Gaintain prioritizes transparency and user control, making it the ultimate tool
              for achieving fitness goals.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
