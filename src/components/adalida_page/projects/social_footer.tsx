import React, { useEffect, useState } from 'react'

import { IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react'

import BrandIcon from 'components/adalida_page/brand_icon'

const styles = {
  backgroundColor: '#1A1A1A',
  color: 'white',
  display: 'flex',
  padding: '5% 10%',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
  position: 'relative' as const,
  zIndex: 4,
  flexWrap: 'wrap' as const
}

const SocialFooter = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<string>('')
  useEffect(() => {
    // This is done because it won't build if we use window.location.href directly
    setCurrentPage(window.location.href)
  }, [])
  return (
    <div style={styles}>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        Coded by&nbsp;<a href="https://fdisk.co">https://fdisk.co</a>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        Share this on
        <BrandIcon href={`https://facebook.com/sharer.php?u=${currentPage}`} icon={<IconBrandFacebook />} />
        <BrandIcon href={`https://twitter.com/share?url=${currentPage}`} icon={<IconBrandTwitter />} />
        <BrandIcon href={`https://www.linkedin.com/shareArticle?url=${currentPage}`} icon={<IconBrandLinkedin />} />
      </div>
    </div>
  )
}

export default SocialFooter
