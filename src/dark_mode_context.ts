import { createContext } from 'react'

interface DarkModeContextType {
  darkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleDarkMode: (): void => {}
})
export default DarkModeContext
