import { Link } from 'gatsby'
import React from 'react'

import useIsMobile from 'hooks/use_is_mobile'
import Logo from '../logo'

const HomeLink = ({ hide }: { hide: boolean }): JSX.Element | null => {
  const isMobile = useIsMobile(1000)
  if (isMobile === null) return null

  return (
    <Link className={`home-link absolute ${hide ? 'hide-up' : ''}`} to='/'>
      {isMobile && <Logo />}
      <div className='header-title'>
        {!isMobile &&
         <>
           <span className='name'>Adalida Baca /</span>
           <span>Product Designer</span>
         </>
        }
      </div>
    </Link>
  )
}

export default HomeLink
