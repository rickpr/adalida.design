import React from 'react'

interface Props {
  number: number
  title: string
  children: React.ReactNode
}

const Learning = ({ number, title, children }: Props): JSX.Element => {
  return (
    <div className='gaintain-learning'>
      <div className='big semibold'>{number}</div>
      <div className='paragraphs'>
        <p><em><strong>{title}</strong></em></p>
        {children}
      </div>
    </div>
  )
}

export default Learning
