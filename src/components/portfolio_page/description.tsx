import React, { useContext } from 'react'
import { IconArrowNarrowRight } from '@tabler/icons-react'

import Image from 'components/image'
import DarkModeContext from 'dark_mode_context'
import type { Project } from 'projects'

const Description = ({ project }: { project: Project }): React.ReactElement => {
  const { darkMode } = useContext(DarkModeContext)
  const { category, description, name, link, badges, logo } = project

  return (
    <div className='project-description'>
      {logo !== undefined && (
        <div className='logo' style={{ backgroundColor: logo.color }}>
          <Image path={logo.image} alt={`${name} logo`} objectFit='contain' style={{ width: '100%', height: '100%' }} />
        </div>
      )}
      <div className='name-and-category'>
        <h1>{category}</h1>
        <h2>{name}</h2>
      </div>
      <div className='badge-list'>
        {Object.entries(badges).map(([text, color]) =>
          <div className={`badge badge-${color} ${darkMode && 'dark'}`} key={text}>{text}</div>
        )}
      </div>
      <div className='description'>{description}</div>
      {link !== undefined && <a href={link.url} className='link'>{link.text}<IconArrowNarrowRight /></a>}
    </div>
  )
}

export default Description
