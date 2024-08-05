import React, { useContext } from 'react'

import ScalableText from 'components/scalable_text'
import darkModeStyle from 'dark_mode_style'
import useSynchronizedTypewriter from 'hooks/use_synchronized_typewriter'
import DarkModeContext from 'dark_mode_context'

import Card from './card'

// The library will interpret HTML tags if we don't fool the parser.
// So the following function has a zero-width space after <
// https://en.wikipedia.org/wiki/Zero-width_space
// eslint-disable-next-line no-irregular-whitespace
const generateTypewriterString = (heading: string, text: string): string => `<​${heading}> ${text} </${heading}>`

const h1String = generateTypewriterString('H1', '48')
const h2String = generateTypewriterString('H2', '36')
const h3String = generateTypewriterString('H3', '24')
const h4String = generateTypewriterString('H4', '18')
const h5String = generateTypewriterString('H5', '16')

const VisualIdentity = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { text: color } = darkModeStyle(darkMode)
  const fontFamily = 'Avenir Next'
  const SynchronizedTypewriter = useSynchronizedTypewriter()

  return (
    <Card>
      <div>
        <div className='flex-center'>
          <ScalableText text='A' color={color} customStyles={{ fontFamily }} />
          <ScalableText
            text='b'
            color='none'
            customStyles={{ fontFamily, stroke: color, strokeWidth: '0.1px' }}
          />
        </div>
        <h1><SynchronizedTypewriter string={fontFamily} styles={{ fontFamily }}/></h1>
        <hr />
        <h1><SynchronizedTypewriter string={h1String} styles={{ fontFamily }}/></h1>
        {/* Make the container width fixed */}
        <h1 style={{ visibility: 'hidden', whiteSpace: 'nowrap', maxHeight: 0, margin: 0 }}>{h1String}&nbsp;</h1>
        <hr />
        <h2><SynchronizedTypewriter string={h2String} styles={{ fontFamily }}/></h2>
        <hr />
        <h3><SynchronizedTypewriter string={h3String} styles={{ fontFamily }}/></h3>
        <hr />
        <h4><SynchronizedTypewriter string={h4String} styles={{ fontFamily }}/></h4>
        <hr />
        <h5><SynchronizedTypewriter string={h5String} styles={{ fontFamily }}/></h5>
      </div>
    </Card>
  )
}

export default VisualIdentity
