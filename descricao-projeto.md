# Sobre o Projeto — Riccelli Creator (Landing Page)

> Documento de contexto para uso interno e para alimentar uma IA (briefing).
> Inclui: descrição do projeto, briefing pronto para IA e estrutura atual da página.

---

## 1. Resumo do Projeto

**Riccelli Creator** é a landing page (one-page) de um serviço de **identidade de marca / branding** voltado a **profissionais liberais em transição do CLT para o mercado independente**. O público já tem competência técnica, mas a marca ainda não comunica isso — o que dificulta gerar confiança imediata e captar os próprios clientes.

O produto central é a **Marca Profissional**, um pacote de identidade estratégica que entrega:

1. **Auditoria de Autoridade** — diagnóstico de posicionamento, público e concorrência antes de qualquer decisão visual.
2. **3 Conceitos de Posicionamento** — direções criativas com lógica estratégica e referências para o cliente escolher.
3. **Identidade Completa** — logo + versões, paleta, tipografia, aplicações essenciais e guia de marca, prontos para uso.

**Investimento:** R$ 1.997.

**Objetivo da página:** captar leads qualificados (via formulário no hero e CTAs) e direcioná-los para o **WhatsApp** para iniciar a conversa comercial.

---

## 2. Stack Técnica

| Item | Tecnologia |
|------|-----------|
| Framework | Next.js 14+ (App Router) |
| Linguagem | TypeScript + React 18 |
| Estilo | Tailwind CSS |
| Animações | Framer Motion |
| Ícones | Lucide React |
| Fonte | Inter (Google Fonts) |

### Identidade Visual (paleta)

- **Background (Deep Navy):** `#0B121A`
- **Surface:** `#131E29`
- **Brand Primary (azul):** `#3056D3`
- **CTA/Accent (verde-limão):** `#C4D600`
- **Danger:** `#D9381E`
- **Texto primário:** `#F3F4F6`
- **Texto secundário:** `#94A3B8`

> Padrão tipográfico de subtítulos/descrições adotado nas seções: `text-sm sm:text-base` com `font-light`.

---

## 3. Estrutura da Página (seções e copy atual)

A página é renderizada em `app/page.tsx` nesta ordem: **Navbar → Hero → PainPoints → Solution → ForWho → Method → Pricing → Portfolio → FAQ → CTAFooter**.

### 3.1. Navbar (`components/Navbar.tsx`)
- Navegação fixa com glassmorphism (fica opaca ao rolar).
- Links: **Como funciona** (`#como-funciona`), **Portfólio** (`#portfolio`).
- CTA: **"Quero minha marca"** → `#formulario`.

### 3.2. Hero (`components/Hero.tsx`)
- **Headline:** *"Sua competência é real. Sua marca precisa comunicar isso."*
- **Subheadline:** *"Saindo do CLT, a primeira impressão é tudo — e ela começa pela sua marca. Profissionais com marca bem posicionada chegam ao mercado gerando confiança imediata, sem precisar explicar quem são. É isso que construímos juntos."*
- **Formulário** ("Aplicação para Marca Profissional"): nome, e-mail, WhatsApp → envia os dados direto para o WhatsApp.
- CTA do form: **"Quero minha Marca Profissional"**.
- Microcopy abaixo do form: *"✓ Sem compromisso | ✓ Resposta em até 24h | ✓ Vagas limitadas"*.

### 3.3. PainPoints (`components/PainPoints.tsx`)
Título: *"Você é bom no que faz. Mas o mercado ainda não sabe disso."*
Três dores (ícones Lucide):
1. **A Primeira Impressão que Afasta Clientes** (`EyeOff`) — perfil genérico/sem identidade afasta o cliente antes da conversa.
2. **A Insegurança de Compartilhar seu Contato** (`AlertCircle`) — hesitação ao enviar cartão/perfil porque a apresentação não reflete a qualidade. E isso custa clientes.
3. **Parecer Iniciante Mesmo Sendo Experiente** (`TrendingDown`) — o mercado não vê o histórico no CLT, só a apresentação atual.

### 3.4. Solution (`components/Solution.tsx`)
Título: *"Uma marca que comunica sua experiência antes de você dizer uma palavra."*
Três benefícios (ícones Lucide):
1. **Identidade Estratégica** (`Fingerprint`)
2. **Posicionamento Antes do Visual** (`Target`)
3. **Pronto para Usar em Qualquer Canal** (`FolderOpen`)
- Imagem lateral: mockup de identidade de marca (Unsplash).

### 3.5. ForWho (`components/ForWho.tsx`)
Dois cards de qualificação.
- **"Este serviço é para você se..."** (verde/accent): em transição do CLT para o mercado independente; tem experiência mas a marca não comunica; quer chegar parecendo estabelecido; quer processo estruturado.
- **"Não é para você se..."** (vermelho/danger): quer apenas um logo sem trabalhar posicionamento; ainda não sabe para quem vender; quer resultado sem passar pelo processo; busca resultado pontual, não identidade completa.

