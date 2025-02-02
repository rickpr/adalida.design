import { useEffect, useState } from 'react'

import darkModeStyle from 'dark_mode_style'

const setHTMLAttributes = (darkMode: boolean): void => {
  const themeColorTag = document.querySelector('meta[name="theme-color"]')
  const color = darkModeStyle(darkMode).background
  themeColorTag?.setAttribute('content', color)
  const bodyTag = document.querySelector('body')
  bodyTag?.classList.add(darkMode ? 'dark' : 'light')
  bodyTag?.classList.remove(darkMode ? 'light' : 'dark')
}

const useDarkMode = (): [boolean | null, () => void] => {
  // Use this hook only from *pages*, not from components.
  const [darkMode, setDarkMode] = useState<boolean | null>(() => {
    if (typeof window === 'undefined') return null
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode') ?? 'true')
    setHTMLAttributes(isDarkMode as boolean)
    return isDarkMode
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = (): void => {
    setDarkMode(oldDarkMode => {
      if (oldDarkMode === null) return null
      const isDarkMode = !oldDarkMode
      setHTMLAttributes(isDarkMode)
      return isDarkMode
    })
  }
  return [darkMode, toggleDarkMode]
}

export default useDarkMode
