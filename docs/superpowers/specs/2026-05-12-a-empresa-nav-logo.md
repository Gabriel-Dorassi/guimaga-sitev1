---
name: a-empresa-nav-logo
description: Adicionar aba "A Empresa" com Missão/Visão/Valores, renomear Home para Início, trocar logo por SVG vetorizado
metadata:
  type: project
---

# Guimaga — A Empresa, Nav e Logo — Design Spec
**Data:** 2026-05-12
**Versão:** 1.0

---

## Resumo das mudanças

1. Renomear "Home" → "Início" na navegação
2. Adicionar aba "A Empresa" (`/a-empresa`) com conteúdo da pasta `input/`
3. Substituir `logo.jpg` pelo SVG vetorizado `logo-vetorizado.svg`

---

## 1. Navegação

### Arquivo: `src/lib/constants.ts`

`NAV_LINKS` atualizado:

```ts
export const NAV_LINKS = [
  { label: 'Início',       href: '/' },
  { label: 'A Empresa',    href: '/a-empresa' },
  { label: 'Equipamentos', href: '/equipamentos' },
  { label: 'Sobre',        href: '/sobre' },
  { label: 'Contato',      href: '/contato' },
]
```

---

## 2. Logo Vetorizado

- Copiar `input/logo-vetorizado.svg` → `public/images/logo.svg`
- Atualizar `src/components/Header.tsx`:
  - `src` de `/images/logo.jpg` para `/images/logo.svg`
  - Manter `className="h-10 w-auto brightness-0 invert"` (mantém versão branca no header navy)
- Atualizar `src/components/Footer.tsx` linha 16: `src` de `/images/logo.jpg` para `/images/logo.svg` (mantém `brightness-0 invert`)

---

## 3. Página "A Empresa" (`/a-empresa`)

### Arquivo: `src/app/a-empresa/page.tsx`

#### Seções (em ordem):

**Banner**
- Fundo navy
- Eyebrow: "Guimaga Empilhadeiras" (amarelo, uppercase, tracking-widest)
- H1: "A Empresa"

**Quem Somos**
- Layout 2 colunas (md): texto à esquerda, stat cards à direita
- Texto (da pasta input): "A Guimaga Empilhadeiras, fundada em 2010, construiu sua trajetória com foco no suporte contínuo e na excelência do atendimento durante todo o contrato. Nosso objetivo é garantir soluções ágeis e eficazes a um preço justo, consolidando verdadeiras parcerias com os nossos clientes."
- Stat cards: "2010" (Ano de fundação) · "Jundiaí/SP" (São Paulo)

**Missão, Visão e Valores — 3 cards**
- Layout: 3 colunas (md), fundo offwhite
- Card Missão (ícone `Target`): "Ser referência na manutenção, vendas e locação de máquinas e equipamentos de movimentação, primando pela excelência e zelando pela qualidade, através de profissionais qualificados e comprometidos."
- Card Visão (ícone `Eye`): "Ampliar as atividades com qualidade, formar parcerias fortes e ser reconhecida no mercado."
- Card Valores (ícone `Star`): destaque para os 4 valores abaixo

**Grid de Valores — 4 cards**
- Layout: 2×2 (sm) / 4 colunas (lg), fundo branco
- Confiança (ícone `Shield`)
- Respeito aos Clientes e Colaboradores (ícone `Users`)
- Busca pela Excelência (ícone `Award`)
- Humildade e Integridade (ícone `Heart`)

**CTA Final**
- Faixa amarela
- Texto: "Vamos construir uma parceria?"
- Botão navy: "Fale com a Guimaga no WhatsApp"

### Metadata SEO
```ts
export const metadata: Metadata = {
  title: 'A Empresa',
  description: 'Conheça a missão, visão e valores da Guimaga Empilhadeiras. Referência em locação de empilhadeiras desde 2010 em Jundiaí/SP.',
}
```

---

## Fora do Escopo

- Alterar conteúdo da página Sobre existente
- Alterar Footer além da troca de logo
- Qualquer outra página ou funcionalidade
