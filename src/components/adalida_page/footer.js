import React, { useContext } from 'react'
import { IconFileInfo, IconBrandDribbble, IconBrandLinkedin, IconMail } from '@tabler/icons'

import { ThemeContext } from 'theme_context'

import 'sass/adalida_page/footer.scss'

const Footer = () => {
  const borderColor = useContext(ThemeContext).primary || '#FFFFFF'
  const borderStyle = `0.25vh solid ${borderColor}`
  const borderStyles = {
    borderLeft: borderStyle,
    borderRight: borderStyle,
    borderBottom: borderStyle
  }
  const linkStyle = { color: '#FFFFFF', pointerEvents: 'all' }
  return (
    <nav className='adalida-footer' style={borderStyles}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', margin: '0 auto' }}>
        <a href='#' style={linkStyle}><IconFileInfo /></a>
        <a
          href='https://dribbble.com/adalida-baca'
          style={linkStyle}
          target='_blank'
          rel='noreferrer'
        >
          <IconBrandDribbble />
        </a>
        <a
          href='https://www.linkedin.com/in/adalidabaca'
          style={linkStyle}
          target='_blank'
          rel='noreferrer'
        >
          <IconBrandLinkedin />
        </a>
        <a
          href='mailto:adalida.baca@gmail.com'
          style={linkStyle}
          target='_blank'
          rel='noreferrer'
        >
          <IconMail />
        </a>
      </div>
    </nav>
  )
}

export default Footer
