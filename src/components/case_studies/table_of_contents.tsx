import React, { useContext, useEffect, useState, type MutableRefObject } from 'react'

import Context from './context'

interface Props {
  links: Record<string, MutableRefObject<HTMLDivElement | null>>
  color?: string
}

const defaultColor = '#F5F5F5'

const TableOfContents = ({ links }: Props): JSX.Element => {
  const [activeLink, setActiveLink] = useState<string | null>(null)
  const [scrolledTooFar, setScrolledTooFar] = useState(true)
  const color = useContext(Context)?.color ?? defaultColor

  useEffect(() => {
    const handleScroll = (): void => {
      console.log('scrolledTooFar', scrolledTooFar)
      let closestLink = null
      const orderedLinks = Object.entries(links)
      const halfwayDownViewport = window.scrollY + window.innerHeight / 2
      for (const [link, element] of orderedLinks) {
        if (element.current === null) return

        const elementTop = element.current.offsetTop
        if (halfwayDownViewport < elementTop) break

        closestLink = link
      }
      setActiveLink(closestLink)
      if (closestLink === orderedLinks[orderedLinks.length - 1][0]) {
        const lastElement = orderedLinks[orderedLinks.length - 1][1].current
        const bottomOfLastElement = lastElement !== null ? lastElement.offsetTop + lastElement.offsetHeight : Infinity
        setScrolledTooFar(halfwayDownViewport > bottomOfLastElement)
      } else {
        setScrolledTooFar(false)
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [links, scrolledTooFar])

  return (
    <div className={`table-of-contents${scrolledTooFar ? ' hide-left' : ''}`}>
      <strong>CONTENTS</strong>
      {Object.entries(links).map(([link, element]) => {
        const active = activeLink === link
        return (
          <div key={link}>
            <button
              className={`link-button${active ? ' active' : ''}`}
              style={active ? { color } : {}}
              onClick={() => { element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
            >
              {link}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default TableOfContents
