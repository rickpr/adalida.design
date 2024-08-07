import React from 'react'

import Card from './card'
import MediaWithText from '../../media_with_text'

const About = (): JSX.Element => {
  const text = (
    <div className='about-case-study'>
      <h3>&#47;&#47; ABOUT</h3>
      <p>
        Gaintain is an extraordinary mobile app designed to help fitness enthusiasts take their workouts
        to the next level. With extensive workout data tracking capabilities and support for time under
        tension workouts, Gaintain provides a comprehensive solution for users who want to improve their
        fitness and achieve their goals.
      </p>
      <p>
        With its user-friendly interface and intuitive design, Gaintain makes it easy to track your
        progress and stay motivated. You can easily view your workout history, monitor your progress
        over time, and get detailed insights into your performance. And with features like time under
        tension tracking and exercise instruction videos, you&apos;ll have everything you need to take
        your workouts to the next level.
      </p>
      <p><strong>TIMELINE:</strong> 12 weeks</p>
      <p><strong>TEAM:</strong> 1 Designer, 1 Engineer</p>
      <p><strong>ROLES:</strong> Sole Product Designer</p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/gaintain/about.webp' text={text} reversed />
    </Card>
  )
}

export default About
