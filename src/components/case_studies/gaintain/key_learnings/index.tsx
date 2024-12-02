import React from 'react'

import Learning from './learning'

const KeyLearnings = (): JSX.Element => {
  return (
    <div data-aos='fade-up' className='gaintain-top-to-bottom'>
      <h2>Key Learnings</h2>
      <div>
        No project is perfect and neither was Gaintain. I learned new hacks and hard lessons.
        Here are my three key learnings from this project:
      </div>

      <div className='gaintain-learnings'>
        <Learning number={1} title='Greenfield vs Brownfield  Projects'>
          <p>Working on a new project vs working in an existing project can be challenging.</p>
          <p>
            Feedback, especially statistically meaningful feedback when you have $0 budget, was difficult to come by.
            I posted a questionnaire to several online fitness communities (free), but unfortunately I received only 2
            responses. One of which did not pass the first screening question.
          </p>
          <p>
            Next time, if I want statistically meaningful insights from user research, I need to budget time and/or
            resources for finding participants. It&apos;s not about finding any user feedback, it&apos;s about listening to feedback
            from my target market.
          </p>
        </Learning>

        <Learning number={2} title='Utilize Open Source Tools'>
          <p>
            I used Apple&apos;s SwiftUI documentation to my advantage and will continue to use this hack in the future.
          </p>
          <p>
            Apple invests heavily in their user research. I found the intersection of my users&apos; needs and the
            component&apos;s affordances to choose the right components. The components can be our starting point
            to test, and build the designs from.
          </p>
          <p>Next time, I’ll read the component documentation before designing.</p>
        </Learning>

        <Learning number={3} title='Developer Communication'>
          <p>
            I wasn&apos;t just the designer here, I was the product manager. I had to meet my developer where he was at.
          </p>
          <p>
            <ul>
              <li>Product Requirement Documents</li>
              <li>Building us a Kanban board</li>
              <li>Being a person who wears many hats</li>
            </ul>
          </p>
        </Learning>

      </div>

    </div>
  )
}

export default KeyLearnings
