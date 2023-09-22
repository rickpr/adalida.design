import React from 'react'
import 'sass/custom.scss'

import { Projects } from 'theme_context'
import useDarkMode from 'hooks/use_dark_mode'

import GainTain from 'components/adalida_page/projects/gaintain'
import Layout from 'components/adalida_page/projects/layout'

const GainTainPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout project={Projects.GainTain} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <GainTain />
    </Layout>
  )
}

export default GainTainPage