import React, { useRef } from 'react'

import useIsMobile from 'hooks/use_is_mobile'
import { Projects } from 'projects'

import Context from '../context'
import Footer from '../footer'
import TableOfContents from '../table_of_contents'

import Overview from './overview'
import ChallengeSolution from './challenge_solution'
import BrandPrinciples from './brand_principles'
import VisionBoard from './vision_board'
import ColorPalette from './color_palette'
import TypeGuidelines from './type_guidelines'
import ProportionsAndPadding from './proportions_and_padding'
import Considerations from './considerations'
import NextSteps from './next_steps'


// TODO: Create a more general pattern for this like a context as we do more case studies
const themeColor = '#C9450D'

const QuerqueCandles = (): JSX.Element => {
  const sections = {
    Overview: useRef(null),
    'Challenge / Solution': useRef(null),
    'Brand Principles': useRef(null),
    'Vision Board': useRef(null),
    'Color Palette': useRef(null),
    'Type Guidelines': useRef(null),
    'Proportions and Padding': useRef(null),
    Considerations: useRef(null),
    'Next Steps': useRef(null),
  }
  const isMobile = useIsMobile(1400)
  return (
    <Context.Provider value={Projects.QuerqueCandles}>
      {isMobile === false && <TableOfContents links={sections} color={themeColor} />}
      <div className='case-study-container'>
        <Overview ref={sections.Overview} />
        <ChallengeSolution ref={sections['Challenge / Solution']} />
        <BrandPrinciples ref={sections['Brand Principles']} />
        <VisionBoard ref={sections['Vision Board']} />
        <ColorPalette ref={sections['Color Palette']} />
        <TypeGuidelines ref={sections['Type Guidelines']} />
        <ProportionsAndPadding ref={sections['Proportions and Padding']} />
        <Considerations ref={sections.Considerations} />
        <NextSteps ref={sections['Next Steps']} />
        <Footer />
      </div>
    </Context.Provider>
  )
}

export default QuerqueCandles
