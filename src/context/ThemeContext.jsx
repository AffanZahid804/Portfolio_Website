import { createContext, useContext, useState, useEffect } from 'react'

export const themes = {
  indigo: {
    name: 'Indigo',
    emoji: '💜',
    primary: '#6366f1',
    primaryDark: '#4f46e5',
    secondary: '#8b5cf6',
    accent: '#ec4899',
    accent2: '#f59e0b',
    dark: '#0f172a',
    darkLight: '#1e293b',
    darkLighter: '#334155',
    gradient1: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
    gradient2: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    gradient3: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    glowRgb: '99, 102, 241',
    aurora1: 'rgba(99, 102, 241, 0.35)',
    aurora2: 'rgba(236, 72, 153, 0.25)',
    aurora3: 'rgba(139, 92, 246, 0.2)',
  },
  cyberpunk: {
    name: 'Cyberpunk',
    emoji: '⚡',
    primary: '#00f5ff',
    primaryDark: '#00bcd4',
    secondary: '#ff00ff',
    accent: '#ffff00',
    accent2: '#ff6600',
    dark: '#070710',
    darkLight: '#0f0f1e',
    darkLighter: '#1a1a2e',
    gradient1: 'linear-gradient(135deg, #00f5ff 0%, #ff00ff 50%, #ffff00 100%)',
    gradient2: 'linear-gradient(135deg, #00bcd4 0%, #ff00ff 100%)',
    gradient3: 'linear-gradient(135deg, #ffff00 0%, #ff6600 100%)',
    glowRgb: '0, 245, 255',
    aurora1: 'rgba(0, 245, 255, 0.3)',
    aurora2: 'rgba(255, 0, 255, 0.2)',
    aurora3: 'rgba(255, 255, 0, 0.12)',
  },
  ocean: {
    name: 'Ocean',
    emoji: '🌊',
    primary: '#06b6d4',
    primaryDark: '#0891b2',
    secondary: '#0ea5e9',
    accent: '#10b981',
    accent2: '#22d3ee',
    dark: '#0a1628',
    darkLight: '#0d1f36',
    darkLighter: '#162944',
    gradient1: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 50%, #10b981 100%)',
    gradient2: 'linear-gradient(135deg, #0891b2 0%, #10b981 100%)',
    gradient3: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)',
    glowRgb: '6, 182, 212',
    aurora1: 'rgba(6, 182, 212, 0.3)',
    aurora2: 'rgba(16, 185, 129, 0.2)',
    aurora3: 'rgba(14, 165, 233, 0.2)',
  },
  sunset: {
    name: 'Sunset',
    emoji: '🌅',
    primary: '#f97316',
    primaryDark: '#ea580c',
    secondary: '#ef4444',
    accent: '#eab308',
    accent2: '#f59e0b',
    dark: '#160a00',
    darkLight: '#1f1000',
    darkLighter: '#2e1a00',
    gradient1: 'linear-gradient(135deg, #f97316 0%, #ef4444 50%, #eab308 100%)',
    gradient2: 'linear-gradient(135deg, #ea580c 0%, #ef4444 100%)',
    gradient3: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
    glowRgb: '249, 115, 22',
    aurora1: 'rgba(249, 115, 22, 0.3)',
    aurora2: 'rgba(239, 68, 68, 0.2)',
    aurora3: 'rgba(234, 179, 8, 0.18)',
  },
  emerald: {
    name: 'Emerald',
    emoji: '🌿',
    primary: '#10b981',
    primaryDark: '#059669',
    secondary: '#34d399',
    accent: '#a78bfa',
    accent2: '#06b6d4',
    dark: '#06120e',
    darkLight: '#0a1c15',
    darkLighter: '#102b1f',
    gradient1: 'linear-gradient(135deg, #10b981 0%, #34d399 50%, #a78bfa 100%)',
    gradient2: 'linear-gradient(135deg, #059669 0%, #34d399 100%)',
    gradient3: 'linear-gradient(135deg, #a7f3d0 0%, #10b981 100%)',
    glowRgb: '16, 185, 129',
    aurora1: 'rgba(16, 185, 129, 0.3)',
    aurora2: 'rgba(52, 211, 153, 0.2)',
    aurora3: 'rgba(167, 139, 250, 0.15)',
  },
  rose: {
    name: 'Rose',
    emoji: '🌸',
    primary: '#f43f5e',
    primaryDark: '#e11d48',
    secondary: '#fb7185',
    accent: '#a78bfa',
    accent2: '#c084fc',
    dark: '#160008',
    darkLight: '#20000f',
    darkLighter: '#30001a',
    gradient1: 'linear-gradient(135deg, #f43f5e 0%, #a78bfa 50%, #c084fc 100%)',
    gradient2: 'linear-gradient(135deg, #e11d48 0%, #a78bfa 100%)',
    gradient3: 'linear-gradient(135deg, #fda4af 0%, #f43f5e 100%)',
    glowRgb: '244, 63, 94',
    aurora1: 'rgba(244, 63, 94, 0.3)',
    aurora2: 'rgba(167, 139, 250, 0.2)',
    aurora3: 'rgba(192, 132, 252, 0.15)',
  },
}

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('indigo')
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
