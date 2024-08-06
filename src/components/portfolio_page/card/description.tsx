import React from 'react'

import type { Project } from 'projects'

import BadgesAndDescription from './badges_and_description'
import NameAndCategory from './name_and_category'

const Description = ({ project }: { project: Project }): React.ReactElement => {
  return (
    <div className='project-description'>
      <NameAndCategory project={project} />
      <BadgesAndDescription project={project} />
    </div>
  )
}

export default Description
