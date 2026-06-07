import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Riccelli Creator - Marca Profissional para Profissionais Liberais',
  description: 'Identidade de marca estratégica para quem está saindo do CLT. Auditoria de autoridade, 3 conceitos de posicionamento e identidade completa para chegar ao mercado com credibilidade.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
