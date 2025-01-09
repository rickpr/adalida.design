import React, { useContext, useMemo } from 'react'

import PortfolioPage from './portfolio_page'
import AboutPage from './about_page'
import { HomePageContext } from './home_page_context'

const MainPage = (): JSX.Element | null => {
  const { isPortfolioPage } = useContext(HomePageContext)

  const content = useMemo(() => {
    if (isPortfolioPage === null) return null // This prevents the wrong page from flashing in production
    return isPortfolioPage === true ? <PortfolioPage /> : <AboutPage />
  }, [isPortfolioPage])

  return content
}

export default MainPage
