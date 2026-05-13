# Equipamentos e Hero Home Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Substituir as imagens de equipamentos por fotos reais e trocar o hero da home por uma imagem local, expandindo o catálogo de 3 para 6 equipamentos.

**Architecture:** Três tarefas independentes — (1) copiar assets de `input/` para `public/`, (2) atualizar `EQUIPMENT` em `constants.ts` com TDD, (3) atualizar `src/app/page.tsx` com novo hero e preview `.slice(0, 3)`.

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind CSS, Jest

---

## File Map

| Ação | Arquivo |
|---|---|
| Copy | `input/imagem-home.png` → `public/images/hero-home.png` |
| Copy (×6) | `input/*.png` → `public/images/equipamentos/*.png` |
| Modify | `src/__tests__/constants.test.ts` |
| Modify | `src/lib/constants.ts` |
| Modify | `src/app/page.tsx` |

---

## Task 1: Copiar assets de imagem

**Files:**
- Create dir: `public/images/equipamentos/`
- Create: `public/images/hero-home.png`
- Create: `public/images/equipamentos/glp.png`
- Create: `public/images/equipamentos/contrabalancada.png`
- Create: `public/images/equipamentos/retratil.png`
- Create: `public/images/equipamentos/paleteira-eletrica.png`
- Create: `public/images/equipamentos/transpaleteira-eletrica.png`
- Create: `public/images/equipamentos/patolada.png`

- [ ] **Step 1: Criar pasta e copiar todos os assets**

```bash
mkdir -p public/images/equipamentos
cp "input/imagem-home.png" public/images/hero-home.png
cp "input/GLP.png" public/images/equipamentos/glp.png
cp "input/contrabalançada.png" public/images/equipamentos/contrabalancada.png
cp "input/Retratil.png" public/images/equipamentos/retratil.png
cp "input/Paleteira-elétrica.png" public/images/equipamentos/paleteira-eletrica.png
cp "input/Transpaleteira-elétrica.png" public/images/equipamentos/transpaleteira-eletrica.png
cp "input/Patolada.png" public/images/equipamentos/patolada.png
```

- [ ] **Step 2: Verificar que todos os arquivos existem**

```bash
ls public/images/hero-home.png
ls public/images/equipamentos/
```

Resultado esperado:
```
public/images/hero-home.png
contrabalancada.png  glp.png  paleteira-eletrica.png  patolada.png  retratil.png  transpaleteira-eletrica.png
```

- [ ] **Step 3: Commit**

```bash
git add public/images/hero-home.png public/images/equipamentos/
git commit -m "feat: add equipment photos and home hero image"
```

---

## Task 2: Atualizar EQUIPMENT constant (TDD)

**Files:**
- Modify: `src/__tests__/constants.test.ts`
- Modify: `src/lib/constants.ts`

- [ ] **Step 1: Atualizar o teste para 6 equipamentos**

Em `src/__tests__/constants.test.ts`, substitua:

```ts
it('has 3 equipment types', () => {
  expect(EQUIPMENT).toHaveLength(3)
})
```

Por:

```ts
it('has 6 equipment types', () => {
  expect(EQUIPMENT).toHaveLength(6)
})
it('all equipment items have local image paths', () => {
  EQUIPMENT.forEach((item) => {
    expect(item.image).toMatch(/^\/images\//)
  })
})
```

- [ ] **Step 2: Rodar os testes para confirmar falha**

```bash
npx jest src/__tests__/constants.test.ts --no-coverage
```

Resultado esperado: FAIL — `has 6 equipment types` falha (array tem 3), `all equipment items have local image paths` falha (itens usam URLs Unsplash).

- [ ] **Step 3: Substituir o array EQUIPMENT em `src/lib/constants.ts`**

Substitua todo o array `EQUIPMENT` (das linhas `export const EQUIPMENT = [` até o `]` de fechamento):

