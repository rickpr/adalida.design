import React from 'react'

import MappingImage from 'images/gaintain/mapping.webp'

import Icon from './icon'
import MappingData from './icons/mapping_data'

const Mapping = (): JSX.Element => {
  return (
    <div data-aos='fade-up' className='gaintain-top-to-bottom'>
      <div className='gaintain-explanation'>
        <section>
          <Icon><MappingData /></Icon>
          <h1 className='default-weight no-margin'>Mapping the Data:</h1>
          <div>The data captured in notebooks are successful and reliable for lifters. How can we successfully convert
            the pen and paper method to a digital tracking method using the Swift UI Framework, which our Developer will
            be using to build the MVP, to build a better user experience?</div>
        </section>
      </div>
      <img src={MappingImage} alt='Mockups' />
    </div>
  )
}

export default Mapping
