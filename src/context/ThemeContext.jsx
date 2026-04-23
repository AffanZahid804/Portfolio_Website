import { createContext, useContext, useState, useEffect } from 'react'

export const themes = {
  slate: {
    name: 'Slate',
    primary: '#3b82f6',
    primaryDark: '#2563eb',
    secondary: '#64748b',
    accent: '#0ea5e9',
    accent2: '#475569',
    dark: '#0b1120',
    darkLight: '#121a2b',
    darkLighter: '#1c2740',
    gradient1: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #2563eb 100%)',
    gradient2: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    gradient3: 'linear-gradient(135deg, #334155 0%, #64748b 100%)',
    glowRgb: '59, 130, 246',
    aurora1: 'rgba(59, 130, 246, 0.14)',
    aurora2: 'rgba(100, 116, 139, 0.1)',
    aurora3: 'rgba(30, 58, 138, 0.12)',
  },
  midnight: {
    name: 'Midnight',
    primary: '#60a5fa',
    primaryDark: '#3b82f6',
    secondary: '#475569',
    accent: '#94a3b8',
    accent2: '#334155',
    dark: '#020617',
    darkLight: '#0f172a',
    darkLighter: '#1e293b',
    gradient1: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 55%, #172554 100%)',
    gradient2: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
    gradient3: 'linear-gradient(135deg, #1e40af 0%, #64748b 100%)',
    glowRgb: '96, 165, 250',
    aurora1: 'rgba(96, 165, 250, 0.12)',
    aurora2: 'rgba(71, 85, 105, 0.1)',
    aurora3: 'rgba(30, 58, 138, 0.1)',
  },
  ocean: {
    name: 'Ocean',
    primary: '#0891b2',
    primaryDark: '#0e7490',
    secondary: '#155e75',
    accent: '#38bdf8',
    accent2: '#0c4a6e',
    dark: '#071216',
    darkLight: '#0c1a22',
    darkLighter: '#132f3d',
    gradient1: 'linear-gradient(135deg, #0e7490 0%, #0891b2 50%, #155e75 100%)',
    gradient2: 'linear-gradient(135deg, #164e63 0%, #0e7490 100%)',
    gradient3: 'linear-gradient(135deg, #0c4a6e 0%, #38bdf8 100%)',
    glowRgb: '8, 145, 178',
    aurora1: 'rgba(8, 145, 178, 0.12)',
    aurora2: 'rgba(21, 94, 117, 0.1)',
    aurora3: 'rgba(56, 189, 248, 0.08)',
  },
  bronze: {
    name: 'Bronze',
    primary: '#b45309',
    primaryDark: '#92400e',
    secondary: '#78716c',
    accent: '#ca8a04',
    accent2: '#57534e',
    dark: '#0c0a09',
    darkLight: '#1c1917',
    darkLighter: '#292524',
    gradient1: 'linear-gradient(135deg, #92400e 0%, #b45309 50%, #78716c 100%)',
    gradient2: 'linear-gradient(135deg, #78350f 0%, #a16207 100%)',
    gradient3: 'linear-gradient(135deg, #57534e 0%, #b45309 100%)',
    glowRgb: '180, 83, 9',
    aurora1: 'rgba(180, 83, 9, 0.1)',
    aurora2: 'rgba(120, 113, 108, 0.08)',
    aurora3: 'rgba(202, 138, 4, 0.06)',
  },
  evergreen: {
    name: 'Evergreen',
    primary: '#059669',
    primaryDark: '#047857',
    secondary: '#0f766e',
    accent: '#14b8a6',
    accent2: '#334155',
    dark: '#05110d',
    darkLight: '#0a1f18',
    darkLighter: '#134e4a',
    gradient1: 'linear-gradient(135deg, #047857 0%, #059669 50%, #0f766e 100%)',
    gradient2: 'linear-gradient(135deg, #064e3b 0%, #0d9488 100%)',
    gradient3: 'linear-gradient(135deg, #134e4a 0%, #334155 100%)',
    glowRgb: '5, 150, 105',
    aurora1: 'rgba(5, 150, 105, 0.1)',
    aurora2: 'rgba(15, 118, 110, 0.08)',
    aurora3: 'rgba(20, 184, 166, 0.06)',
  },
  graphite: {
    name: 'Graphite',
    primary: '#94a3b8',
    primaryDark: '#64748b',
    secondary: '#cbd5e1',
    accent: '#64748b',
    accent2: '#475569',
    dark: '#020617',
    darkLight: '#0f172a',
    darkLighter: '#1e293b',
    gradient1: 'linear-gradient(135deg, #475569 0%, #64748b 50%, #94a3b8 100%)',
    gradient2: 'linear-gradient(135deg, #334155 0%, #64748b 100%)',
    gradient3: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
    glowRgb: '148, 163, 184',
    aurora1: 'rgba(148, 163, 184, 0.1)',
    aurora2: 'rgba(100, 116, 139, 0.08)',
    aurora3: 'rgba(71, 85, 105, 0.08)',
  },
}

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('slate')
  const theme = themes[currentTheme]

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--primary', theme.primary)
    root.style.setProperty('--primary-dark', theme.primaryDark)
    root.style.setProperty('--secondary', theme.secondary)
    root.style.setProperty('--accent', theme.accent)
    root.style.setProperty('--accent-2', theme.accent2)
    root.style.setProperty('--dark', theme.dark)
    root.style.setProperty('--dark-light', theme.darkLight)
    root.style.setProperty('--dark-lighter', theme.darkLighter)
    root.style.setProperty('--gradient-1', theme.gradient1)
    root.style.setProperty('--gradient-2', theme.gradient2)
    root.style.setProperty('--gradient-3', theme.gradient3)
    root.style.setProperty('--glow-rgb', theme.glowRgb)
    root.style.setProperty('--aurora-1', theme.aurora1)
    root.style.setProperty('--aurora-2', theme.aurora2)
    root.style.setProperty('--aurora-3', theme.aurora3)
    document.body.style.background = theme.dark
    document.body.style.transition = 'background 0.6s ease'
  }, [currentTheme, theme])

  return (
    <ThemeContext.Provider value={{ theme, themes, currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
export default ThemeContext
