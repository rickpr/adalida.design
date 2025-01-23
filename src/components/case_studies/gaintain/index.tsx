import React, { useRef, type MutableRefObject } from 'react'

import useIsMobile from 'hooks/use_is_mobile'

import Footer from '../footer'
import TableOfContents from '../table_of_contents'

import About from './about'
import Mockups from './mockups'
import UhOh from './uh_oh'
import Understanding from './understanding'
import Mapping from './mapping'
import ABTesting from './ab_testing'
import Iterating from './iterating'
import Validating from './validating'
import Developer from './developer'
import Track from './track'
import Instructions from './instructions'
import DataEntry from './data_entry'
import KeyLearnings from './key_learnings'

const attachRef = (
  name: string,
  node: HTMLDivElement | null,
  sections: MutableRefObject<Record<string, HTMLDivElement | null>>
): void => { sections.current[name] = node }

const Gaintain = (): JSX.Element => {
  const sections = useRef<Record<string, HTMLDivElement | null>>({
    Overview: null,
    'The Problem': null,
    'The Raw Data': null,
    'Data Mapping': null,
    'MVP Testing': null,
    'Layout Iterations': null,
    'Edge Cases': null,
    'Developer Handoff': null,
    Interactions: null,
    Retrospective: null
  })
  const isMobile = useIsMobile(1400)
  return (
    <>
      {isMobile === false && <TableOfContents links={sections} />}
      <div className='case-study-container'>
        <About ref={(node) => { attachRef('Overview', node, sections) }} />
        <UhOh ref={(node) => { attachRef('The Problem', node, sections) }} />
        <Understanding ref={(node) => { attachRef('The Raw Data', node, sections) }} />
        <Mapping ref={(node) => { attachRef('Data Mapping', node, sections) }} />
        <ABTesting ref={(node) => { attachRef('MVP Testing', node, sections) }} />
        <Iterating ref={(node) => { attachRef('Layout Iterations', node, sections) }} />
        <Validating ref={(node) => { attachRef('Edge Cases', node, sections) }} />
        <Developer ref={(node) => { attachRef('Developer Handoff', node, sections) }} />
        <Mockups />
        <Instructions ref={(node) => { attachRef('Interactions', node, sections) }} />
        <DataEntry />
        <Track />
        <KeyLearnings ref={(node) => { attachRef('Retrospective', node, sections) }} />
        <Footer />
      </div>
    </>
  )
}

export default Gaintain
