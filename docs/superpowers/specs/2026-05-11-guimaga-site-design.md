# Guimaga Empilhadeiras — Site Design Spec
**Data:** 2026-05-11  
**Versão:** 1.0

---

## Visão Geral

Site institucional multi-páginas para a **Guimaga Empilhadeiras**, empresa de locação de empilhadeiras fundada em 2010, sediada em Jundiaí/SP. O site deve ser moderno, simples e converter visitantes em contatos via WhatsApp.

**Referência visual:** https://safeempilhadeiras.com.br/  
**Site antigo (não usar estética):** https://guimaga-site-yojq.vercel.app/  
**Hospedagem:** Vercel

---

## Stack Técnica

- **Framework:** Next.js 14 (App Router)
- **Estilo:** Tailwind CSS
- **Linguagem:** TypeScript
- **Fontes:** Google Fonts — Barlow Condensed (títulos) + Inter (corpo)
- **Imagens:** Unsplash/Pexels (stock gratuito sem direitos autorais) até fotos próprias estarem disponíveis
- **Deploy:** Vercel (sem backend, sem banco de dados)

---

## Identidade Visual

### Paleta de Cores (do Manual de Marca Guimaga v1.0)
| Token | Hex | Uso |
|---|---|---|
| Navy principal | `#1B2B6E` | Header, títulos, botões primários |
| Navy profundo | `#0F1742` | Footer, overlays escuros |
| Amarelo segurança | `#FFC940` | CTAs de destaque, badges, hover |
| Cinza concreto | `#6B7280` | Texto secundário |
| Off-white | `#F5F5F3` | Background geral (60% da tela) |

**Hierarquia de uso:** 60% off-white · 30% navy · 10% amarelo

### Tipografia
- **Barlow Condensed 700/800** — títulos e chamadas industriais (H1, H2, H3)
- **Inter 400/600** — corpo de texto, labels, legendas

### Logo
- Arquivo: `input/Prancheta 36-100.jpg`
- Wordmark "Guimaga" em navy bold + "LOCAÇÃO DE EMPILHADEIRAS" abaixo
- No header: versão branca sobre fundo navy
- No footer: versão branca

### Estilo Geral
- Flat design com sombras sutis
- Sem gradientes excessivos
- Cards com bordas arredondadas suaves
- Espaçamento generoso, layout respirado

---

## Arquitetura

```
src/
  app/
    layout.tsx          ← Header + Footer + WhatsAppButton globais
    page.tsx            ← Home
    equipamentos/
      page.tsx
    sobre/
      page.tsx
    contato/
      page.tsx
  components/
    Header.tsx
    Footer.tsx
    WhatsAppButton.tsx  ← botão flutuante fixo, canto inferior direito
  lib/
    constants.ts        ← todas as informações de contato centralizadas
public/
  images/               ← logo e imagens estáticas
```

---

## Dados de Contato (constants.ts)

```
Empresa: Guimaga Empilhadeiras
Endereço: Av. Augusto Mazzi, 3.190, Jundiaí – SP
Telefones: (11) 3395-7366 | (11) 94720-9899 | (11) 98136-0172
Email: comercial@guimagaempilhadeiras.com.br
WhatsApp: (11) 94720-9899
Instagram: https://www.instagram.com/guimagaempilhadeiras/?hl=pt-br
LinkedIn: https://www.linkedin.com/company/guimaga-empilhadeiras/posts/?feedView=all
```

---

## Páginas

### Header (global)
- Fundo navy (`#1B2B6E`)
- Logo Guimaga (versão branca) à esquerda
- Nav: Home · Equipamentos · Sobre · Contato (links brancos)
- Ícones Instagram e LinkedIn (brancos, abrindo em nova aba)
- Botão "Fale pelo WhatsApp" em amarelo (`#FFC940`), texto navy
- Responsivo: menu hamburger em mobile

### Footer (global)
- Fundo navy profundo (`#0F1742`)
- Logo branco + slogan "Locação de Empilhadeiras desde 2010"
- Links de navegação
- Informações de contato (endereço, telefones, email)
- Ícones Instagram e LinkedIn
- © 2026 Guimaga Empilhadeiras

### WhatsApp Flutuante (global)
- Ícone WhatsApp verde fixo, canto inferior direito
- Link direto `wa.me/5511947209899` com mensagem pré-definida
- Presente em todas as páginas

---

### Home (`/`)

