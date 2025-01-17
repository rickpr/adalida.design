import React, { useContext } from 'react'

import DarkModeContext from 'dark_mode_context'
import Image from './image'

const Logo = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={`header-button ${darkMode ? 'dark' : 'light'}`}>
      <Image />
    </div>
  )
}
export default Logo
