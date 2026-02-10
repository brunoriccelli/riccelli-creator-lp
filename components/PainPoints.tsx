'use client'

import { motion } from 'framer-motion'
import { DollarSign, Palette, Link2 } from 'lucide-react'

const painPoints = [
  {
    icon: DollarSign,
    title: 'O Teto Invisível de Preço',
    description: 'Você sabe que vale mais, mas trava na hora de cobrar High-Ticket porque sua apresentação não sustenta o valor.',
  },
  {
    icon: Palette,
    title: 'Operacional Caótico',
    description: 'Em vez de focar na estratégia e no cliente, você perde tempo precioso tentando ser designer, com resultados frustrantes.',
  },
  {
    icon: Link2,
    title: 'A "Vergonha do Link"',
    description: 'Aquele desconforto de enviar seu portfólio ou site, sabendo que ele parece amador perto da sua entrega real.',
  },
]

export default function PainPoints() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 px-4"
        >
          Você entrega excelência. Mas sua marca diz o <span className="text-brand">contrário</span>.
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-background border-2 border-brand/30 rounded-2xl p-6 sm:p-8 hover:border-brand hover:shadow-lg hover:shadow-brand/20 transition-all duration-300"
            >
              <point.icon className="w-10 h-10 sm:w-12 sm:h-12 text-brand mb-4 sm:mb-6" strokeWidth={1.5} />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{point.title}</h3>
              <p className="text-textSecondary text-base sm:text-lg leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}