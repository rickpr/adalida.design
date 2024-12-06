import React from 'react'

import Learning from './learning'

const KeyLearnings = (): JSX.Element => {
  return (
    <div data-aos='fade-up' className='gaintain-key-learnings'>
      <h2>Key Learnings</h2>
      <div>
        No project is perfect and neither was Gaintain. I learned new hacks and hard lessons.
        Here are my three key learnings from this project:
      </div>

      <div className='gaintain-learnings'>
        <Learning number={1} title='Greenfield vs Brownfield  Projects'>
          <p>
            A few challenges working in a greenfield space especially with a limited team was road mapping,
            moving the project forward, picking the software to design the backend, and working within a limited
            budget and time frame.
          </p>
          <p>
            The initial problem we were solving for was to build a user interface for completing a workout. When we were
            ready for implementation, we were stalled until we completed the backend design. Part of that included
            providing users the ability to input their workout before being able to complete it.
          </p>
          <p>
            This realization caused a change in our scope to focus on building the sign up process, which included
            building a workout program but ultimately delayed our release.
          </p>
        </Learning>

        <Learning number={2} title='Meaningful Research'>
          <p>
            Feedback, especially statistically meaningful feedback with a $0 budget and a 3 week constraint was
            difficult. I posted a questionnaire to several online fitness communities (free), but unfortunately I
            received only 2 responses. One of which did not pass the screening questions.
          </p>
          <p>
            Next time, if I want statistically meaningful insights from user research, I need to budget time and or
            resources for finding participants.
          </p>
          <p>It&apos;s not about finding any user feedback, it’s about listening to feedback from my target market.</p>
          <p>
            To mitigate this, I used Apple&apos;s SwiftUI documentation, who invests heavily in their user research, to
            find the intersection of my user’s needs and the component&apos;.s affordances.
          </p>
        </Learning>

        <Learning number={3} title='Developer Communication'>
          <p>
            I wasn&apos;t just the designer here, I was also the product manager who wore many hats. This included
            managing the communication with in the team,  designing and leading our workflow process, and writing
            product requirement documents (PRDs).
          </p>
          <p>A big lesson from this role included how to communicate with a developer. Sometimes I&apos;d want a design
            changed and it would not look like what I handed off in Figma. This led me to learn about PRDs where I can
            specify to the developer what needs to changed. The formatting of a PRD can look different to different
            developers. I synced with my developer to build a a system that worked for both of us.
          </p>
          <p>This led to building a workflow that helped speed up our communication.</p>
        </Learning>

      </div>

    </div>
  )
}

export default KeyLearnings
