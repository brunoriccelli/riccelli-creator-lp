'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const portfolioItems = [
  {
    title: 'Mentoria Alpha',
    category: 'Negócios',
    description: 'Reposicionamento completo para ticket de R$ 5k.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
  },
  {
    title: 'Arquiteta Sênior',
    category: 'Arquitetura',
    description: 'Site e marca para atrair clientes de alto padrão.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    title: 'Consultor Elite',
    category: 'Finanças',
    description: 'Transmissão de autoridade e segurança.',
    image: 'https://images.unsplash.com/photo-1621951753002-e1c2e4d5e6e7?w=800&q=80',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background">
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
              className="group bg-surface border-2 border-brand/20 rounded-2xl overflow-hidden hover:border-brand hover:shadow-lg hover:shadow-brand/20 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
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