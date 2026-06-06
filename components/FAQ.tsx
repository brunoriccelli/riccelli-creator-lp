'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'O que exatamente está incluso nos R$ 1.997?',
    answer: 'Auditoria de Autoridade, 3 Conceitos de Posicionamento, logo principal e versões, paleta de cores, tipografia, aplicações essenciais (cartão de visita, avatar, cabeçalho de documento) e guia de marca resumido. Tudo entregue em pasta organizada no Google Drive.',
  },
  {
    question: 'Em quanto tempo recebo tudo?',
    answer: 'O prazo é definido no início do projeto, de acordo com a complexidade e a agenda de aprovações. O processo começa assim que você preenche o formulário de onboarding e confirma o pagamento.',
  },
  {
    question: 'Posso pedir alterações?',
    answer: 'Sim. Cada fase tem uma rodada de revisão incluída. Ajustes adicionais são orçados separadamente.',
  },
  {
    question: 'Preciso ter clareza total do meu posicionamento antes de contratar?',
    answer: 'Não. A Auditoria de Autoridade existe justamente para construir essa clareza juntos. Você precisa saber o que faz e para quem — o restante a gente define no processo.',
  },
  {
    question: 'Vocês fazem site ou redes sociais?',
    answer: 'Não neste pacote. O foco é a identidade estratégica — a base que sustenta tudo que vem depois. Site e outros materiais podem ser desenvolvidos em projetos separados.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-12 sm:py-16 px-6 sm:px-8 lg:px-12 bg-surface">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12"
        >
          Perguntas <span className="text-brand">frequentes</span>.
        </motion.h2>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-background border-2 border-brand/20 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                >
                  <span className="text-base sm:text-lg font-semibold text-textPrimary">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-4 sm:pb-5 text-textSecondary text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
