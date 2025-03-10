import React, { useContext, useMemo } from 'react'

import DarkModeContext from 'dark_mode_context'

import UniversalLink from './universal_link'

interface Props {
  to: string
  children: React.ReactNode
}

const BadgeButton = ({ to, children }: Props): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const className = useMemo(() => `btn badge big-badge badge-danger${darkMode ? ' dark' : ''}`, [darkMode])

  return <UniversalLink to={to} className={className}>{children}</UniversalLink>
}

export default BadgeButton
