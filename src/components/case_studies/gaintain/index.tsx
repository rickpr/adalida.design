import React, { useRef, type MutableRefObject } from 'react'

import useIsMobile from 'hooks/use_is_mobile'

import Footer from '../footer'
import TableOfContents from '../table_of_contents'

import About from './about'
import UhOh from './uh_oh'
import Analyzing from './analyzing'
import Mapping from './mapping'
import InternalTesting from './internal_testing'
import Iterating from './iterating'
import Validating from './validating'
import Developer from './developer'
import Track from './track'
import Instructions from './instructions'
import DataEntry from './data_entry'
import KeyTakeaways from './key_takeaways'

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
        <Analyzing ref={(node) => { attachRef('The Raw Data', node, sections) }} />
        <Mapping ref={(node) => { attachRef('Data Mapping', node, sections) }} />
        <InternalTesting ref={(node) => { attachRef('MVP Testing', node, sections) }} />
        <Iterating ref={(node) => { attachRef('Layout Iterations', node, sections) }} />
        <Validating ref={(node) => { attachRef('Edge Cases', node, sections) }} />
        <Developer ref={(node) => { attachRef('Developer Handoff', node, sections) }} />
        <Instructions ref={(node) => { attachRef('Interactions', node, sections) }} />
        <DataEntry />
        <Track />
        <KeyTakeaways ref={(node) => { attachRef('Retrospective', node, sections) }} />
        <Footer />
      </div>
    </>
  )
}

export default Gaintain
