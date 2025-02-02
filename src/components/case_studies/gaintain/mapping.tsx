import { IconSitemap } from '@tabler/icons-react'
import React, { forwardRef, type Ref } from 'react'

import MappingImage from 'images/gaintain/mapping.webp'

import Icon from './icon'

const Mapping = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='gaintain-top-to-bottom' ref={ref}>
    <div className='gaintain-explanation'>
      <section>
        <Icon><IconSitemap /></Icon>
        <h5>Mapping the Data:</h5>
        <p>
          Notebooks are a trusted tool for lifters, but transitioning to a digital format required thoughtful planning.
          Using the Swift UI Framework, I focused on preserving the simplicity of pen-and-paper tracking while enhancing
          usability. Lo-fi mockups mapped key features like exercise tracking, instructional support, and organized
          daily workout plans into a seamless digital experience.
        </p>
      </section>
    </div>
    <img src={MappingImage} alt='Mockups' />
  </div>
))

Mapping.displayName = 'Mapping'

export default Mapping
