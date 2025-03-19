import React from 'react'
import { IconArrowNarrowRight, IconLockShare } from '@tabler/icons-react'

import UniversalLink from 'components/universal_link'

const BadgeLink = ({ link }: { link: { url: string, text: string } }): React.ReactElement =>
  <UniversalLink className='animated-link portfolio-project-link' to={link.url}>
    {link.url.startsWith('mailto') ? <><IconLockShare />{link.text}</> : <>{link.text}<IconArrowNarrowRight /></>}
  </UniversalLink>

export default BadgeLink
