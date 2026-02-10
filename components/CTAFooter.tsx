'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function CTAFooter() {
  return (
    <section id="aplicar" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand via-brand/80 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight px-4"
        >
          Você é a melhor opção técnica, mas o mercado está escolhendo outros por causa da <span className="text-accent">embalagem</span>.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-textSecondary mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
        >
          O Riccelli Brand Kit transforma sua imagem em ferramenta de venda. Em vez de depender de terceiros, você ganha controle. Receba sua Identidade Premium, seu Site One-Page e seu Kit de Criação. É o fim do amadorismo e o início do seu posicionamento High-Ticket.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="https://wa.me/5531993044608?text=Olá!%20Quero%20conhecer%20o%20Riccelli%20Creator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3.5 sm:py-4 bg-accent text-surface text-base sm:text-lg font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-2xl shadow-accent/20"
          >
            Agendar Aplicação
          </a>
        </motion.div>
      </div>
      
      <footer id="contato" className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Coluna 1 - Sobre */}
            <div>
              <img 
                src="/logo.svg" 
                alt="Riccelli Creator" 
                className="h-7 sm:h-8 w-auto mb-3 sm:mb-4"
              />
              <p className="text-textSecondary text-sm sm:text-base leading-relaxed">
                Transformamos especialistas e mentores em marcas premium através do nosso Brand Kit completo.
              </p>
            </div>
            
            {/* Coluna 2 - Contato */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contato</h4>
              <div className="space-y-3 text-textSecondary text-sm sm:text-base">
                <p>
                  <span className="block text-textPrimary font-semibold mb-1">Email</span>
                  <a href="mailto:contato@riccellicreator.com" className="hover:text-brand transition-colors break-all">
                    contato@riccellicreator.com
                  </a>
                </p>
                <p>
                  <span className="block text-textPrimary font-semibold mb-1">WhatsApp</span>
                  <a href="https://wa.me/5531993044608" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                    Chamar no WhatsApp
                  </a>
                </p>
              </div>
            </div>
            
            {/* Coluna 3 - Redes Sociais */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Redes Sociais</h4>
              <div className="space-y-3 text-textSecondary text-sm sm:text-base">
                <a href="https://instagram.com/riccellicreator" target="_blank" rel="noopener noreferrer" className="block hover:text-brand transition-colors">
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/bruno-riccelli-957278136" target="_blank" rel="noopener noreferrer" className="block hover:text-brand transition-colors">
                  LinkedIn
                </a>
                <a href="https://www.behance.net/brunoriccelli" target="_blank" rel="noopener noreferrer" className="block hover:text-brand transition-colors">
                  Behance
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-6 sm:pt-8 border-t border-white/10">
            <p className="text-textSecondary text-sm sm:text-base">
              Riccelli Creator  2026. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}