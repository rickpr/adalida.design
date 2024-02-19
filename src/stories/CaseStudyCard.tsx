import React from 'react'

import CaseStudyThemes from 'case_study_themes'
import { AboutTheme, ThemeContext } from 'theme_context'
import Card from 'components/adalida_page/card'
import useDarkModeStyle from 'hooks/use_dark_mode_style'

type ThemeName = keyof typeof CaseStudyThemes

interface CaseStudyCardProps {
  darkMode: boolean
  theme: ThemeName
}

export const CaseStudyCard = ({ darkMode, theme = 'AirbrushArtStudio' }: CaseStudyCardProps): JSX.Element => {
  const { background, text: color } = useDarkModeStyle(darkMode, AboutTheme)
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode: () => {}, ...AboutTheme }}>
      <div style={{ color, width: '500px', position: 'relative', background, padding: '10px' }}>
        <Card theme={CaseStudyThemes[theme]} />
      </div>
    </ThemeContext.Provider>
  )
}
