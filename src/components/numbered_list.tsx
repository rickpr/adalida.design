import React from 'react'

interface Props {
  items: React.ReactNode[]
  bold?: boolean
}

const NumberedList = ({ items, bold = false }: Props): React.ReactElement => (
  <>
    {items.map((item, index) =>
      <div key={index} className='body-2'>
        <ol className={bold ? 'bold-numbers' : ''} start={index + 1}><li>{item}</li></ol>
      </div>
    )}
  </>
)

export default NumberedList
