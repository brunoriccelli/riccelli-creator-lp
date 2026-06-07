'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const includes = [
  'Auditoria de Autoridade',
  '3 Conceitos de Posicionamento',
  'Logo + versões',
  'Paleta + Tipografia',
  'Aplicações essenciais (cartão de visita, avatar, cabeçalho)',
  'Guia de marca (1 página)',
  'Arquivos em todos os formatos',
]

export default function Pricing() {
  return (
    <section className="py-12 sm:py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface border-2 border-accent/40 rounded-3xl p-8 sm:p-10 text-center"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Marca Profissional</h2>
          <div className="mb-6">
            <span className="text-4xl sm:text-5xl font-bold text-accent">R$ 1.997</span>
            <p className="text-textSecondary text-sm sm:text-base font-light mt-2">Tudo que você precisa para chegar ao mercado com credibilidade.</p>
            <p className="text-textSecondary text-sm sm:text-base mt-3">incluso:</p>
          </div>

          <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
            {includes.map((item, index) => (
              <li key={index} className="flex gap-3 items-center">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-textPrimary text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#formulario"
            className="inline-block px-6 sm:px-8 py-3.5 sm:py-4 bg-accent text-surface text-base sm:text-lg font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-2xl shadow-accent/20"
          >
            Quero minha Marca Profissional
          </a>
        </motion.div>
      </div>
    </section>
  )
}
