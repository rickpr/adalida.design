import React from 'react'
import { IconArrowNarrowRight, IconLockShare } from '@tabler/icons-react'

import BadgeButton from 'components/badge_button'

const BadgeLink = ({ link }: { link: { url: string, text: string } }): React.ReactElement => {
  if (link.url.startsWith('mailto')) return <BadgeButton to={link.url}><IconLockShare />{link.text}</BadgeButton>
  return <BadgeButton to={link.url}>{link.text}<IconArrowNarrowRight /></BadgeButton>
}

export default BadgeLink
