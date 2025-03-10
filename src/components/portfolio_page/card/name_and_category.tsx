import React from 'react'

import type { Project } from 'projects'

const NameAndCategory = ({ project }: { project: Project }): React.ReactElement => {
  const { category, name } = project

  return (
    <div className='name-and-category'>
      <h5><strong>{name}</strong></h5>
      <h6><strong>{category}</strong></h6>
    </div>
  )
}

export default NameAndCategory
