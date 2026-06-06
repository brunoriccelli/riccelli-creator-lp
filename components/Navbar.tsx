'use client'

import { motion } from 'framer-motion'
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md border-b border-brand/20' 
          : 'bg-background/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src="/logo.svg" 
            alt="Riccelli Creator" 
            className="h-[1.125rem] sm:h-[1.35rem] md:h-[1.8rem] w-auto"
          />
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#como-funciona"
            className="text-textPrimary hover:text-brandLight transition-colors duration-300 font-medium"
          >
            Como funciona
          </a>
          <a 
            href="#portfolio"
            className="text-textPrimary hover:text-brandLight transition-colors duration-300 font-medium"
          >
            Portfólio
          </a>
        </div>
        
        <a 
          href="#formulario"
          className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-surface transition-all duration-300"
        >
          Quero minha marca
        </a>
      </div>
    </motion.nav>
  )
}