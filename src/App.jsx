import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import Contact from './components/Contact'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App" style={{ minHeight: '100vh', position: 'relative' }}>
      <Header scrollY={scrollY} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Reviews />
      <Contact />
    </div>
  )
}

export default App

