import React, { forwardRef, type Ref, useContext } from 'react'

import DarkModeContext from 'dark_mode_context'
import Card from 'components/about_page/card'

const KeyTakeaways = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div data-aos='fade-up' ref={ref} className='gaintain-explanation'>
      <h4 className={darkMode ? 'dark' : ''}>Key Takeaways</h4>
      <p>
        No project is perfect and neither was Gaintain. I learned new hacks and hard lessons.
        Here are my three key takeaways from this project:
      </p>
      <div className='stacking-cards'>
        <Card title='Meaningful Research'>
          <p>
            Gathering meaningful feedback on a $0 budget and tight timeline was challenging. I used a funnel design for
            the survey to target experienced lifters, but received only two valid responses.
          </p>
          <p>
            With limited feedback, I relied on dogfooding to gather insights through personal use and referenced
            Apple’s SwiftUI documentation, informed by user research, to align the design with component affordances and
            user needs.
          </p>
          <p>
            Next time, I’d allocate resources for recruiting participants from the target market to gather more actionable
            feedback. While dogfooding provided valuable insights, user input is essential for meeting real needs.
          </p>
        </Card>

        <Card title='Greenfield Projects'>
          <p>
            Building GainTain from scratch with a small team and no budget required careful prioritization of
            road mapping, project scope, and backend selection.
          </p>
          <p>
            Initially focused on the UI for workout completion, we realized the app lacked functionality without a backend
            for user input, forcing a pivot to include a sign-up process and workout program builder, delaying the
            release. This experience highlighted the importance of aligning UI design with backend capabilities early on.
          </p>
          <p>Moving forward, I’ll ensure dependencies are identified early to avoid delays and streamline the project.</p>
        </Card>

        <Card title='Developer Communication'>
          <p>
            As the sole product lead, I led communication, workflow processes, and PRD creation. I used a Kanban board to
            track design updates like spacing, alignment, and other details, ensuring clarity and reducing discrepancies.
          </p>
          <p>
            I worked closely with the developer to align on data, technical constraints, and content, ensuring the design
            was both user-friendly and feasible. Regular check-ins and PRDs streamlined our workflow, improving efficiency
            and reducing errors.
          </p>
          <p>
            In the future, I’ll be more mindful of team size and communication workflow for smoother collaboration
            and project management.
          </p>
        </Card>
      </div>
    </div>
  )
})

KeyTakeaways.displayName = 'KeyTakeaways'

export default KeyTakeaways
