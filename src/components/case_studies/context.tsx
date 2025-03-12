import { createContext } from 'react'

import type { Project } from 'projects'

export default createContext<Project | null>(null)
