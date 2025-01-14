import Spline from '@splinetool/react-spline'
import React from 'react'

import type { Project } from 'projects'

const SplineHeroImage = ({ project }: { project: Project }): JSX.Element | null => {
  return <Spline className='portfolio-hero-image spline' scene={project.heroImage} />
}

export default SplineHeroImage
