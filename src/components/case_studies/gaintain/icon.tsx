import React, { useContext, useMemo } from 'react'

import DarkModeContext from 'dark_mode_context'
import darkModeStyle from 'dark_mode_style'

const Icon = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { background, text: color } = useMemo(() => darkModeStyle(!darkMode), [darkMode])
  return <div className='gaintain-icon' style={{ background, color }}>{children}</div>
}

export default Icon
