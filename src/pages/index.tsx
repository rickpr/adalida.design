import React, { useLayoutEffect } from 'react'

import Portfolio from './portfolio'
import Seo from 'components/seo'

const Root = (): JSX.Element => {
  useLayoutEffect(() => { history.replaceState({}, '', '/portfolio') }, [])
  return <Portfolio />
}

export const Head = Seo

export default Root
