import React, { useContext, useMemo } from 'react'

import DarkModeContext from 'dark_mode_context'

import UniversalLink from './universal_link'

interface Props {
  to: string
  children: React.ReactNode
  style?: React.CSSProperties
}

const BadgeButton = ({ to, children, style }: Props): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const className = useMemo(() => `btn badge big-badge badge-danger${darkMode ? ' dark' : ''}`, [darkMode])

  return (
    <div className={className} style={style}>
      <UniversalLink to={to} className='flex-center'>{children}</UniversalLink>
    </div>
  )
}

export default BadgeButton
