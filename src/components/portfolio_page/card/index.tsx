import React from 'react'

import type { Project } from 'projects'

import HeroImage from './hero_image'
import Description from './description'

interface Props {
  project: Project
  reverse: boolean
}

const Card = ({ project, reverse }: Props): JSX.Element => {
  const percent = reverse ? 75 : 25
  const style = { backgroundImage: `radial-gradient(circle at ${percent}%, ${project.gradientColors.inside}, ${project.gradientColors.outside})` }
  return (
    <div
      className={`portfolio-card${reverse ? ' reverse' : ''}`}
      data-aos='fade-up'
      data-aos-offset='0'
      style={style}
    >
      <HeroImage project={project} />
      <Description project={project} />
    </div>
  )
}

export default Card
