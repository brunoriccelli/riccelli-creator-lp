'use client'

import { motion } from 'framer-motion'
import { Image as ImageIcon } from 'lucide-react'

// As imagens são placeholders — substituir por imagens reais dos cases futuramente.
// Coloque os arquivos em /public/portfolio e referencie no campo "image" (ex.: '/portfolio/case-1.jpg').
const portfolioItems = [
  {
    name: 'Automiza.ai · Startup de Automação',
    context: 'Empresa entrando no mercado de automação com IA, precisando se diferenciar em um segmento saturado de marcas genéricas.',
    challenge: 'Transmitir tecnologia avançada e acessível ao mesmo tempo — sem parecer mais uma startup sem personalidade.',
    image: '/portfolio/automiza-lp.webp',
  },
  {
    name: 'Áureo · Fintech de Pagamentos',
    context: 'Empresa em fase de estruturação de marca, precisando transmitir credibilidade institucional para operar no mercado financeiro.',
    challenge: 'Comunicar solidez e inovação ao mesmo tempo — sem parecer mais uma fintech genérica em um mercado que exige confiança acima de tudo.',
    image: '/portfolio/aureo-lp.webp',
  },
  {
    name: 'Zyggs Checkout · Plataforma de Vendas',
    context: 'Plataforma de checkout entrando em um mercado competitivo, precisando de uma identidade que se destacasse imediatamente.',
    challenge: 'Criar uma marca com personalidade forte e memorável — que comunicasse velocidade e resultado para um público acostumado a ignorar o que parece genérico.',
    image: '/portfolio/zyggs-lp.webp',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 py-12 sm:py-16 px-6 sm:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
            Identidades construídas para transmitir <span className="text-brand">o que importa</span>.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-surface border-2 border-brand/20 rounded-2xl overflow-hidden hover:border-brand hover:shadow-lg hover:shadow-brand/20 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden bg-background/50">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand/10 to-surface border-b border-brand/10">
                    <ImageIcon className="w-8 h-8 sm:w-10 sm:h-10 text-brand/40" strokeWidth={1.5} />
                    <span className="text-textSecondary/60 text-xs uppercase tracking-wide">Imagem em breve</span>
                  </div>
                )}
              </div>

              <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-lg sm:text-xl font-bold">{item.name}</h3>

                <div>
                  <span className="block text-brand text-xs font-semibold uppercase tracking-wide mb-1">Contexto</span>
                  <p className="text-textSecondary text-sm font-light leading-relaxed">{item.context}</p>
                </div>

                <div>
                  <span className="block text-brand text-xs font-semibold uppercase tracking-wide mb-1">Desafio</span>
                  <p className="text-textSecondary text-sm font-light leading-relaxed">{item.challenge}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
