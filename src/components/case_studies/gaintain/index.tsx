import React, { useRef } from 'react'

import useIsMobile from 'hooks/use_is_mobile'

import Footer from '../footer'
import TableOfContents from '../table_of_contents'

import About from './about'
import Discovering from './discovering'
import Research from './research'
import Wireframing from './wireframing'
import Testing from './testing'
import Iterations from './iterations'
import FinalDesign from './final_design'
import Developer from './developer'
import Track from './track'
import InteractiveLibrary from './interactive_library'
import Frictionless from './frictionless'
import KeyTakeaways from './key_takeaways'

const Gaintain = (): JSX.Element => {
  const sections = {
    About: useRef(null),
    Discovery: useRef(null),
    Research: useRef(null),
    Wireframes: useRef(null),
    Tests: useRef(null),
    Iterations: useRef(null),
    'Final Design': useRef(null),
    Handoff: useRef(null),
    Interactions: useRef(null),
    Retrospective: useRef(null)
  }
  const isMobile = useIsMobile(1400)
  return (
    <>
      {isMobile === false && <TableOfContents links={sections} />}
      <div className='case-study-container'>
        <About ref={sections.About} />
        <Discovering ref={sections.Discovery} />
        <Research ref={sections.Research} />
        <Wireframing ref={sections.Wireframes} />
        <Testing ref={sections.Tests} />
        <Iterations ref={sections.Iterations} />
        <FinalDesign ref={sections['Final Design']} />
        <Developer ref={sections.Handoff} />
        <InteractiveLibrary ref={sections.Interactions} />
        <Frictionless />
        <Track />
        <KeyTakeaways ref={sections.Retrospective} />
        <Footer />
      </div>
    </>
  )
}

export default Gaintain
