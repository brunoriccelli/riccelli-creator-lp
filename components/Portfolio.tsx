'use client'

import { motion } from 'framer-motion'

// CONTEÚDO DE EXEMPLO (placeholder) — substituir por cases reais futuramente.
// Use fotos reais do profissional ou da aplicação da marca (evite imagens genéricas).
// Coloque os arquivos em /public/portfolio e referencie aqui (ex.: '/portfolio/case-1.jpg').
const portfolioItems = [
  {
    name: 'Marina S. · Psicóloga',
    context: 'Psicóloga saindo do CLT para consultório particular',
    challenge: 'Marca precisava transmitir acolhimento e credibilidade científica ao mesmo tempo',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
    testimonial: 'Pela primeira vez senti que minha apresentação está à altura do meu trabalho. Os pacientes chegam confiando antes mesmo da primeira sessão.',
  },
  {
    name: 'Rafael A. · Advogado',
    context: 'Advogado abrindo o próprio escritório após anos em empresa',
    challenge: 'Comunicar autoridade e confiança desde o primeiro contato com o cliente',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80',
    testimonial: 'A marca passou exatamente a seriedade que eu queria. Fechei meus primeiros clientes particulares na primeira semana.',
  },
  {
    name: 'Dra. Carolina M. · Médica',
    context: 'Médica iniciando atendimento particular',
    challenge: 'Passar profissionalismo e proximidade na nova fase da carreira',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80',
    testimonial: 'O processo me ajudou a entender meu posicionamento antes do visual. O resultado parece de quem já está há anos no mercado.',
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
            Profissionais que chegaram ao mercado com a <span className="text-brand">marca certa</span>.
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
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-lg sm:text-xl font-bold">{item.name}</h3>

                <div>
                  <span className="block text-brand text-xs font-semibold uppercase tracking-wide mb-1">Contexto</span>
                  <p className="text-textSecondary text-sm leading-relaxed">{item.context}</p>
                </div>

                <div>
                  <span className="block text-brand text-xs font-semibold uppercase tracking-wide mb-1">Desafio</span>
                  <p className="text-textSecondary text-sm leading-relaxed">{item.challenge}</p>
                </div>

                {item.testimonial && (
                  <blockquote className="mt-auto pt-3 border-t border-brand/10 text-textPrimary text-sm italic leading-relaxed">
                    “{item.testimonial}”
                  </blockquote>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
