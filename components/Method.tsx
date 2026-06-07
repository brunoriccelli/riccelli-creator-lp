'use client'

import { motion } from 'framer-motion'
import { Search, LayoutTemplate, Fingerprint } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Auditoria de Autoridade',
    description: 'Você preenche um formulário estratégico e eu analiso seu posicionamento atual, seu público e seus concorrentes. O resultado é um documento que define exatamente como sua marca deve ser percebida — antes de qualquer decisão visual.',
  },
  {
    icon: LayoutTemplate,
    number: '02',
    title: '3 Conceitos de Posicionamento',
    description: 'Você recebe três direções criativas com nome, lógica estratégica e referências visuais. Cada conceito representa uma forma diferente de se posicionar — você escolhe o caminho que mais reflete quem você é.',
  },
  {
    icon: Fingerprint,
    number: '03',
    title: 'Identidade Completa',
    description: 'Com a direção aprovada, entrego logo, paleta, tipografia, aplicações essenciais e guia de marca — tudo organizado e pronto para você usar em qualquer canal.',
  },
]

export default function Method() {
  return (
    <section id="como-funciona" className="scroll-mt-24 py-12 sm:py-16 px-6 sm:px-8 lg:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 px-4"
        >
          Como funciona o <span className="text-accent">processo</span>.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-textSecondary text-sm sm:text-base font-light mb-10 sm:mb-12 px-4"
        >
          Um processo estruturado em 3 etapas, da estratégia à entrega final
        </motion.p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                
                <p className="text-textSecondary text-sm sm:text-base font-light leading-relaxed">
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