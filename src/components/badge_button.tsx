import { Link } from 'gatsby'
import React, { useContext, useMemo } from 'react'

import DarkModeContext from 'dark_mode_context'

interface Props {
  to: string
  children: React.ReactNode
}

const BadgeButton = ({ to, children }: Props): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const className = useMemo(() => `btn badge big-badge badge-danger${darkMode ? ' dark' : ''}`, [darkMode])
  const { external, mailTo, rest } = useMemo(() => {
    const external = to.startsWith('http')
    const mailTo = to.startsWith('mailto')
    const rest = mailTo ? {} : { target: '_blank', rel: 'noopener noreferrer' }
    return { external, mailTo, rest }
  }, [to])

  if (external || mailTo) {
    return <a href={to} className={className} {...rest}>{children}</a>
  } else {
    return <Link to={to} className={className}>{children}</Link>
  }
}

export default BadgeButton
