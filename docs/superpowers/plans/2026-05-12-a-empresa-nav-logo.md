# A Empresa — Nav, Logo e Página Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Renomear "Home" para "Início", adicionar aba "A Empresa" com Missão/Visão/Valores, e trocar o logo JPEG pelo SVG vetorizado no Header e Footer.

**Architecture:** Três mudanças independentes — (1) atualização de `NAV_LINKS` em `constants.ts`, (2) troca do arquivo de logo em Header e Footer, (3) nova rota `/a-empresa` com page component. As mudanças de constants são cobertas por testes unitários existentes que precisam ser atualizados primeiro (TDD).

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind CSS, lucide-react, Jest + @testing-library/react

---

## File Map

| Ação | Arquivo |
|---|---|
| Modify | `src/lib/constants.ts` |
| Modify | `src/__tests__/constants.test.ts` |
| Copy | `input/logo-vetorizado.svg` → `public/images/logo.svg` |
| Modify | `src/components/Header.tsx` |
| Modify | `src/components/Footer.tsx` |
| Create | `src/app/a-empresa/page.tsx` |

---

## Task 1: Atualizar NAV_LINKS (TDD)

**Files:**
- Modify: `src/__tests__/constants.test.ts`
- Modify: `src/lib/constants.ts`

- [ ] **Step 1: Atualizar os testes para refletir o novo estado esperado**

Em `src/__tests__/constants.test.ts`, substitua os dois blocos abaixo:

Substitua:
```ts
it('has 4 nav links', () => {
  expect(NAV_LINKS).toHaveLength(4)
})
```

Por:
```ts
it('has 5 nav links', () => {
  expect(NAV_LINKS).toHaveLength(5)
})
it('first nav link is Início', () => {
  expect(NAV_LINKS[0]).toEqual({ label: 'Início', href: '/' })
})
it('includes A Empresa nav link', () => {
  expect(NAV_LINKS).toContainEqual({ label: 'A Empresa', href: '/a-empresa' })
})
```

- [ ] **Step 2: Rodar os testes para confirmar falha**

```bash
npx jest src/__tests__/constants.test.ts --no-coverage
```

Resultado esperado: FAIL — "has 4 nav links" passa (ainda 4), "has 5 nav links" falha, "first nav link is Início" falha, "includes A Empresa nav link" falha.

- [ ] **Step 3: Atualizar NAV_LINKS em constants.ts**

Em `src/lib/constants.ts`, substitua o array `NAV_LINKS`:

```ts
export const NAV_LINKS = [
  { label: 'Início',       href: '/' },
  { label: 'A Empresa',    href: '/a-empresa' },
  { label: 'Equipamentos', href: '/equipamentos' },
  { label: 'Sobre',        href: '/sobre' },
  { label: 'Contato',      href: '/contato' },
]
```

- [ ] **Step 4: Rodar os testes e confirmar que passam**

```bash
npx jest src/__tests__/constants.test.ts --no-coverage
```

Resultado esperado: PASS — todos os testes do describe 'constants' verdes.

- [ ] **Step 5: Commit**

```bash
git add src/__tests__/constants.test.ts src/lib/constants.ts
git commit -m "feat: rename Home to Início and add A Empresa nav link"
```

---

## Task 2: Trocar logo JPEG por SVG vetorizado

**Files:**
- Copy: `input/logo-vetorizado.svg` → `public/images/logo.svg`
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Copiar o SVG para a pasta public**

```bash
cp input/logo-vetorizado.svg public/images/logo.svg
```

Verificar que o arquivo existe:
```bash
ls public/images/
```
Resultado esperado: `logo.jpg  logo.svg`

- [ ] **Step 2: Atualizar Header.tsx**

Em `src/components/Header.tsx` linha 22, mude o `src` e `width`/`height` para corresponder ao SVG:

Substitua:
```tsx
<Image
  src="/images/logo.jpg"
  alt="Guimaga Empilhadeiras"
  width={160}
  height={48}
  className="h-10 w-auto brightness-0 invert"
  priority
/>
```

Por:
```tsx
<Image
  src="/images/logo.svg"
  alt="Guimaga Empilhadeiras"
  width={160}
  height={48}
  className="h-10 w-auto brightness-0 invert"
  priority
/>
```

- [ ] **Step 3: Atualizar Footer.tsx**

Em `src/components/Footer.tsx` linha 16, mude o `src`:

Substitua:
```tsx
<Image
  src="/images/logo.jpg"
  alt="Guimaga Empilhadeiras"
  width={140}
  height={42}
  className="mb-3 h-9 w-auto brightness-0 invert"
/>
```

Por:
```tsx
<Image
  src="/images/logo.svg"
  alt="Guimaga Empilhadeiras"
  width={140}
  height={42}
  className="mb-3 h-9 w-auto brightness-0 invert"
/>
```

- [ ] **Step 4: Confirmar que o build não quebra**

```bash
npx next build 2>&1 | tail -20
```

Resultado esperado: sem erros de compilação TypeScript ou de imagem. Se aparecer erro de SVG com `next/image`, adicione `unoptimized` ao `<Image>` do SVG:
```tsx
<Image src="/images/logo.svg" ... unoptimized />
```

- [ ] **Step 5: Commit**

