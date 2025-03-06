import React from 'react'

import NumberedList from 'components/numbered_list'
import Description from './description'

interface Props {
  items: Array<{ title: string, description: string }>
  italic?: boolean
}

const Ordered = ({ items, italic = false }: Props): React.ReactElement => (
  <NumberedList
    bold
    items={items.map((item) =>
      <Description key={item.title} title={item.title} description={item.description} italic={italic} />
    )}
  />
)

export default Ordered
