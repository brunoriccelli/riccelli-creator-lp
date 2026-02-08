'use client'

import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className='fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='bg-surface/80 backdrop-blur-md border border-brand/20 rounded-2xl px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between'>
          <a href='/' className='flex items-center'>
            <img 
              src='/logo.svg' 
              alt='Riccelli Creator' 
              className='h-5 sm:h-6 md:h-8 w-auto'
            />
          </a>
          
          <div className='hidden md:flex items-center gap-8'>
            <a 
              href='#portfolio'
              className='text-textPrimary hover:text-brand transition-colors duration-300 font-medium'
            >
              Portfólio
            </a>
            <a 
              href='#contato'
              className='text-textPrimary hover:text-brand transition-colors duration-300 font-medium'
            >
              Contato
            </a>
          </div>
          
          <a 
            href='#aplicar'
            className='px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-surface transition-all duration-300'
          >
            Aplicar Agora
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