```bash
git add public/images/logo.svg src/components/Header.tsx src/components/Footer.tsx
git commit -m "feat: replace logo JPEG with vectorized SVG in Header and Footer"
```

---

## Task 3: Criar página A Empresa

**Files:**
- Create: `src/app/a-empresa/page.tsx`

- [ ] **Step 1: Criar o arquivo da página**

Crie `src/app/a-empresa/page.tsx` com o seguinte conteúdo completo:

```tsx
import type { Metadata } from 'next'
import { Target, Eye, Star, Shield, Users, Award, Heart } from 'lucide-react'
import { WHATSAPP_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'A Empresa',
  description:
    'Conheça a missão, visão e valores da Guimaga Empilhadeiras. Referência em locação de empilhadeiras desde 2010 em Jundiaí/SP.',
}

const MVV = [
  {
    Icon: Target,
    title: 'Missão',
    text: 'Ser referência na manutenção, vendas e locação de máquinas e equipamentos de movimentação, primando pela excelência e zelando pela qualidade, através de profissionais qualificados e comprometidos.',
  },
  {
    Icon: Eye,
    title: 'Visão',
    text: 'Ampliar as atividades com qualidade, formar parcerias fortes e ser reconhecida no mercado.',
  },
  {
    Icon: Star,
    title: 'Valores',
    text: 'Confiança · Respeito · Excelência · Humildade e Integridade.',
  },
]

const VALUES = [
  { Icon: Shield, title: 'Confiança',                        description: 'Base de toda relação duradoura com clientes e colaboradores.' },
  { Icon: Users,  title: 'Respeito',                         description: 'Respeito aos clientes e colaboradores em cada interação.' },
  { Icon: Award,  title: 'Busca pela Excelência',            description: 'Qualidade e melhoria contínua em serviços e equipamentos.' },
  { Icon: Heart,  title: 'Humildade e Integridade',          description: 'Agir com transparência e simplicidade em tudo que fazemos.' },
]

export default function AEmpresaPage() {
  return (
    <>
      {/* ── BANNER ── */}
      <section className="bg-navy py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
            Guimaga Empilhadeiras
          </span>
          <h1 className="mt-2 font-display text-5xl font-extrabold md:text-6xl">
            A Empresa
          </h1>
        </div>
      </section>

      {/* ── QUEM SOMOS ── */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <span className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
                Quem Somos
              </span>
              <h2 className="mb-6 mt-2 font-display text-4xl font-extrabold text-navy">
                Uma trajetória construída com parceria
              </h2>
              <p className="leading-relaxed text-gray-mid">
                A Guimaga Empilhadeiras, fundada em 2010, construiu sua trajetória com foco
                no suporte contínuo e na excelência do atendimento durante todo o contrato.
                Nosso objetivo é garantir soluções ágeis e eficazes a um preço justo,
                consolidando verdadeiras parcerias com os nossos clientes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-navy p-6 text-center text-white">
                <div className="font-display text-3xl font-extrabold text-yellow">2010</div>
                <div className="mt-1 text-sm text-white/70">Ano de fundação</div>
              </div>
              <div className="rounded-2xl bg-yellow p-6 text-center">
                <div className="font-display text-2xl font-extrabold text-navy">Jundiaí</div>
                <div className="mt-1 text-sm text-navy/70">São Paulo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSÃO, VISÃO E VALORES ── */}
      <section className="bg-offwhite py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
              Nossa Essência
            </span>
            <h2 className="mt-2 font-display text-4xl font-extrabold text-navy md:text-5xl">
              Missão, Visão e Valores
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {MVV.map(({ Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy">
                  <Icon className="h-7 w-7 text-yellow" />
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold text-navy">{title}</h3>
                <p className="leading-relaxed text-gray-mid">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID DE VALORES ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
              O que nos guia
            </span>
            <h2 className="mt-2 font-display text-4xl font-extrabold text-navy md:text-5xl">
              Nossos Valores
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ Icon, title, description }) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                  <Icon className="h-6 w-6 text-yellow" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-navy">{title}</h3>
                <p className="text-sm text-gray-mid">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-yellow py-14 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="mb-4 font-display text-3xl font-extrabold text-navy">
            Vamos construir uma parceria?
          </h2>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-navy px-8 py-4 font-display font-bold text-white transition-opacity hover:opacity-90"
          >
            Fale com a Guimaga no WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Rodar todos os testes para garantir que nada quebrou**

```bash
npx jest --no-coverage
```

Resultado esperado: todos os testes passam (constants, config, WhatsAppButton).

- [ ] **Step 3: Rodar o build para confirmar zero erros TypeScript**

```bash
npx next build 2>&1 | tail -30
```

Resultado esperado: `✓ Compiled successfully` ou similar, sem erros de tipo.

- [ ] **Step 4: Commit**

```bash
git add src/app/a-empresa/page.tsx
git commit -m "feat: add A Empresa page with Missão, Visão e Valores"
```

---

## Verificação Final

- [ ] Rodar o servidor local e navegar até cada rota:

```bash
npx next dev
```

- `http://localhost:3000` — nav mostra "Início" como primeiro item
- `http://localhost:3000/a-empresa` — página carrega com todas as seções
- Header e Footer exibem o logo SVG (mais nítido que o JPEG)
- Nav mobile (hamburger) também reflete os 5 links
- Footer lista os 5 links de navegação corretamente
