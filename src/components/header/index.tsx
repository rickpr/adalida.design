import React, { useContext } from 'react'

import DarkModeContext from 'dark_mode_context'
import PortfolioPageSwitch from './portfolio_page_switch'
import DarkModeButton from './dark_mode_button'
import HomeLink from './home_link'
import BackButton from './back_button'

const Header = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={`navbar ${darkMode && 'dark'}`} >
      <div className='relative flex-center'>
        <HomeLink />
        <BackButton />
      </div>
      <div className='flex-center'>
        <PortfolioPageSwitch />
        <DarkModeButton />
      </div>
    </div>
  )
}

export default Header
