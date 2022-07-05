import React from 'react'

import Card from '../card'
import SwiperCarousel from 'components/swiper_carousel'

import 'sass/adalida_page/cyph.scss'

const june23 = 'images/plato/research/june_23.png'
const june24 = 'images/plato/research/june_24.png'
const june28 = 'images/plato/research/june_28.png'
const june29 = 'images/plato/research/june_29.png'

const Understand = () => {
  const centerStyles = {
    placeContent: 'space-between center',
    placeItems: 'center center'
  }
  const text = (
    <div style={{ columnWidth: '80ch', width: '100%' }}>
      <p>
        My research demographic focused on women who enjoy shopping luxury brands.
      </p>

      <p>
        I conducted phone interviews and built empathy maps to learn about what women enjoyed when online shopping.
      </p>
      <p>
        After, I created an information architecture and began designing in high-fidelity.
      </p>

    </div>
  )
  const carousel = <SwiperCarousel images={[june23, june24, june28, june29]} />
  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    width: '100%',
    height: '100%',
    ...centerStyles
  }
  return (
    <Card title='// Understand & Empathize'>
      <div style={style}>
        {text}
        {carousel}
      </div>
    </Card>
  )
}

export default Understand