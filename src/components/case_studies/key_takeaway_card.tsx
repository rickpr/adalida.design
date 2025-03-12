import React, { useContext } from 'react'

import Context from './context'

interface Props {
  title: string
  children: React.ReactNode
}

const KeyTakeawayCard = ({ title, children }: Props): JSX.Element => {
  const color = useContext(Context)?.color
  return (
    <div className='glass card' data-aos='fade-up'>
      <div className='key-takeaways-card-content'>
        <div className='subtitle-2' style={color !== undefined ? { color } : {}}><strong>{title}</strong></div>
        {children}
      </div>
    </div>
  )
}

export default KeyTakeawayCard
