import React from 'react'

import SectionHeading from 'components/section_heading'

interface Props {
  title: string
  children: React.ReactNode
}

const Section = ({ title, children }: Props): JSX.Element => {
  return (
    <div data-aos='fade-up'>
      <SectionHeading title={title} />
      {children}
    </div>
  )
}

export default Section
