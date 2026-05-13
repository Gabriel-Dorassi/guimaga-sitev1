---
name: equipamentos-e-hero
description: Substituir imagens de equipamentos por fotos reais e trocar hero da home por imagem local
metadata:
  type: project
---

# Equipamentos e Hero Home — Design Spec
**Data:** 2026-05-12
**Versão:** 1.0

---

## Resumo das mudanças

1. Trocar imagem hero da home (Unsplash → local `imagem-home.png`)
2. Expandir EQUIPMENT de 3 para 6 itens com fotos reais
3. Home preview mostra os 3 primeiros equipamentos (`slice(0, 3)`)
4. Atualizar teste de contagem de equipamentos

---

## Arquivos a criar/modificar

| Ação | Arquivo |
|---|---|
| Copy | `input/imagem-home.png` → `public/images/hero-home.png` |
| Copy | `input/GLP.png` → `public/images/equipamentos/glp.png` |
| Copy | `input/contrabalançada.png` → `public/images/equipamentos/contrabalancada.png` |
| Copy | `input/Retratil.png` → `public/images/equipamentos/retratil.png` |
| Copy | `input/Paleteira-elétrica.png` → `public/images/equipamentos/paleteira-eletrica.png` |
| Copy | `input/Transpaleteira-elétrica.png` → `public/images/equipamentos/transpaleteira-eletrica.png` |
| Copy | `input/Patolada.png` → `public/images/equipamentos/patolada.png` |
| Modify | `src/lib/constants.ts` |
| Modify | `src/app/page.tsx` |
| Modify | `src/__tests__/constants.test.ts` |

---

## 1. Imagens

### Hero da home
- Fonte: `input/imagem-home.png`
- Destino: `public/images/hero-home.png`

### Equipamentos
Criar pasta `public/images/equipamentos/` e copiar:

| Fonte | Destino |
|---|---|
| `input/GLP.png` | `public/images/equipamentos/glp.png` |
| `input/contrabalançada.png` | `public/images/equipamentos/contrabalancada.png` |
| `input/Retratil.png` | `public/images/equipamentos/retratil.png` |
| `input/Paleteira-elétrica.png` | `public/images/equipamentos/paleteira-eletrica.png` |
| `input/Transpaleteira-elétrica.png` | `public/images/equipamentos/transpaleteira-eletrica.png` |
| `input/Patolada.png` | `public/images/equipamentos/patolada.png` |

> `input/3.png` e `input/contrabalançada.png` são versões do mesmo equipamento — usar apenas `contrabalancada.png`.

---

## 2. EQUIPMENT constant (`src/lib/constants.ts`)

Substituir o array `EQUIPMENT` atual (3 itens) pelo seguinte (6 itens):

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

---

## 3. Home page (`src/app/page.tsx`)

### Hero
Substituir o `<Image>` do hero:

```tsx
// antes
src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"
alt="Empilhadeira em operação em armazém"

// depois
src="/images/hero-home.png"
alt="Empilhadeira em operação em armazém"
```

Adicionar `unoptimized` se necessário para PNG grande.

### Preview de equipamentos
Alterar o `.map()` para mostrar apenas os 3 primeiros:

```tsx
// antes
{EQUIPMENT.map((item) => (

// depois
{EQUIPMENT.slice(0, 3).map((item) => (
```

---

## 4. Teste (`src/__tests__/constants.test.ts`)

Atualizar contagem:

```ts
// antes
it('has 3 equipment types', () => {
  expect(EQUIPMENT).toHaveLength(3)
})

// depois
it('has 6 equipment types', () => {
  expect(EQUIPMENT).toHaveLength(6)
})
```

---

## Fora do Escopo

- Layout da página `/equipamentos` não muda
- Não alterar outros componentes além dos listados
- Não adicionar filtros ou categorias de equipamentos
