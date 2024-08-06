import React from 'react'

import useDarkMode from 'hooks/use_dark_mode'

import Layout from 'components/layout'
import SEO from 'components/seo'
import Gaintain from 'components/case_studies/gaintain'

const GaintainPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <Gaintain />
    </Layout>
  )
}

export const Head = (): JSX.Element => <SEO title='Gaintain' />

export default GaintainPage
