import React from 'react'

import type { Project } from 'projects'

import ProjectLink from './project_link'

const BadgesAndDescription = ({ project }: { project: Project }): React.ReactElement => {
  const { description, link, badges } = project

  return (
    <>
      <div className='badge-list'>
        {badges.map(badge => <div className='badge caption-1' key={badge}>{badge}</div>)}
      </div>
      {description}
      {link !== undefined && <ProjectLink link={link} />}
    </>
  )
}

export default BadgesAndDescription
