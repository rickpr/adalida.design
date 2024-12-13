import { Link } from 'gatsby'
import React, { useContext } from 'react'
import { IconArrowNarrowRight } from '@tabler/icons-react'

import DarkModeContext from 'dark_mode_context'
import type { Project } from 'projects'

const BadgesAndDescription = ({ project }: { project: Project }): React.ReactElement => {
  const { darkMode } = useContext(DarkModeContext)
  const { description, link, badges } = project
  const external = Boolean(link?.url?.startsWith('http'))

  return (
    <>
      <div className='badge-list'>
        {badges.map(badge =>
          <div className={`badge badge-info text-swap ${darkMode && 'dark'}`} key={badge}>{badge}</div>
        )}
      </div>
      <div className='description'>{description}</div>
      {link !== undefined && (
        external ? (
          <a href={link.url} className='link' target='_blank' rel='noopener noreferrer'>
            {link.text}<IconArrowNarrowRight />
          </a>
        ) : (
          <Link to={link.url} className='link'>{link.text}<IconArrowNarrowRight /></Link>
        )
      )}
    </>
  )
}

export default BadgesAndDescription
