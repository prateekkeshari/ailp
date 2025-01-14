import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className={`min-h-screen font-inter transition-colors duration-300 ${
      isDark ? 'dark bg-black text-white' : 'bg-white text-black'
    }`}>
      <div className={`fixed inset-0 transition-colors duration-300 ${
        isDark ? 'bg-black' : 'bg-white'
      }`} />
      
      <div className="relative">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        
        <main>
          <Hero isDark={isDark} />
          <Features isDark={isDark} />
          <HowItWorks isDark={isDark} />
          <Testimonials isDark={isDark} />
          <Pricing isDark={isDark} />
          <CTA isDark={isDark} />
        </main>

        <Footer isDark={isDark} />
      </div>
    </div>
  )
}

export default App



