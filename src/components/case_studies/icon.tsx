import React, { useContext, useMemo } from 'react'

import DarkModeContext from 'dark_mode_context'
import darkModeStyle from 'dark_mode_style'

import Context from './context'

const Icon = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { background, text } = useMemo(() => darkModeStyle(!darkMode), [darkMode])
  const caseStudyColor = useContext(Context)?.color
  const color = text
  const backgroundColor = caseStudyColor ?? background
  return <div className='case-study-icon' style={{ backgroundColor, color }}>{children}</div>
}

export default Icon
