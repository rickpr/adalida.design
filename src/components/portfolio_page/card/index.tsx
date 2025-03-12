import React from 'react'

import useIsMobile from 'hooks/use_is_mobile'
import type { Project } from 'projects'

import HeroImage from './hero_image'
import Description from './description'

interface Props {
  project: Project
  reverse: boolean
}

const Card = ({ project, reverse }: Props): JSX.Element => {
  const isMobile = useIsMobile()
  const at = isMobile === true ? '50% 25%' : reverse ? '75%' : '25%'
  const style = {
    backgroundImage: `
      radial-gradient(
        circle at ${at},
        color-mix(in lch longer hue, ${project.color} 100%, #FFFFFF 100%),
        ${project.color}
      )
    `
  }
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
