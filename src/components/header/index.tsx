import React, { useContext } from 'react'

import { HomePageContext } from '../home_page_context'
import PortfolioPageSwitch from './portfolio_page_switch'
import DarkModeButton from './dark_mode_button'
import HomeLink from './home_link'
import BackButton from './back_button'

const Header = (): JSX.Element => {
  const { togglePortfolioPage } = useContext(HomePageContext)
  const isHomePage = togglePortfolioPage !== undefined
  return (
    <div className='navbar' >
      <div className='relative'>
      <HomeLink hide={!isHomePage} />
      <BackButton hide={isHomePage} />
      </div>
      <div className='flex-center'>
        <PortfolioPageSwitch hide={!isHomePage} />
        <DarkModeButton />
      </div>
    </div>
  )
}

export default Header