```ts
export const EQUIPMENT = [
  {
    id: 'glp',
    name: 'Empilhadeira a GLP',
    description:
      'Alta performance para uso interno e externo. Indicada para operações de maior exigência e capacidade de carga.',
    image: '/images/equipamentos/glp.png',
    alt: 'Empilhadeira a GLP amarela com garfos vermelhos',
    whatsappMsg: 'Olá! Tenho interesse em locar uma Empilhadeira a GLP. Pode me passar mais informações?',
  },
  {
    id: 'contrabalancada',
    name: 'Empilhadeira Contrabalançada',
    description:
      'Versatilidade para uso interno e externo. Motor elétrico silencioso e eficiente, com ótima estabilidade em diferentes pisos.',
    image: '/images/equipamentos/contrabalancada.png',
    alt: 'Empilhadeira contrabalançada elétrica amarela',
    whatsappMsg: 'Olá! Tenho interesse em locar uma Empilhadeira Contrabalançada. Pode me passar mais informações?',
  },
  {
    id: 'retratil',
    name: 'Empilhadeira Retrátil',
    description:
      'Ideal para corredores estreitos e armazenagem em grande altura. Maximiza o aproveitamento vertical do armazém.',
    image: '/images/equipamentos/retratil.png',
    alt: 'Empilhadeira retrátil em armazém',
    whatsappMsg: 'Olá! Tenho interesse em locar uma Empilhadeira Retrátil. Pode me passar mais informações?',
  },
  {
    id: 'paleteira-eletrica',
    name: 'Paleteira Elétrica',
    description:
      'Movimentação horizontal ágil e eficiente. Ideal para armazéns e centros de distribuição.',
    image: '/images/equipamentos/paleteira-eletrica.png',
    alt: 'Paleteira elétrica',
    whatsappMsg: 'Olá! Tenho interesse em locar uma Paleteira Elétrica. Pode me passar mais informações?',
  },
  {
    id: 'transpaleteira-eletrica',
    name: 'Transpaleteira Elétrica',
    description:
      'Agilidade na movimentação de cargas em longas distâncias, com plataforma para operador embarcado.',
    image: '/images/equipamentos/transpaleteira-eletrica.png',
    alt: 'Transpaleteira elétrica com plataforma',
    whatsappMsg: 'Olá! Tenho interesse em locar uma Transpaleteira Elétrica. Pode me passar mais informações?',
  },
  {
    id: 'patolada',
    name: 'Empilhadeira Patolada',
    description:
      'Solução compacta para armazenagem em corredores estreitos e espaços reduzidos com alta eficiência.',
    image: '/images/equipamentos/patolada.png',
    alt: 'Empilhadeira patolada verde',
    whatsappMsg: 'Olá! Tenho interesse em locar uma Empilhadeira Patolada. Pode me passar mais informações?',
  },
]
```

- [ ] **Step 4: Rodar os testes e confirmar que passam**

```bash
npx jest src/__tests__/constants.test.ts --no-coverage
```

Resultado esperado: PASS — todos os testes do describe 'constants' verdes, incluindo os 2 novos.

- [ ] **Step 5: Commit**

```bash
git add src/__tests__/constants.test.ts src/lib/constants.ts
git commit -m "feat: expand EQUIPMENT to 6 items with real photos"
```

---

## Task 3: Atualizar home page (hero + preview)

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Trocar a imagem hero**

Em `src/app/page.tsx`, dentro da seção `{/* ── HERO ── */}`, substitua o `<Image>` do hero:

```tsx
// Antes
<Image
  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"
  alt="Empilhadeira em operação em armazém"
  fill
  className="object-cover"
  priority
/>
```

Por:

```tsx
// Depois
<Image
  src="/images/hero-home.png"
  alt="Empilhadeira em operação em armazém"
  fill
  className="object-cover"
  priority
/>
```

- [ ] **Step 2: Limitar o preview de equipamentos a 3 itens**

Na mesma seção `{/* ── EQUIPMENT PREVIEW ── */}`, localize a linha:

```tsx
{EQUIPMENT.map((item) => (
```

E substitua por:

```tsx
{EQUIPMENT.slice(0, 3).map((item) => (
```

- [ ] **Step 3: Rodar todos os testes**

```bash
npx jest --no-coverage
```

Resultado esperado: todos os 16 testes passam (14 existentes + 2 novos de constants).

- [ ] **Step 4: Confirmar que o build não quebra**

```bash
npx next build 2>&1 | tail -20
```

Resultado esperado: `✓ Compiled successfully` sem erros de TypeScript ou de imagem.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: use local hero image and limit equipment preview to 3 items"
```

---

## Verificação Final

- [ ] Subir o servidor local:

```bash
npx next dev
```

- `http://localhost:3000` — hero mostra a imagem do armazém escuro com empilhadeira amarela
- Seção de equipamentos na home mostra 3 cards (GLP, Contrabalançada, Retrátil) com as fotos reais
- `http://localhost:3000/equipamentos` — todos os 6 equipamentos aparecem com fotos reais
