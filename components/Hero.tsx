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
    <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-19 sm:pt-26 pb-4 sm:pb-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Coluna Esquerda - Textos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-brand/10 border border-brand/30 rounded-full mb-4 sm:mb-6">
              <span className="text-brand text-xs sm:text-sm font-semibold">Para Especialistas & Mentores</span>
            </div>
            
            <h1 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.85rem] lg:text-[3.42rem] font-bold mb-4 sm:mb-6 leading-tight">
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
            className="bg-surface border-2 border-brand/30 rounded-2xl p-4 sm:p-5 w-full max-w-md mx-auto lg:mx-0"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">Aplicação para Brand Kit</h3>
            <p className="text-textSecondary text-xs sm:text-sm text-center mb-4">Vamos entender seu negócio e definir o próximo passo</p>
            
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
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => {
          document.querySelector('#painpoints')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-textSecondary text-xs font-medium">Role para baixo</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-brand/40 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-brand rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}