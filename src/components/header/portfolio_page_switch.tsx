import React, { useContext } from 'react'

import { HomePageContext } from '../home_page_context'

const PortfolioPageSwitch = (): JSX.Element => {
  const { isPortfolioPage, setPortfolioPage } = useContext(HomePageContext)
  const hide = setPortfolioPage === undefined
  return (
    <div className={`switch-container${hide ? ' hide-up' : ''}`}>
      <div className='switch-grid'>
        <div
          className='switch-indicator'
          style={{ transform: isPortfolioPage === true ? undefined : 'translateX(100%)' }}
        />
        <button
          className={`switch-button${isPortfolioPage === true ? ' active' : ''}`}
          onClick={() => { setPortfolioPage?.(true) }}
        >
          PORTFOLIO
        </button>
        <button
          className={`switch-button${isPortfolioPage === false ? ' active' : ''}`}
          onClick={() => { setPortfolioPage?.(false) }}
        >
          ABOUT
        </button>
      </div>
    </div>
  )
}

export default PortfolioPageSwitch
