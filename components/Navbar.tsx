'use client'

import { motion, useScroll } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between rounded-2xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-surface/80 backdrop-blur-md border border-brand/20' 
            : 'bg-transparent'
        }`}>
          <a href="/" className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="Riccelli Creator" 
              className="h-5 sm:h-6 md:h-8 w-auto"
            />
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#portfolio"
              className="text-textPrimary hover:text-brand transition-colors duration-300 font-medium"
            >
              Portfólio
            </a>
            <a 
              href="#contato"
              className="text-textPrimary hover:text-brand transition-colors duration-300 font-medium"
            >
              Contato
            </a>
          </div>
          
          <a 
            href="#aplicar"
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-surface transition-all duration-300"
          >
            Aplicar Agora
          </a>
        </div>
      </div>
    </motion.nav>
  )
}