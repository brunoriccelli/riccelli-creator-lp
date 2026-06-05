# Sobre o Projeto — Riccelli Creator (Landing Page)

> Documento de contexto para uso interno e para alimentar uma IA (briefing).
> Inclui: descrição do projeto, briefing pronto para IA e análise crítica de copy/estratégia dos serviços de design.

---

## 1. Resumo do Projeto

**Riccelli Creator** é a landing page (one-page) de um serviço de **branding e presença digital** voltado a **especialistas, mentores e profissionais de alto valor (high-ticket)**. O público já tem autoridade técnica, mas sente que a marca/imagem não reflete a qualidade da entrega — o que trava o aumento de preço e a percepção de valor.

O produto central é o **Creator Brand Kit (ou Riccelli Brand Kit)**, um pacote que entrega:

1. **Identidade visual premium** — sistema visual desenhado para transmitir autoridade imediata.
2. **Landing page de alta conversão** — site one-page rápido, persuasivo e focado em transformar visitantes em clientes qualificados.
3. **Kit de Criação de Conteúdo ("Segundo Cérebro")** — templates + IA treinada para produzir conteúdo em minutos.

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

---

## 3. Estrutura da Página (seções e copy atual)

A página é renderizada em `app/page.tsx` na seguinte ordem:

### 3.1. Navbar (`components/Navbar.tsx`)
- Navegação fixa com glassmorphism (fica opaca ao rolar).
- Links: **Solução**, **Contato**. (Portfólio está comentado.)
- CTA: **"Saiba Mais"** → WhatsApp.

### 3.2. Hero (`components/Hero.tsx`)
- Badge: *"Para Especialistas & Mentores"*.
- **Headline:** *"Sua competência é inquestionável. Sua marca deve refletir isso."*
- **Subheadline:** fala em traduzir a autoridade técnica visualmente via Brand Kit.
- **Formulário** (nome, e-mail, WhatsApp) → envia dados direto para o WhatsApp.
- CTA do form: **"Quero meu Brand Kit"**.

### 3.3. PainPoints (`components/PainPoints.tsx`)
Título: *"Você entrega excelência. Mas sua marca diz o contrário."*
Três dores:
1. **O Teto Invisível de Preço** — não consegue cobrar high-ticket porque a apresentação não sustenta o valor.
2. **Operacional Caótico** — perde tempo tentando ser designer.
3. **A "Vergonha do Link"** — desconforto de enviar portfólio/site amador.

### 3.4. Solution (`components/Solution.tsx`)
Título: *"Elimine a burocracia criativa. Receba seus Ativos de Autoridade prontos."*
Três benefícios:
1. **Identidade Visual Validada**
2. **Landing Page de Alta Conversão**
3. **O "Segundo Cérebro" da Marca** (IA + templates)

### 3.5. Method (`components/Method.tsx`)
Título: *"O Creator Brand Kit completo."*
Três passos (a metodologia):
1. **Diagnóstico & Identidade**
2. **Construção da Autoridade Digital**
3. **Acelerador de Conteúdo**

> Observação: o README menciona "metodologia 4 semanas" e timeline, mas o código atual tem **3 passos** sem prazos. (Inconsistência a resolver — ver seção 6.)

### 3.6. Portfolio (`components/Portfolio.tsx`) — DESATIVADO
- Existe no código, mas está **comentado** em `page.tsx`.
- Os 3 cases atuais são **fictícios/placeholder** (Mentoria Alpha, Arquiteta Sênior, Consultor Elite) com imagens do Unsplash.

### 3.7. CTAFooter (`components/CTAFooter.tsx`)
- **Headline final:** *"Você é a melhor opção técnica, mas o mercado está escolhendo outros por causa da embalagem."*
- CTA: **"Contato"** → WhatsApp.
- Footer com e-mail (`contato@riccellicreator.com`), WhatsApp (`+55 31 99304-4608`), Instagram, LinkedIn (Bruno Riccelli) e Behance.

---

## 4. Briefing pronto para colar em uma IA

> Copie o bloco abaixo ao pedir ajuda a uma IA (copy, estratégia, anúncios, etc.).

