import React from 'react'

import Image from 'components/image'
import type { Project } from 'projects'
import SplineHeroImage from './spline_hero_image'

const HeroImage = ({ project }: { project: Project }): JSX.Element => {
  const { name, heroImage } = project
  return (
    <div className='portfolio-container-for-hero-image'>
      {heroImage.includes('prod.spline.design')
        ? <SplineHeroImage project={project} />
        : <Image className='portfolio-hero-image' alt={`${name} cover`} path={heroImage} />
      }
    </div>
  )
}

export default HeroImage
