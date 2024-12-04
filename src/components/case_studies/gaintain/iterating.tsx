import { IconBulb } from '@tabler/icons-react'
import React from 'react'

import IteratingImage from 'images/gaintain/iterating.webp'

import Icon from './icon'

const Iterating = (): JSX.Element => {
  return (
    <div data-aos='fade-up' className='gaintain-side-by-side padding'>
      <div className='gaintain-explanation'>
        <section className='more-padding'>
          <Icon><IconBulb /></Icon>
          <h1 className='default-weight no-margin'>Iterating the Design:</h1>
          <div>
            The insights discovered in testing led to the redesign of components and elements specifically focused on:
          </div>
          <ol>
            <li>Order of elements</li>
          </ol>
          <ol start={2}>
            <li>Alignment of elements</li>
          </ol>
          <ol start={3}>
            <li>Proximity of elements to each other</li>
          </ol>
          <ol start={4}>
            <li>Layout of elements</li>
          </ol>
          <div>Keying on these issues led to fixing key navigational and layout issues.</div>
        </section>
      </div>
      <img src={IteratingImage} alt='Design iterations' />
    </div>
  )
}

export default Iterating
