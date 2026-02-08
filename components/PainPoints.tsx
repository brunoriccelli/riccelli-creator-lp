'use client'

import { motion } from 'framer-motion'
import { DollarSign, Palette, Link2 } from 'lucide-react'

const painPoints = [
  {
    icon: DollarSign,
    title: 'Teto de Preço',
    description: 'O cliente pede desconto porque seu Instagram não passa autoridade.',
  },
  {
    icon: Palette,
    title: 'Bloqueio Criativo',
    description: 'Você perde horas no Canva e o post continua amador.',
  },
  {
    icon: Link2,
    title: 'Vergonha do Link',
    description: 'Você hesita antes de enviar seu site para um cliente grande.',
  },
]

export default function PainPoints() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Uma <span className="text-brand">vitrine</span> à altura da qualidade do seu <span className="text-brand">produto</span>.
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-background border-2 border-brand/30 rounded-2xl p-8 hover:border-brand transition-all duration-300"
            >
              <point.icon className="w-12 h-12 text-brand mb-6" />
              <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
              <p className="text-textSecondary text-lg leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
