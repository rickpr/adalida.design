import { GatsbyImage, getImage, type GatsbyImageProps } from 'gatsby-plugin-image'
import React from 'react'

import ImageQuery from 'queries/image'

interface Props extends Omit<GatsbyImageProps, 'image'> {
  path: string
}

const Image = ({ path, ...gatsbyImageProps }: Props): JSX.Element => {
  const image = getImage(ImageQuery(path))
  if (image === undefined) throw new Error(`Image not found: ${path}`)
  return (
    <GatsbyImage image={image} {...gatsbyImageProps} />
  )
}

export default Image
