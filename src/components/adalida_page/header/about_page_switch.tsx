import React from 'react'
import { glassStyles } from '../styles'

const switchGridStyle = {
  color: 'unset',
  display: 'grid',
  background: 'none',
  border: 'none',
  position: 'relative' as const,
  gridAutoFlow: 'column',
  gridAutoColumns: 'minmax(0, 1fr)',
  placeItems: 'center',
  placeContent: 'center',
  gap: '12px',
  padding: '6px',
  minHeight: '100%',
  pointerEvents: 'auto' as const,
  cursor: 'pointer' as const
}

const switchTextStyle = {
  fontSize: '16px',
  lineHeight: 1
}

const containerStyle = {
  ...glassStyles,
  padding: '6px',
  position: 'absolute' as const,
  top: '20px',
  left: '50%',
  transform: 'translateX(-50%)'
}

interface Props {
  isAboutPage?: boolean
  setIsAboutPage?: (updateAboutPage: boolean | ((isAboutPage: boolean) => boolean)) => void
}

const toggleAboutPage = (setIsAboutPage?: (updateAboutPage: (isAboutPage: boolean) => boolean) => void): void => {
  if (setIsAboutPage === undefined) return

  setIsAboutPage((isAboutPage: boolean) => {
    history.pushState({}, '', isAboutPage ? '/' : '/about')
    return !isAboutPage
  })
}

const AboutPageSwitch = ({ isAboutPage, setIsAboutPage }: Props): JSX.Element => {
  return (
    <div style={containerStyle}>
      <button style={switchGridStyle} onClick={() => { toggleAboutPage(setIsAboutPage) }}>
        <span style={switchTextStyle}>WORK</span>
        <span style={switchTextStyle}>ABOUT</span>
        <div style={{
          ...glassStyles,
          position: 'absolute',
          backdropFilter: undefined,
          border: '1px solid rgba(255, 255, 255, 0.25)',
          width: '50%',
          height: '100%',
          transition: 'all 0.2s ease-in-out',
          left: 0,
          transform: isAboutPage !== true ? undefined : 'translateX(100%)'
        }} />
      </button>
    </div>
  )
}

export default AboutPageSwitch