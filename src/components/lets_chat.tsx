import { IconMailFilled } from '@tabler/icons-react'
import React from 'react'

import BadgeButton from './badge_button'

const LetsChat = (): JSX.Element => {
  return (
    <BadgeButton to='mailto:hi@adalida.design'>
      <IconMailFilled height='1em' width='1em' /> LET&apos;S CHAT
    </BadgeButton>
  )
}

export default LetsChat
