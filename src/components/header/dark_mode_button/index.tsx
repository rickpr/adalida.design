import React, { useContext } from 'react'
import Icon from './icon'

import DarkModeContext from 'dark_mode_context'

const DarkModeButton = (): JSX.Element => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  return (
    <button
      className={`header-button ${darkMode ? 'dark' : 'light'}`}
      aria-label='Toggle dark mode'
      onClick={toggleDarkMode}
    >
      <Icon darkMode={darkMode} />
    </button>
  )
}

export default DarkModeButton
