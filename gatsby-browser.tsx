/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import type { WrapPageElementBrowserArgs } from 'gatsby'
import React from 'react'

import { HomePageProvider } from 'components/home_page_context'
import Layout from 'components/layout'
import useDarkMode from 'hooks/use_dark_mode'
import useIsMobile from 'hooks/use_is_mobile'

import './src/sass/index.scss'


const WrapPageElement = ({ element, props }: WrapPageElementBrowserArgs): JSX.Element | null => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  const isMobile = useIsMobile(768)
  if (isMobile === null || darkMode === null) return null

  return (
    <HomePageProvider pathname={props.location.pathname}>
      <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
        {element}
      </Layout>
    </HomePageProvider>
  )
}

export { WrapPageElement as wrapPageElement }
