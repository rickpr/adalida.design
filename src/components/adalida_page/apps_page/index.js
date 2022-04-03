import React, { useEffect, useRef, useState } from 'react'
import { minBy } from 'lodash'

import { ThemeContext, Themes } from 'theme_context'
import useIsMobile from 'hooks/use_is_mobile'

import App from '../app'
import Layout from '../layout'
import SideNavigation from './side_navigation'

const AppsPage = () => {
  const isMobile = useIsMobile()

  const navigationLinks = {
    Cyph: useRef(),
    Zeno: useRef()
  }
  const [closestProject, setClosestProject] = useState('Cyph')

  const cyph = (
    <App
      key='cyph'
      forwardRef={navigationLinks.Cyph}
      title='Cyph'
    />
  )

  const zeno = (
    <App
      key='zeno'
      forwardRef={navigationLinks.Zeno}
      title='Zeno'
    />
  )

  const projects = [cyph, zeno]
  const scrollRef = useRef()
  useEffect(() => {
    const updateClosestProject = () => {
      const distanceFromWindow = ([_, ref]) => {
        const { left, top } = ref.current.getBoundingClientRect()
        return Math.pow(left, 2) + Math.pow(top, 2)
      }
      const [closestProject] = minBy(Object.entries(navigationLinks), distanceFromWindow)
      setClosestProject(closestProject)
    }
    scrollRef.current.addEventListener('scroll', updateClosestProject)
    updateClosestProject()
    return () => window.removeEventListener('scroll', updateClosestProject)
  }, [])

  return (
    <ThemeContext.Provider value={Themes[closestProject]}>
      <Layout>
        <div
          style={{
            scrollSnapType: 'both mandatory',
            overflow: 'auto',
            height: '100vh',
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'column'
          }}
          ref={scrollRef}>
          {projects}
        </div>
        <SideNavigation links={navigationLinks} />
      </Layout>
    </ThemeContext.Provider>
  )
}

export default AppsPage
