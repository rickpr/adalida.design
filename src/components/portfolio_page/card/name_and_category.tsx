import React  from 'react'

import Image from 'components/image'
import type { Project } from 'projects'

const NameAndCategory = ({ project }: { project: Project }): React.ReactElement => {
  const { category, name, logo } = project

  return (
    <>
      {logo !== undefined && (
        <div className='logo' style={{ backgroundColor: logo.color }}>
          <Image path={logo.image} alt={`${name} logo`} objectFit='contain' style={{ width: '100%', height: '100%' }} />
        </div>
      )}
      <div className='name-and-category'>
        <h1>{category}</h1>
        <h2>{name}</h2>
      </div>
    </>
  )
}

export default NameAndCategory
