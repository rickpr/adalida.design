import React, { useContext } from 'react'
import { IconArrowNarrowRight } from '@tabler/icons-react'

import BadgeButton from 'components/badge_button'
import DarkModeContext from 'dark_mode_context'
import type { Project } from 'projects'

const BadgesAndDescription = ({ project }: { project: Project }): React.ReactElement => {
  const { darkMode } = useContext(DarkModeContext)
  const { description, link, badges } = project

  return (
    <>
      <div className='badge-list'>
        {badges.map(badge =>
          <div className={`badge caption-2 badge-info text-swap ${darkMode && 'dark'}`} key={badge}>{badge}</div>
        )}
      </div>
      {description}
      {link !== undefined && <BadgeButton to={link.url}>{link.text}<IconArrowNarrowRight /></BadgeButton>}
    </>
  )
}

export default BadgesAndDescription
