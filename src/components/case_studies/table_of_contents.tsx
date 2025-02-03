import React, { useEffect, useState, type MutableRefObject } from 'react'

const TableOfContents = ({ links }: { links: MutableRefObject<Record<string, HTMLDivElement | null>> }): JSX.Element => {
  const [activeLink, setActiveLink] = useState<string | null>(null)
  useEffect(() => {
    const handleScroll = (): void => {
      let closestLink = null
      const scrollPosition = window.scrollY
      for (const [link, element] of Object.entries(links.current)) {
        if (element !== null) {
          const elementTop = element.offsetTop
          if (scrollPosition >= elementTop) {
            closestLink = link
          } else {
            break
          }
        } else {
          break
        }
      }
      setActiveLink(closestLink)
    }
    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [links])

  return (
    <div className='table-of-contents'>
      <strong>CONTENTS</strong>
      {Object.entries(links.current).map(([link, element]) => (
        <div key={link}>
          <button className={`link-button${activeLink === link ? ' active' : ''}`} onClick={() => { element?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}>
            {link}
          </button>
        </div>
      ))}
    </div>
  )
}

export default TableOfContents
