'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const portfolioItems = [
  {
    title: 'Consultoria Estratégica Premium',
    category: 'Consultoria',
    description: 'Identidade visual completa + Site One-Page + Kit de criação para consultoria de alto ticket.',
    image: '/portfolio/project1.jpg',
  },
  {
    title: 'Mentoria de Liderança',
    category: 'Mentoria',
    description: 'Rebranding completo com foco em autoridade e posicionamento executivo.',
    image: '/portfolio/project2.jpg',
  },
  {
    title: 'Especialista em Finanças',
    category: 'Especialista',
    description: 'Brand Kit completo para especialista em planejamento financeiro high-ticket.',
    image: '/portfolio/project3.jpg',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 sm:py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
            Portfólio de <span className="text-brand">Transformações</span>
          </h2>
          <p className="text-textSecondary text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            Veja como especialistas e mentores elevaram sua presença digital com o Riccelli Brand Kit
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-surface border-2 border-brand/20 rounded-2xl overflow-hidden hover:border-brand transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-brand/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ExternalLink className="w-10 h-10 sm:w-12 sm:h-12 text-brand/40 group-hover:text-brand group-hover:scale-110 transition-all duration-300" />
                </div>
              </div>
              
              <div className="p-5 sm:p-6">
                <div className="inline-block px-3 py-1 bg-brand/10 border border-brand/30 rounded-full mb-3">
                  <span className="text-brand text-xs font-semibold">{item.category}</span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-textSecondary text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}