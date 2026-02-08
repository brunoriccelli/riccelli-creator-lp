'use client'

import { motion } from 'framer-motion'
import { Search, Hammer, Package, GraduationCap } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Identidade Visual Premium',
    description: 'Logo, cores e tipografia definidos para o digital',
  },
  {
    icon: Hammer,
    number: '02',
    title: 'Site de Alta Performance',
    description: 'Landing page rápida e focada em conversão',
  },
  {
    icon: Package,
    number: '03',
    title: 'IA Start-Kit',
    description: 'Templates e manual de IA para criar conteúdo sozinho',
  },
  {
    icon: GraduationCap,
    number: '04',
    title: 'Entrega e Treinamento',
    description: 'Você aprende a usar tudo com autonomia',
  },
]

export default function Method() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 px-4"
        >
          O <span className="text-accent">Creator Brand Kit</span> completo.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-textSecondary text-base sm:text-lg md:text-xl mb-10 sm:mb-12 px-4"
        >
          Tudo que você precisa para ter uma marca à altura da sua expertise
        </motion.p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-background border-2 border-brand/30 rounded-2xl p-6 sm:p-8 hover:border-accent transition-all duration-300 h-full">
                <div className="text-5xl sm:text-6xl font-bold text-brand/20 mb-3 sm:mb-4">
                  {step.number}
                </div>
                
                <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent mb-3 sm:mb-4" />
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                
                <p className="text-textSecondary text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-brand/30"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}