import React, { useEffect, useMemo, useState } from 'react'

interface HomePageContextType {
  isPortfolioPage?: boolean
  togglePortfolioPage?: () => void
}

const HomePageContext = React.createContext<HomePageContextType>({})

const HomePageProvider = ({ pathname, children }: { pathname: string, children: JSX.Element }): JSX.Element => {
  const [isPortfolioPage, setIsPortfolioPage] = useState(pathname === '/' || pathname.startsWith('/portfolio'))
  const [isAboutPage, setIsAboutPage] = useState(pathname.startsWith('/about'))

  useEffect(() => {
    if (pathname === undefined) return

    if (pathname === '/' || pathname.startsWith('/portfolio')) {
      setIsPortfolioPage(true)
      setIsAboutPage(false)
    } else if (pathname.startsWith('/about')) {
      setIsPortfolioPage(false)
      setIsAboutPage(true)
    } else {
      setIsPortfolioPage(false)
      setIsAboutPage(false)
    }
  }, [pathname])

  const togglePortfolioPage = useMemo(() => {
    if (!isPortfolioPage && !isAboutPage) return

    return (): void => {
      setIsPortfolioPage((oldIsPortfolioPage: boolean) => {
        history.pushState({}, '', oldIsPortfolioPage ? '/about' : '/portfolio')
        setIsAboutPage(oldIsPortfolioPage)
        return !oldIsPortfolioPage
      })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [isPortfolioPage, isAboutPage])

  return (
    <HomePageContext.Provider value={{ isPortfolioPage, togglePortfolioPage }}>
      {children}
    </HomePageContext.Provider>
  )
}

export { HomePageContext, HomePageProvider }
