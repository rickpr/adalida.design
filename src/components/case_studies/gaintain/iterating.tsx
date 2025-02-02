import { IconBulb } from '@tabler/icons-react'
import React, { forwardRef, type Ref } from 'react'

import NumberedList from 'components/numbered_list'
import IteratingImage from 'images/gaintain/iterating.webp'

import Icon from './icon'

const Iterating = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => (
  <div data-aos='fade-up' className='gaintain-side-by-side padding' ref={ref}>
    <div className='gaintain-explanation'>
      <section className='more-padding'>
        <Icon><IconBulb /></Icon>
        <h5>Iterating the Design:</h5>
        <p>
          Testing insights guided a focused redesign of the app’s interface, addressing key navigational and layout
          challenges. Specific improvements included:
        </p>
        <NumberedList
          items={[
            'Order of elements: Rearranging components for better usability and logical flow.',
            'Alignment: Ensuring visual consistency to enhance clarity.',
            'Proximity: Grouping related elements to improve accessibility.',
            'Overall Layout: Streamlining the interface for a more intuitive user experience.',
          ]}
        />
        <p>
          These refinements resolved critical usability issues, creating a design that better supports users
          during workouts.
        </p>
      </section>
    </div>
    <img src={IteratingImage} alt='Design iterations' />
  </div>
))

Iterating.displayName = 'Iterating'

export default Iterating
