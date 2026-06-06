'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const forYou = [
  'Você está saindo ou já saiu do CLT e quer captar seus próprios clientes',
  'Você tem experiência de sobra, mas sua marca não comunica isso',
  'Você quer chegar ao mercado parecendo estabelecido desde o primeiro dia',
  'Você quer um processo estruturado, com etapas claras e resultado concreto',
]

const notForYou = [
  'Você só quer um logo barato sem pensar em posicionamento',
  'Você ainda não sabe para quem quer vender seu serviço',
  'Você precisa de site, redes sociais ou materiais de marketing inclusos',
]

export default function ForWho() {
  return (
    <section className="py-12 sm:py-16 px-6 sm:px-8 lg:px-12 bg-surface">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background border-2 border-accent/40 rounded-2xl p-6 sm:p-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
            Este serviço foi feito para você se...
          </h2>
          <ul className="space-y-4">
            {forYou.map((item, index) => (
              <li key={index} className="flex gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-textSecondary text-sm sm:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-background border-2 border-danger/40 rounded-2xl p-6 sm:p-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
            Não é para você se...
          </h2>
          <ul className="space-y-4">
            {notForYou.map((item, index) => (
              <li key={index} className="flex gap-3">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-danger flex-shrink-0 mt-0.5" />
                <span className="text-textSecondary text-sm sm:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
