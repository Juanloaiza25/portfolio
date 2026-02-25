
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WhoAmI } from './components/WhoAmI'
import { TechStack } from './components/TechStack'
import { ExperienceLog } from './components/ExperienceLog'
import { SelectedWorks } from './components/SelectedWorks'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ScrollProgress'
import './App.css'

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    const mouseOver = () => setCursorVariant('hover')
    const mouseOut = () => setCursorVariant('default')

    window.addEventListener('mousemove', mouseMove)

    const interactiveElements = document.querySelectorAll('button, a, .interactive')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', mouseOver)
      el.addEventListener('mouseleave', mouseOut)
    })

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', mouseOver)
        el.removeEventListener('mouseleave', mouseOut)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePos.x - 12,
      y: mousePos.y - 12,
      backgroundColor: '#fff',
      mixBlendMode: 'difference' as const,
    },
    hover: {
      height: 64,
      width: 64,
      x: mousePos.x - 32,
      y: mousePos.y - 32,
      backgroundColor: '#FBFF48',
      mixBlendMode: 'normal' as const,
      border: '2px solid black'
    }
  }

  return (
    <>
      <ScrollProgress />
      <Header />

      <main className="relative min-h-screen bg-[#f5f5f0] selection:bg-black selection:text-[#FBFF48] cursor-none pt-24">
        {/* Custom Cursor */}
        <motion.div
          className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] hidden lg:block"
          variants={variants}
          animate={cursorVariant}
          transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.5 }}
        />

        <div className="relative z-10 w-full">
          <Hero />
          <WhoAmI />
          <TechStack />
          <ExperienceLog />
          <SelectedWorks />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
