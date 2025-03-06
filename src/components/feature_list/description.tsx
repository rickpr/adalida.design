import React from 'react'

interface Props {
  title: string
  description: string
  italic?: boolean
}

const Description = ({ title, description, italic = false }: Props): React.ReactElement => {
  const titleElement = italic ? <em>{title}</em> : title
  return <><strong>{titleElement}</strong> &#8594; {description}</>
}

export default Description
