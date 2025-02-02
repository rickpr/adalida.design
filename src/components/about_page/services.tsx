import React from 'react'

import Section from './section'
import Card from './card'


interface Service {
  title: string
  description: string
  listHeading: string
  bulletPoints: string[]
}

const Cards: Service[] = [
  {
    title: 'Website Design',
    description: `
      Concentrating in developing dynamic websites from the ground up, I begin by understanding your audience to
      create a responsive design. I ensure your website not only meets but exceeds user expectations and business goals.
    `,
    listHeading: 'Elevate your Online Presence',
    bulletPoints: [
      'Strategic Web Development',
      'User-Centric Design',
      'Responsive Design',
      'Content Management Systems',
      'Search Engine Optimization',
      'Post-Launch Support'
    ]
  },
  {
    title: 'Product Design',
    description: `
      I specialize in turning initial ideas into successful products. Through each development phase, I focus on
      comprehensive user research and strategic design execution, ensuring products meet and anticipate user needs.
    `,
    listHeading: 'From 0 to 1',
    bulletPoints: [
      'In-Depth User Research',
      'Strategic Development',
      'Iterative Prototyping',
      'Detailed Design Execution',
      'Cross-Collaboration',
      'Accessibility & Inclusivity',
      'Launch, Support, and Iteration'
    ]
  },
  {
    title: 'Brand Design',
    description: `
      Create a lasting impression with bespoke branding services for your brand's unique identity and values.
      From the initial strategy to the final guidelines, I provide the tools you need to stand out and resonate
      with your audience.
    `,
    listHeading: 'Build Your Brand Identity',
    bulletPoints: [
      'Brand Strategy',
      'Logo Design',
      'Assets',
      'Color Palette',
      'Typography',
      'Brand Guidelines',
      'Package Design'
    ]
  }
]

const Services = (): JSX.Element => {
  return (
    <Section title='Services'>
      <div className='stacking-cards'>
        {Cards.map(({ title, description, listHeading, bulletPoints }, index) => (
          <Card title={title} key={index}>
            <p>{description}</p>
            <div className='caption-1'><strong>{listHeading}</strong></div>
            <ul>
              {bulletPoints.map((point, index) => <li key={index}>{point}</li>)}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Services
