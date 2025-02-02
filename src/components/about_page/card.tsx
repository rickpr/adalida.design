import React from 'react'

interface Props {
  title: string
  children: React.ReactNode
}

const Card = ({ title, children }: Props): JSX.Element => {
  return (
    <div className='glass card' data-aos='fade-up'>
      <div className='about-card-content'>
        <h5><strong>{title}</strong></h5>
        {children}
      </div>
    </div>
  )
}

export default Card
