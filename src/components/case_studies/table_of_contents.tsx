import React, { useEffect, useState, type MutableRefObject } from 'react'

const TableOfContents = ({ links }: { links: Record<string, MutableRefObject<HTMLDivElement | null>> }): JSX.Element => {
  const [activeLink, setActiveLink] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = (): void => {
      let closestLink = null
      const halfwayDownViewport = window.scrollY + window.innerHeight / 2
      for (const [link, element] of Object.entries(links)) {
        if (element.current === null) return

        const elementTop = element.current.offsetTop
        if (halfwayDownViewport < elementTop) break

        closestLink = link
      }
      setActiveLink(closestLink)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [links])

  return (
    <div className='table-of-contents slide-in-from-left'>
      <strong>CONTENTS</strong>
      {Object.entries(links).map(([link, element]) => (
        <div key={link}>
          <button
            className={`link-button${activeLink === link ? ' active' : ''}`}
            onClick={() => { element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
          >
            {link}
          </button>
        </div>
      ))}
    </div>
  )
}

export default TableOfContents
