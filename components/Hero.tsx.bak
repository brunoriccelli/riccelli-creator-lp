'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Hero() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Olá! Quero conhecer o Riccelli Creator\n\nNome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}`
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna Esquerda - Textos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-brand/10 border border-brand/30 rounded-full mb-6">
              <span className="text-brand text-sm font-semibold">Para Especialistas & Mentores</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-normal">
              Sua competência é <span className="text-brand">inquestionável</span>. Sua marca deve refletir isso.
            </h1>
            
            <h2 className="text-lg md:text-xl text-textSecondary mb-8 leading-relaxed">
              Você já construiu a autoridade técnica. Agora, vamos traduzi-la visualmente. O <span className="text-textPrimary font-semibold">Riccelli Brand Kit</span> alinha sua imagem à excelência da sua entrega, preparando seu negócio para novos patamares de valor.
            </h2>
          </motion.div>

          {/* Coluna Direita - Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-surface border-2 border-brand/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-2 text-center">Dê o próximo passo</h3>
            <p className="text-textSecondary text-center mb-6">Deixe seus dados abaixo. Se o seu perfil for aprovado, nosso time entrará em contato em breve.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-brand/20 rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:border-brand transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-brand/20 rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:border-brand transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="WhatsApp com DDD"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-brand/20 rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:border-brand transition-colors"
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent text-surface text-lg font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-2xl shadow-accent/20"
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