### 3.6. Method (`components/Method.tsx`)
Título: *"Como funciona o processo."* — subtítulo: *"Um processo estruturado em 3 etapas, da estratégia à entrega final"*.
Três passos (ícones Lucide):
1. **Auditoria de Autoridade** (`Search`)
2. **3 Conceitos de Posicionamento** (`LayoutTemplate`)
3. **Identidade Completa** (`Fingerprint`)

### 3.7. Pricing (`components/Pricing.tsx`)
- Título: **"Marca Profissional"** — **R$ 1.997**.
- Linha de ancoragem: *"Tudo que você precisa para chegar ao mercado com credibilidade."*
- Inclui: Auditoria de Autoridade, 3 Conceitos de Posicionamento, Logo + versões, Paleta + Tipografia, Aplicações essenciais (cartão de visita, avatar, cabeçalho), Guia de marca (1 página), Arquivos em todos os formatos.
- CTA: **"Quero minha Marca Profissional"** → `#formulario`.

### 3.8. Portfolio (`components/Portfolio.tsx`) — ATIVO
- Título: *"Identidades construídas para transmitir o que importa."*
- Três cases, cada um com **Contexto** e **Desafio**:
  1. **Automiza.ai · Startup de Automação** — `/portfolio/automiza-lp.webp`
  2. **Áureo · Fintech de Pagamentos** — `/portfolio/aureo-lp.webp`
  3. **Zyggs Checkout · Plataforma de Vendas** — `/portfolio/zyggs-lp.webp`
- Imagens reais em `public/portfolio/` (proporção 16:9, `object-cover`). Se o campo `image` estiver vazio, exibe placeholder "Imagem em breve".

### 3.9. FAQ (`components/FAQ.tsx`)
Título: *"Perguntas frequentes."* — acordeão com:
1. O que exatamente está incluso nos R$ 1.997?
2. Em quanto tempo recebo tudo?
3. Posso pedir alterações?
4. Preciso ter clareza total do meu posicionamento antes de contratar?
5. Preciso preparar alguma coisa antes de começar?
6. Vocês fazem site ou redes sociais?

### 3.10. CTAFooter (`components/CTAFooter.tsx`)
- **Headline final:** *"O mercado não conhece seu currículo. Ele vê sua marca."*
- Subtexto: *"Chegue ao mercado com uma identidade que comunica, de imediato, que você é a escolha certa."*
- CTA: **"Quero minha Marca Profissional"** → `#formulario`.
- Microcopy: *"Investimento: R$ 1.997 | Processo em 3 etapas | Vagas limitadas por mês"*.
- Footer com e-mail (`contato@riccellicreator.com`), WhatsApp (`+55 31 99304-4608`), Instagram, LinkedIn (Bruno Riccelli) e Behance.

---

## 4. Briefing pronto para colar em uma IA

> Copie o bloco abaixo ao pedir ajuda a uma IA (copy, estratégia, anúncios, etc.).

```
CONTEXTO DO NEGÓCIO:
Sou Bruno Riccelli, brand designer. Vendo um pacote chamado "Marca Profissional"
para profissionais liberais em transição do CLT para o mercado independente. Eles já têm
competência técnica, mas a marca não comunica isso — o que dificulta gerar confiança
imediata e captar os próprios clientes.

O QUE ENTREGO (R$ 1.997):
1. Auditoria de Autoridade (diagnóstico de posicionamento, público e concorrência);
2. 3 Conceitos de Posicionamento (direções criativas para o cliente escolher);
3. Identidade Completa (logo + versões, paleta, tipografia, aplicações essenciais
   como cartão de visita/avatar/cabeçalho, e guia de marca), em todos os formatos.

DORES DO CLIENTE:
- A primeira impressão que afasta clientes (perfil genérico/sem identidade);
- A insegurança de compartilhar o contato (apresentação não reflete a qualidade);
- Parecer iniciante mesmo sendo experiente.

PROCESSO (3 etapas):
1. Auditoria de Autoridade;
2. 3 Conceitos de Posicionamento;
3. Identidade Completa.

TOM DE VOZ: profissional, direto, encorajador, focado em confiança e percepção de valor.
PÚBLICO: profissionais liberais saindo do CLT, no Brasil.
CANAL DE CONVERSÃO: formulário no site -> WhatsApp.

TAREFA: [descreva aqui o que você quer que a IA faça — ex.: revisar a copy do hero,
sugerir headlines de anúncio, criar argumentos de venda, etc.]
```

---

## 5. Pendências / Próximos Passos
- [ ] Persistir/encaminhar os dados do formulário (hoje só abre o WhatsApp, sem salvar o lead em planilha/CRM/e-mail).
- [ ] Avaliar prova social adicional (depoimentos, resultados) nos cases do Portfolio.
- [ ] Substituir a imagem da seção Solution (Unsplash) por material próprio, se desejado.
- [x] Revisar metadados em `app/layout.tsx` (title/description alinhados à versão atual).

---

## 6. Contatos / Links do Negócio
- **WhatsApp:** +55 31 99304-4608
- **E-mail:** contato@riccellicreator.com
- **Instagram:** @riccellicreator
- **LinkedIn:** Bruno Riccelli
- **Behance:** brunoriccelli
