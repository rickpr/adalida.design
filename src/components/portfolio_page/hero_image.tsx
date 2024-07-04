import React from 'react'

import Image from 'components/image'
import type { Project } from 'projects'

const HeroImage = ({ project }: { project: Project }): JSX.Element => {
  const { name, heroImage } = project
  return (
    <div className='portfolio-image'>
      <Image alt={`${name} cover`} path={heroImage} style={{ width: '100%', height: '100%', borderRadius: '14px' }} />
    </div>
  )
}

export default HeroImage
