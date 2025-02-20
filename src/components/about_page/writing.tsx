import React from 'react'

import Section from './section'

const writings = [
  { title: 'User Research and The Explanatory Gap', date: 'Dec ‘24', link: 'https://adalida.notion.site/User-Research-and-The-Explanatory-Gap-7389e1338004414e9926f7fe48e3f186' },
  { title: 'B.A of English - Philosophy | Work', date: 'Dec ‘24', link: 'https://adalida.notion.site/Adalida-s-B-A-English-Philosophy-13634efdeebd4c83ad11fabc7c4f09c0' },
  { title: 'Helpful Quotes', date: 'Dec ‘24', link: 'https://adalida.notion.site/Quotes-190c3454c79f8078ac8ae9e8b9594d6e' },
  { title: 'A New Mexican First and Foremost', date: 'Dec ‘24', link: 'https://adalida.notion.site/A-New-Mexican-First-and-Foremost-190c3454c79f80d28d34f48b34e8a65d' }
]

const Writing = (): JSX.Element => {
  return (
    <Section title='Writing'>
      <div className='btn writing-list'>
        {writings.map(writing => (
          <a href={writing.link} key={writing.title} className='writing'>
            <div>{writing.title}</div>
            <div className='separator' />
            <div>{writing.date}</div>
          </a>
        ))}
      </div>
    </Section>
  )
}

export default Writing
