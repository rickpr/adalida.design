import React from 'react'

import Image from 'components/image'
import type { Project } from 'projects'

const Description = ({ project }: { project: Project }): React.ReactElement => {
  const { description, name, link, roles, logo } = project
  const external = link?.url?.includes(':') ?? false
  const arrow = <div className={`arrow ${external ? 'rotated' : ''}`} />

  return (
    <div className='project-description'>
      {logo !== undefined && (
        <div className='logo' style={{ backgroundColor: logo.color }}>
          <Image path={logo.image} alt={`${name} logo`} objectFit='contain' style={{ width: '100%', height: '100%' }} />
        </div>
      )}
      <h1>{name}</h1>
      <div className='role-list'>
        {roles.map(role => <div className='role' key={role}>{role}</div>)}
      </div>
      <div className='description'>{description}</div>
      {link !== undefined && <a href={link.url} className='link'>{link.text}&nbsp; {arrow}</a>}
    </div>
  )
}

export default Description
