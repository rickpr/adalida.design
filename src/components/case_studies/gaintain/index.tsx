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
import Track from './track'
import KeyLearnings from './key_learnings'

const Gaintain = (): JSX.Element =>
  <div className='case-study-container'>
    <About />
    <Mockups />
    <UhOh />
    <Understanding />
    <Mapping />
    <ABTesting />
    <Iterating />
    <Validating />
    <Track/>
    <KeyLearnings />
    <Footer />
  </div>

export default Gaintain
