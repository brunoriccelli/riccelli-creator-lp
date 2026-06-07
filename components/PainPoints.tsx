'use client'

import { motion } from 'framer-motion'
import { EyeOff, AlertCircle, TrendingDown } from 'lucide-react'

const painPoints = [
  {
    icon: EyeOff,
    title: 'A Primeira Impressão que Afasta Clientes',
    description: 'Quando um cliente em potencial pesquisa seu nome e encontra um perfil genérico ou sem identidade visual consistente, a decisão já foi tomada — antes mesmo de você abrir a boca.',
  },
  {
    icon: AlertCircle,
    title: 'A Insegurança de Compartilhar seu Contato',
    description: 'Você hesita antes de enviar seu cartão, seu perfil ou seu e-mail porque sabe que a apresentação não reflete a qualidade do que você entrega. E isso custa clientes.',
  },
  {
    icon: TrendingDown,
    title: 'Parecer Iniciante Mesmo Sendo Experiente',
    description: 'O mercado não conhece seu histórico no CLT. O que ele vê é a sua apresentação agora — e uma marca amadora comunica exatamente o oposto do que você quer dizer.',
  },
]

export default function PainPoints() {
  return (
    <section id="painpoints" className="py-12 sm:py-16 px-6 sm:px-8 lg:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 px-4"
        >
          Você é bom no que faz. Mas o mercado ainda <span className="text-brand">não sabe disso</span>.
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
              <p className="text-textSecondary text-sm sm:text-base font-light leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}