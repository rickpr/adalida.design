import React from 'react'

const NumberedList = ({ items }: {items: string[] }): React.ReactElement => (
  <>{items.map((item, index) => <div key={item} className='body-2'><ol start={index + 1}><li>{item}</li></ol></div>)}</>
)

export default NumberedList
