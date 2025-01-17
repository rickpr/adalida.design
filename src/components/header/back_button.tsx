import { Link } from 'gatsby'
import React from 'react'

import { IconArrowLeft } from '@tabler/icons-react'


const BackButton = ({ hide }: { hide: boolean }): JSX.Element => {
  return <Link className={`header-button absolute ${hide ? 'hide-up' : ''}`} to='/' ><IconArrowLeft /></Link>
}

export default BackButton
