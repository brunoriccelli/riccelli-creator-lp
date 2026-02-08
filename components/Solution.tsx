'use client'

import { motion } from 'framer-motion'
import { Check, Eye, Rocket, Sparkles } from 'lucide-react'

const benefits = [
  {
    icon: Eye,
    title: 'Visual Authority',
    description: 'Logo, Cores e Tipografia definidos para o digital.',
  },
  {
    icon: Rocket,
    title: 'High-Ticket Site',
    description: 'Landing Page One-Page rápida e focada em conversão.',
  },
  {
    icon: Sparkles,
    title: 'Autonomia Total',
    description: 'Pack de Templates e Manual de IA para você criar conteúdo sozinho.',
  },
]

export default function Solution() {
  return (
    <section className='py-16 sm:py-24 px-4 sm:px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-10 sm:gap-16 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8'>
              Não vendemos projetos infinitos. Entregamos <span className='text-accent'>Ativos</span>.
            </h2>
            
            <div className='space-y-6 sm:space-y-8'>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className='flex gap-3 sm:gap-4'
                >
                  <div className='flex-shrink-0'>
                    <Check className='w-6 h-6 sm:w-8 sm:h-8 text-accent' />
                  </div>
                  <div>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 flex items-center gap-2 sm:gap-3'>
                      <benefit.icon className='w-5 h-5 sm:w-6 sm:h-6 text-brand' />
                      {benefit.title}
                    </h3>
                    <p className='text-textSecondary text-sm sm:text-base md:text-lg leading-relaxed'>
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='relative'
          >
            <div className='bg-gradient-to-br from-brand/20 to-accent/20 rounded-3xl p-8 sm:p-12 border-2 border-brand/30'>
              <div className='space-y-4 sm:space-y-6'>
                <div className='h-3 sm:h-4 bg-brand/40 rounded-full w-3/4'></div>
                <div className='h-3 sm:h-4 bg-accent/40 rounded-full w-1/2'></div>
                <div className='h-3 sm:h-4 bg-brand/40 rounded-full w-5/6'></div>
                <div className='mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4'>
                  <div className='h-24 sm:h-32 bg-surface/50 rounded-xl border border-brand/20'></div>
                  <div className='h-24 sm:h-32 bg-surface/50 rounded-xl border border-accent/20'></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
