import React from 'react'

const NumberedList = ({ items }: {items: string[] }): React.ReactElement => (
  <>{items.map((item, index) => <p key={item}><ol start={index + 1}><li>{item}</li></ol></p>)}</>
)

export default NumberedList
