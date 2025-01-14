import React from 'react'

import Footer from '../footer'

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

const Gaintain = (): JSX.Element =>
  <div className='case-study-container'>
    <About />
    <UhOh />
    <Understanding />
    <Mapping />
    <ABTesting />
    <Iterating />
    <Validating />
    <Developer />
    <Mockups />
    <Instructions />
    <DataEntry />
    <Track/>
    <KeyLearnings />
    <Footer />
  </div>

export default Gaintain
