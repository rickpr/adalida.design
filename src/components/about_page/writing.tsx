import React from 'react'

import Section from './section'

const writings = [
  { title: 'Affordances + Signifiers', date: 'Dec ‘24' },
  { title: 'Visualizing the Paradox of User Experience Design', date: 'Dec ‘24' },
  { title: 'How I planned my Elopement with Notion', date: 'Dec ‘24' },
  { title: 'Leveraging the Fitch Style Proof In Design', date: 'Dec ‘24' },
  { title: 'Journey Mapping with Nielson, Norman, and Wittgenstein', date: 'Dec ‘24' },
  { title: 'User Research and The Explanatory Gap', date: 'Dec ‘24' },
  { title: 'B.A of English - Philosophy | Work', date: 'Dec ‘24' },
  { title: 'Helpful Quotes', date: 'Dec ‘24' },
  { title: 'A Burqueno before an American', date: 'Dec ‘24' }
]

const Writing = (): JSX.Element => {
  return (
    <Section title='Writing'>
      <div className='btn writing-list'>
        {writings.map(writing => (
          <div key={writing.title} className='writing'>
            <div>{writing.title}</div>
            <div className='separator' />
            <div>{writing.date}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Writing
