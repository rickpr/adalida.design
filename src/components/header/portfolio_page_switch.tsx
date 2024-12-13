import React, { useContext } from 'react'

import { HomePageContext } from '../home_page_context'

const PortfolioPageSwitch = ({ hide }: { hide: boolean }): JSX.Element => {
  const { isPortfolioPage, togglePortfolioPage } = useContext(HomePageContext)
  return (
    <div className={`switch-container ${hide ? 'hide-up' : ''}`}>
      <button className='switch-grid' onClick={() => { togglePortfolioPage?.() }}>
        <div
          className='switch-indicator'
          style={{ transform: isPortfolioPage === true ? undefined : 'translateX(100%)' }}
        />
        <div className='switch-text'>Portfolio</div>
        <div className='switch-text'>About</div>
      </button>
    </div>
  )
}

export default PortfolioPageSwitch
