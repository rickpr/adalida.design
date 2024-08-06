import React from 'react'

import type { Project } from 'projects'

import Description from './description'
import HeroImage from './hero_image'

const Card = ({ project, reverse }: { project: Project, reverse: boolean }): JSX.Element => {
  return (
    <div className={`portfolio-card ${reverse ? 'reverse' : ''}`} data-aos='fade-up'>
      <Description project={project} />
      <HeroImage project={project} />
    </div>
  )
}

export default Card
