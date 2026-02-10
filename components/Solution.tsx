'use client'

import { motion } from 'framer-motion'
import { Check, Eye, Rocket, Sparkles } from 'lucide-react'

const benefits = [
  {
    icon: Eye,
    title: 'Identidade Visual Validada',
    description: 'Não é apenas bonito. É um sistema visual desenhado para passar autoridade imediata no digital.',
  },
  {
    icon: Rocket,
    title: 'Landing Page de Alta Conversão',
    description: 'Um site rápido, persuasivo e desenhado para transformar visitantes em clientes qualificados.',
  },
  {
    icon: Sparkles,
    title: 'O "Segundo Cérebro" da Marca',
    description: 'Receba nosso Kit de Criação com IA e Templates. Nunca mais trave na hora de criar conteúdo.',
  },
]

export default function Solution() {
  return (
    <section className="py-12 sm:py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
              Elimine a burocracia criativa. Receba uma <span className="text-accent">infraestrutura de marca</span> pronta.
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex gap-3 sm:gap-4"
                >
                  <div className="flex-shrink-0">
                    <Check className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 flex items-center gap-2 sm:gap-3">
                      <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand" />
                      {benefit.title}
                    </h3>
                    <p className="text-textSecondary text-sm sm:text-base md:text-lg leading-relaxed">
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
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-brand/30">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" 
                alt="Laptop mockup"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}