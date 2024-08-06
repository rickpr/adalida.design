import React from 'react'

import type { Project } from 'projects'

import HeroImage from './hero_image'
import Description from './description'

const Card = ({ project, reverse }: { project: Project, reverse: boolean }): JSX.Element => {
  return (
    <div className={`portfolio-card ${reverse ? 'reverse' : ''}`} data-aos='fade-up'>
      <HeroImage project={project} />
      <div className='project-description'>
        <Description project={project} />
      </div>
    </div>
  )
}

export default Card
