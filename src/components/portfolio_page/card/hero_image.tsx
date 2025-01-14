import React from 'react'

import Image from 'components/image'
import type { Project } from 'projects'

const Spline = React.lazy(() => import('@splinetool/react-spline'))

const HeroImage = ({ project }: { project: Project }): JSX.Element => {
  const { name, heroImage } = project
  return (
    <div className='portfolio-container-for-hero-image'>
      {heroImage.includes('prod.spline.design')
        ? <Spline className='portfolio-hero-image spline' scene={heroImage} />
        : <Image className='portfolio-hero-image' alt={`${name} cover`} path={heroImage} />
      }
    </div>
  )
}

export default HeroImage
