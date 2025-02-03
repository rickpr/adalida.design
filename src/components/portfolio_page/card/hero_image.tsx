import React from 'react'

import Image from 'components/image'
import type { Project } from 'projects'

import HeroVideos from './hero_videos'

const HeroImage = ({ project }: { project: Project }): JSX.Element => {
  const { name, heroImage } = project
  return (
    <div className='portfolio-container-for-hero-image'>
      {Array.isArray(heroImage)
        ? <HeroVideos videos={heroImage} />
        : <Image className='portfolio-hero-image' alt={`${name} cover`} path={heroImage} />
      }
    </div>
  )
}

export default HeroImage
