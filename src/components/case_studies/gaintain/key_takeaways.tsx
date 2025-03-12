import React, { forwardRef, type Ref, useContext } from 'react'

import DarkModeContext from 'dark_mode_context'

import KeyTakeawayCard from '../key_takeaway_card'

const KeyTakeaways = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div data-aos='fade-up' ref={ref} className='case-study-top-to-bottom'>
      <div className='key-takeaways'>
        <h4 className={darkMode ? 'dark' : ''}>Key Takeaways</h4>
        <div>
          Every project presents challenges&mdash;GainTain was an opportunity to refine my research approach, technical
          alignment, and developer collaboration.
        </div>
      </div>
      <div className='stacking-cards'>
        <KeyTakeawayCard title='Making Research Actionable'>
          <p className='caption-1'>
            With limited direct feedback, I leveraged dogfooding as an early validation method and Apple&apos;s SwiftUI
            documentation to refine UI interactions. Moving forward, I’ll prioritize structured user research and
            participant recruitment for deeper insights.
          </p>
        </KeyTakeawayCard>

        <KeyTakeawayCard title='Aligning UI & Infrastructure'>
          <p className='caption-1'>
            Building a greenfield product reinforced the importance of early collaboration with engineering to align UI
            with backend feasibility.
            I learned to prioritize dependencies, manage scope, and adapt quickly to constraints.
          </p>
        </KeyTakeawayCard>

        <KeyTakeawayCard title='Developer Collaboration'>
          <p className='caption-1'>
            Testing GainTain in a gym enabled rapid feedback loops. Using Kanban boards and PRDs, I streamlined handoff,
            reduced rework, and improved collaboration.
            Regular check-ins ensured alignment, leading to smoother implementation.
          </p>
        </KeyTakeawayCard>
      </div>
    </div>
  )
})

KeyTakeaways.displayName = 'KeyTakeaways'

export default KeyTakeaways
