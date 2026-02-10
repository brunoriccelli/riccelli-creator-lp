'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Hero() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Olá! Quero conhecer o Riccelli Creator\n\nNome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}`
    window.open(`https://wa.me/5531993044608?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-19 sm:pt-26 pb-10 sm:pb-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-12 items-center">
          {/* Coluna Esquerda - Textos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-brand/10 border border-brand/30 rounded-full mb-4 sm:mb-6">
              <span className="text-brand text-xs sm:text-sm font-semibold">Para Especialistas & Mentores</span>
            </div>
            
            <h1 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.85rem] lg:text-[3.42rem] font-bold mb-4 sm:mb-6 leading-tight sm:leading-normal">
              Sua competência é <span className="text-brand">inquestionável</span>. Sua marca deve refletir isso.
            </h1>
            
            <h2 className="text-[0.95rem] sm:text-[1.07rem] md:text-[1.14rem] text-textSecondary mb-6 sm:mb-8 leading-relaxed">
              Você já construiu a autoridade técnica. Agora, vamos traduzi-la visualmente. O <span className="text-textPrimary font-semibold">Brand Kit</span> alinha sua imagem à excelência da sua entrega, preparando seu negócio para novos patamares de valor.
            </h2>
          </motion.div>

          {/* Coluna Direita - Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-surface border-2 border-brand/30 rounded-2xl p-4 sm:p-5"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">Aplicação para Brand Kit</h3>
            <p className="text-textSecondary text-xs sm:text-sm text-center mb-4">Verificaremos a disponibilidade da agenda para o seu perfil.</p>
            
            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-background border border-brand/20 rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:border-brand transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-background border border-brand/20 rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:border-brand transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="WhatsApp com DDD"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-background border border-brand/20 rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:border-brand transition-colors"
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-5 sm:px-6 py-2.5 sm:py-3 bg-accent text-surface text-sm sm:text-base font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-2xl shadow-accent/20"
              >
                Quero meu Brand Kit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}