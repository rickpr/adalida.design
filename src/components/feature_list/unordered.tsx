import React from 'react'

import Description from './description'

interface Props {
  items: Array<{ title: string, description: string }>
  italic?: boolean
}

const Unordered = ({ items, italic = false }: Props): React.ReactElement[] => (
  items.map((item) =>
    <ul key={item.title}>
      <li>
        <Description
          title={item.title}
          description={item.description}
          italic={italic}
        />
      </li>
    </ul>
  )
)

export default Unordered
