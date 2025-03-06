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
    Discovering: useRef(null),
    Research: useRef(null),
    Wireframing: useRef(null),
    Testing: useRef(null),
    Iterations: useRef(null),
    FinalDesign: useRef(null),
    Developer: useRef(null),
    InteractiveLibrary: useRef(null),
    Retrospective: useRef(null)
  }
  const isMobile = useIsMobile(1400)
  return (
    <>
      {isMobile === false && <TableOfContents links={sections} />}
      <div className='case-study-container'>
        <About ref={sections.About} />
        <Discovering ref={sections.Discovering} />
        <Research ref={sections.Research} />
        <Wireframing ref={sections.Wireframing} />
        <Testing ref={sections.Testing} />
        <Iterations ref={sections.Iterations} />
        <FinalDesign ref={sections.FinalDesign} />
        <Developer ref={sections.Developer} />
        <InteractiveLibrary ref={sections.InteractiveLibrary} />
        <Frictionless />
        <Track />
        <KeyTakeaways ref={sections.Retrospective} />
        <Footer />
      </div>
    </>
  )
}

export default Gaintain
