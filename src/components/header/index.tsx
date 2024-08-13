import React, { useContext } from 'react'

import DarkModeContext from 'dark_mode_context'
import { HomePageContext } from '../home_page_context'
import PortfolioPageSwitch from './portfolio_page_switch'
import DarkModeButton from './dark_mode_button'
import HomeLink from './home_link'
import BackButton from './back_button'

const Header = (): JSX.Element => {
  const { togglePortfolioPage } = useContext(HomePageContext)
  const { darkMode } = useContext(DarkModeContext)
  const isHomePage = togglePortfolioPage !== undefined
  return (
    <div className={`thin-glass navbar ${darkMode && 'dark'}`} >
      {isHomePage ? <HomeLink /> : <BackButton />}
      {isHomePage && <PortfolioPageSwitch />}
      <DarkModeButton />
    </div>
  )
}

export default Header
