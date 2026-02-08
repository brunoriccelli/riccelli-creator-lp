# Riccelli Creator - Landing Page

Landing Page oficial do Riccelli Creator, desenvolvida com Next.js 14+, Tailwind CSS e Framer Motion.

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Fonte:** Inter (Google Fonts)

## 🎨 Identidade Visual

### Paleta de Cores

- **Background (Deep Navy):** `#0B121A`
- **Surface (Pantone 7547C):** `#131E29`
- **Brand Primary (Pantone 2727C):** `#3056D3`
- **CTA/Accent (Pantone 381C):** `#C4D600`
- **Danger:** `#D9381E`
- **Text Primary:** `#F3F4F6`
- **Text Secondary:** `#94A3B8`

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## 🏗️ Estrutura do Projeto

```
riccellicreator/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── Navbar.tsx          # Navegação fixa
│   ├── Hero.tsx            # Seção hero
│   ├── PainPoints.tsx      # Problemas do cliente
│   ├── Solution.tsx        # Solução oferecida
│   ├── Method.tsx          # Metodologia 4 semanas
│   └── CTAFooter.tsx       # CTA final e footer
├── tailwind.config.ts      # Configuração Tailwind
└── package.json
```

## 🎯 Componentes

### Navbar
Navegação flutuante com glassmorphism, fixa no topo.

### Hero
Seção principal com headline impactante e CTA primário.

### PainPoints
Grid de 3 cards mostrando os problemas do público-alvo.

### Solution
Layout 2 colunas apresentando os benefícios do Creator Brand Kit.

### Method
Timeline horizontal com as 4 semanas do processo.

### CTAFooter
CTA final com link para WhatsApp e footer.

## 🔧 Customização

Para alterar o número do WhatsApp, edite o arquivo `components/CTAFooter.tsx`:

```tsx
href="https://wa.me/5511999999999?text=..."
```

## 📱 Responsividade

A landing page é totalmente responsiva e otimizada para:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## ⚡ Performance

- Otimização de fontes com next/font
- Lazy loading de componentes
- Animações otimizadas com Framer Motion
- CSS minificado com Tailwind

## 📄 Licença

© 2024 Riccelli Creator. Todos os direitos reservados.