```
CONTEXTO DO NEGÓCIO:
Sou Bruno Riccelli, designer/brand designer. Vendo um pacote chamado "Creator Brand Kit"
para especialistas, mentores e profissionais high-ticket que já têm autoridade técnica,
mas cuja marca visual não reflete a qualidade da entrega — o que os impede de cobrar mais.

O QUE ENTREGO:
1. Identidade visual premium (sistema de marca para transmitir autoridade);
2. Landing page one-page de alta conversão;
3. Kit de Criação de Conteúdo: templates + IA treinada para acelerar a produção de conteúdo.

DORES DO CLIENTE:
- "Teto invisível de preço": trava na hora de cobrar high-ticket;
- Operacional caótico: perde tempo tentando ser designer;
- "Vergonha do link": tem receio de enviar um site/portfólio amador.

PROCESSO (3 etapas):
1. Diagnóstico & Identidade;
2. Construção da Autoridade Digital (landing page);
3. Acelerador de Conteúdo (templates + IA).

TOM DE VOZ: profissional, direto, premium, focado em autoridade e percepção de valor.
PÚBLICO: especialistas/mentores no Brasil, ticket médio/alto.
CANAL DE CONVERSÃO: formulário no site -> WhatsApp.

TAREFA: [descreva aqui o que você quer que a IA faça — ex.: revisar a copy do hero,
sugerir headlines de anúncio, definir oferta e preço, criar argumentos de venda, etc.]
```

---

## 5. Análise Crítica — Copy & Estratégia (o que avaliar antes de oferecer o serviço)

### 5.1. Pontos fortes da copy atual
- **Diagnóstico de dor bem feito.** "Teto invisível de preço" e "Vergonha do link" são gatilhos emocionais fortes e específicos do público.
- **Posicionamento claro:** separa *competência técnica* de *percepção de marca* — argumento central convincente.
- **Promessa de produto tangível:** identidade + site + kit de conteúdo (não vende só "design bonito").

### 5.2. Riscos e lacunas a corrigir
1. **Falta de prova social.** O Portfolio está desativado e os cases são fictícios. Para high-ticket, **prova social é decisiva**. → Reativar com cases reais, depoimentos, antes/depois e resultados (ex.: "passou de R$X para R$Y").
2. **Ausência de oferta/preço/escopo claro.** A página gera curiosidade mas não ancora valor. → Definir se é "agência" ou "produto", o que está incluso, prazo de entrega e faixa de investimento (mesmo que "a partir de").
3. **Inconsistência de método.** README fala em "4 semanas"; o site mostra 3 passos sem prazo. → Padronizar e, idealmente, **mostrar prazo** (prazo curto = menos fricção).
4. **Promessa "IA treinada" precisa de prova.** É um diferencial forte, mas vago. → Explicar o que a IA faz, mostrar exemplo de saída/template.
5. **Excesso de CTAs sem hierarquia única.** "Quero meu Brand Kit", "Saiba Mais", "Contato" — mensagens diferentes para a mesma ação. → Unificar o microcopy do CTA principal.
6. **Captação vai direto para WhatsApp sem qualificação nem armazenamento.** O form abre o WhatsApp, mas **não salva o lead** em lugar nenhum. → Considerar integração com planilha/CRM/e-mail para não perder leads.
7. **Sem garantia / reversão de risco.** Para ticket alto, ajuda muito. → Avaliar garantia, ou "diagnóstico gratuito" como porta de entrada.
8. **Sem seção de "para quem é / não é".** Ajuda a qualificar e aumenta percepção de exclusividade.

### 5.3. Decisões estratégicas a tomar (perguntas-chave)
- **Modelo:** serviço sob medida (alto ticket, poucos clientes) **ou** produto padronizado (escala)?
- **Ancoragem de preço:** qual o ticket-alvo e como justificá-lo na página?
- **Oferta de entrada:** vender o Brand Kit direto, ou usar diagnóstico/auditoria gratuita como isca?
- **Diferencial central:** a IA de conteúdo é o grande diferencial? Se sim, merece mais destaque.
- **Prova:** quais 2–3 cases reais podem ser usados já?

### 5.4. Sugestões rápidas de melhoria de copy (para testar)
- Hero: adicionar uma **promessa quantificável** ou prazo (ex.: "Sua marca premium pronta em 4 semanas").
- Incluir **bullet de "o que você recebe"** com itens concretos perto do CTA.
- Trocar CTA genérico "Contato" por algo de ação/baixa fricção (ex.: "Quero meu diagnóstico gratuito").
- Adicionar seção de **FAQ** (preço, prazo, "e se eu não gostar?").

---

## 6. Pendências Técnicas Identificadas
- [ ] Reativar a seção **Portfolio** com cases reais (hoje comentada em `page.tsx`).
- [ ] Substituir cases fictícios e imagens do Unsplash por material real.
- [ ] Alinhar narrativa de método: README diz "4 semanas", site mostra 3 passos sem prazo.
- [ ] Persistir/encaminhar os dados do formulário (hoje só abre o WhatsApp, sem salvar o lead).
- [ ] Remover/limpar arquivo `components/Hero.tsx.bak` (backup solto no repositório).
- [ ] Revisar microcopy dos CTAs para uma mensagem única e consistente.

---

## 7. Contatos / Links do Negócio
- **WhatsApp:** +55 31 99304-4608
- **E-mail:** contato@riccellicreator.com
- **Instagram:** @riccellicreator
- **LinkedIn:** Bruno Riccelli
- **Behance:** brunoriccelli
