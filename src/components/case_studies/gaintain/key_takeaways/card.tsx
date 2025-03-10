import React from 'react'

interface Props {
  title: string
  children: React.ReactNode
}

const Card = ({ title, children }: Props): JSX.Element => {
  return (
    <div className='glass card' data-aos='fade-up'>
      <div className='key-takeaways-card-content'>
        <div className='subtitle-2'><strong>{title}</strong></div>
        {children}
      </div>
    </div>
  )
}

export default Card
