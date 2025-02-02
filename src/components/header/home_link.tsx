import { Link } from 'gatsby'
import React, { useContext } from 'react'

import useIsMobile from 'hooks/use_is_mobile'
import { HomePageContext } from '../home_page_context'
import Logo from '../logo'

const HomeLink = (): JSX.Element | null => {
  const { isPortfolioPage } = useContext(HomePageContext)
  const hide = isPortfolioPage === undefined
  const isMobile = useIsMobile(1000)
  if (isMobile === null) return null

  return (
    <Link className={`home-link absolute ${hide ? 'hide-up' : ''}`} to='/'>
      {isMobile && <Logo />}
      <div className='header-title'>
        {!isMobile &&
         <>
           <span className='name'>ADALIDA</span>
           <span>Product Designer</span>
         </>
        }
      </div>
    </Link>
  )
}

export default HomeLink