**1. Hero**
- Imagem de fundo: empilhadeira em operação (Unsplash, livre de direitos)
- Overlay navy semi-transparente
- H1: "Especialistas em Locação de Empilhadeiras"
- Subtítulo: "Desde 2010, sua parceira ideal em movimentação de cargas em Jundiaí/SP"
- Botão primário: "Solicitar Orçamento pelo WhatsApp" (amarelo)
- Altura: 100vh

**2. Faixa de Números**
- Fundo navy
- 3 stats em destaque: "Est. 2010" · "Jundiaí/SP" · "Novas e Seminovas"

**3. Preview de Equipamentos**
- Título: "Nossos Equipamentos"
- 3 cards: Empilhadeira Elétrica · Empilhadeira a GLP · Paleteira Elétrica
- Cada card: imagem stock + nome + descrição de 1 linha + link "Ver mais"
- Link para `/equipamentos`

**4. Por que a Guimaga**
- Título: "Por que escolher a Guimaga?"
- 4 ícones com texto: Suporte Contínuo · Preço Justo · Agilidade · Parceria
- Fundo off-white

**5. Texto Institucional**
- "A Guimaga Empilhadeiras, fundada em 2010, construiu sua trajetória com foco no suporte contínuo e na excelência do atendimento durante todo o contrato. Nosso objetivo é garantir soluções ágeis e eficazes a um preço justo, consolidando verdadeiras parcerias com os nossos clientes."

**6. CTA Final**
- Faixa amarela (`#FFC940`)
- Texto navy: "Pronto para otimizar sua operação?"
- Botão navy: "Fale com a Guimaga no WhatsApp"

---

### Equipamentos (`/equipamentos`)

**Banner de cabeçalho**
- Fundo navy, título "Nossos Equipamentos", subtítulo "Locação de empilhadeiras novas e seminovas para a sua operação"

**Catálogo — 3 cards:**

| Equipamento | Descrição |
|---|---|
| Empilhadeira Elétrica | Ideal para uso interno, silenciosa e sem emissão de gases. Disponível em diversas capacidades. |
| Empilhadeira a GLP | Alta performance para uso interno e externo. Indicada para operações de maior exigência. |
| Paleteira Elétrica | Movimentação horizontal ágil e eficiente. Ideal para armazéns e centros de distribuição. |

Cada card: imagem stock + nome + descrição + botão "Solicitar Orçamento" → WhatsApp

---

### Sobre (`/sobre`)

**Seção de apresentação**
- Título: "Sobre a Guimaga"
- Texto 1: "A Guimaga Empilhadeiras, fundada em 2010, construiu sua trajetória com foco no suporte contínuo e na excelência do atendimento durante todo o contrato. Nosso objetivo é garantir soluções ágeis e eficazes a um preço justo, consolidando verdadeiras parcerias com os nossos clientes."
- Texto 2 (do manual): "Guimaga Empilhadeiras, fundada em 2010 em Jundiaí, edificou-se com base no forte atendimento de pós-locação. O objetivo é assegurar soluções ágeis e eficazes a um preço justo, promovendo uma relação de parceria com nossos clientes."

**Destaque visual**
- Badge "Est. 2010" e "Jundiaí/SP" em destaque navy/amarelo

**Valores**
- Suporte Contínuo · Preço Justo · Agilidade · Parceria verdadeira

---

### Contato (`/contato`)

**Informações de contato**
- Botão WhatsApp grande e destacado
- Telefones: (11) 3395-7366 / (11) 94720-9899 / (11) 98136-0172
- Email: comercial@guimagaempilhadeiras.com.br
- Endereço: Av. Augusto Mazzi, 3.190, Jundiaí – SP
- Ícones Instagram e LinkedIn com links diretos

**Mapa**
- Google Maps embed: Av. Augusto Mazzi, 3.190, Jundiaí – SP

---

## Funcionalidades

- **WhatsApp:** todos os CTAs abrem `wa.me/5511947209899` com mensagem pré-definida "Olá! Gostaria de solicitar um orçamento de locação de empilhadeiras."
- **Redes sociais:** Instagram e LinkedIn abrem em nova aba (`target="_blank"`)
- **SEO:** metadata por página (title, description) usando Next.js Metadata API
- **Responsivo:** mobile-first, breakpoints sm/md/lg do Tailwind
- **Performance:** imagens com `next/image` para otimização automática

---

## Fora do Escopo

- Formulário com envio de email (sem backend)
- Painel administrativo
- Blog
- Área do cliente
- Autenticação
