import { IconMailFilled } from '@tabler/icons-react'
import React, { useContext } from 'react'

import DarkModeContext from 'dark_mode_context'

const LetsChat = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <a className={`badge big-badge badge-danger ${darkMode && 'dark'}`} href='mailto:hi@adalida.design'>
      <IconMailFilled /> Let&apos;s Chat
    </a>
  )
}

export default LetsChat
