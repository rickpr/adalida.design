import React, { useContext } from 'react'

import DarkModeContext from 'dark_mode_context'
import { HomePageContext } from '../home_page_context'

const PortfolioPageSwitch = ({ hide }: { hide: boolean }): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { isPortfolioPage, togglePortfolioPage } = useContext(HomePageContext)
  return (
    <div className={`switch-container${hide ? ' hide-up' : ''} ${darkMode ? 'dark' : 'light'}`}>
      <button className='switch-grid' onClick={() => { togglePortfolioPage?.() }}>
        <div
          className={`switch-indicator ${darkMode ? ' dark' : 'light'}`}
          style={{ transform: isPortfolioPage === true ? undefined : 'translateX(100%)' }}
        />
        <div className='switch-text'>Portfolio</div>
        <div className='switch-text'>About</div>
      </button>
    </div>
  )
}

export default PortfolioPageSwitch
