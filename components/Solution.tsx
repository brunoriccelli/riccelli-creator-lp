'use client'

import { motion } from 'framer-motion'
import { Check, Eye, Rocket, Sparkles } from 'lucide-react'

const benefits = [
  {
    icon: Eye,
    title: 'Identidade Estratégica',
    description: 'Não é só logo e cores. É um sistema visual construído para comunicar exatamente quem você é e para quem você trabalha — projetado para gerar confiança imediata.',
  },
  {
    icon: Sparkles,
    title: 'Posicionamento Antes do Visual',
    description: 'Antes de desenhar qualquer coisa, definimos juntos como você quer ser percebido pelo mercado. O design vem depois — e reflete uma decisão estratégica, não uma preferência estética.',
  },
  {
    icon: Rocket,
    title: 'Pronto para Usar em Qualquer Canal',
    description: 'Você recebe todos os arquivos organizados — redes sociais, documentos, apresentações, cartão de visita — acompanhados de um guia de marca claro para que cada nova peça mantenha a consistência e a força da sua identidade.',
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
              Uma marca que comunica sua experiência <span className="text-accent">antes de você dizer uma palavra</span>.
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