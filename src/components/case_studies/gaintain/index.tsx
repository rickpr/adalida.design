import React, { useRef } from 'react'

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

const Gaintain = (): JSX.Element => {
  const sections =  {
    Overview: useRef(null),
    'The Problem': useRef(null),
    'The Raw Data': useRef(null),
    'Data Mapping': useRef(null),
    'MVP Testing': useRef(null),
    'Layout Iterations': useRef(null),
    'Edge Cases': useRef(null),
    'Developer Handoff': useRef(null),
    Interactions: useRef(null),
    Retrospective: useRef(null)
  }
  const isMobile = useIsMobile(1400)
  return (
    <>
      {isMobile === false && <TableOfContents links={sections} />}
      <div className='case-study-container'>
        <About ref={sections.Overview} />
        <UhOh ref={sections['The Problem']} />
        <Analyzing ref={sections['The Raw Data']} />
        <Mapping ref={sections['Data Mapping']} />
        <InternalTesting ref={sections['MVP Testing']} />
        <Iterating ref={sections['Layout Iterations']} />
        <Validating ref={sections['Edge Cases']} />
        <Developer ref={sections['Developer Handoff']} />
        <Instructions ref={sections.Interactions} />
        <DataEntry />
        <Track />
        <KeyTakeaways ref={sections.Retrospective} />
        <Footer />
      </div>
    </>
  )
}

export default Gaintain
