import React, { useContext } from 'react'
import { IconArrowNarrowRight } from '@tabler/icons-react'

import DarkModeContext from 'dark_mode_context'
import type { Project } from 'projects'

const BadgesAndDescription = ({ project }: { project: Project }): React.ReactElement => {
  const { darkMode } = useContext(DarkModeContext)
  const { description, link, badges } = project
  const external = link?.url?.startsWith('http')
  const linkProps = external === true ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <>
      <div className='badge-list'>
        {Object.entries(badges).map(([text, color]) =>
          <div className={`badge badge-${color} ${darkMode && 'dark'}`} key={text}>{text}</div>
        )}
      </div>
      <div className='description'>{description}</div>
      {link !== undefined && (
        <a href={link.url} className='link' {...linkProps}>
          {link.text}<IconArrowNarrowRight />
        </a>
      )}
    </>
  )
}

export default BadgesAndDescription
