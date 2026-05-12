# Guimaga Site — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modern 4-page institutional website for Guimaga Empilhadeiras using Next.js 14 + Tailwind CSS, deployable on Vercel, with WhatsApp as primary CTA.

**Architecture:** Next.js 14 App Router with a shared root layout (Header + Footer + WhatsApp floating button) and four page routes (`/`, `/equipamentos`, `/sobre`, `/contato`). All contact data centralized in `src/lib/constants.ts`. No backend — all CTAs open `wa.me` links. Images from Unsplash (royalty-free).

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, `next/font/google` (Barlow Condensed + Inter), `next/image`, Lucide React (icons), Jest + React Testing Library

**Working directory:** `C:\Users\Gabriel\Desktop\guimaga-site`

---

## File Map

| File | Responsibility |
|---|---|
| `src/lib/constants.ts` | All contact data, equipment list, nav links, social URLs, WhatsApp link |
| `src/app/layout.tsx` | Root layout: fonts, global metadata, Header + Footer + WhatsAppButton |
| `src/app/globals.css` | Tailwind directives + base body styles |
| `src/app/page.tsx` | Home: Hero, Numbers bar, Equipment preview, Why Guimaga, Institutional text, CTA strip |
| `src/app/equipamentos/page.tsx` | Equipment catalog: banner + 3 cards with per-item WhatsApp links |
| `src/app/sobre/page.tsx` | About: history text, stat highlights, values grid, CTA |
| `src/app/contato/page.tsx` | Contact: WhatsApp card, info grid (phones/email/address/social), Maps embed |
| `src/components/Header.tsx` | Sticky navbar: logo, nav links, Instagram + LinkedIn icons, WhatsApp CTA, mobile hamburger |
| `src/components/Footer.tsx` | Footer: logo, nav, contact info, social icons |
| `src/components/WhatsAppButton.tsx` | Floating green button, fixed bottom-right on all pages |
| `tailwind.config.ts` | Brand color tokens + font family variables |
| `next.config.ts` | Allow Unsplash remote image patterns |

---

## Task 1: Project Initialization

**Files:**
- Create: full Next.js project scaffold
- Create: `public/images/logo.jpg`
- Create: `jest.config.ts`, `jest.setup.ts`

- [ ] **Step 1: Initialize Next.js project**

In `C:\Users\Gabriel\Desktop\guimaga-site`, run:

```powershell
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack --yes
```

Expected: "Success! Created guimaga-site" (or similar). The command will scaffold `src/app/`, `tailwind.config.ts`, `next.config.ts`, `package.json`, etc.

- [ ] **Step 2: Install additional dependencies**

```powershell
npm install lucide-react
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom @types/jest
```

Expected: packages installed without errors.

- [ ] **Step 3: Copy logo to public/images**

```powershell
New-Item -ItemType Directory -Force -Path "public\images"
Copy-Item "input\Prancheta 36-100.jpg" "public\images\logo.jpg"
```

Expected: `public/images/logo.jpg` exists.

- [ ] **Step 4: Create jest.config.ts**

Create `jest.config.ts` (overwrite if exists):

```typescript
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)
```

- [ ] **Step 5: Create jest.setup.ts**

Create `jest.setup.ts`:

```typescript
import '@testing-library/jest-dom'
```

- [ ] **Step 6: Configure next.config.ts**

Replace `next.config.ts` with:

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
```

- [ ] **Step 7: Initial commit**

```bash
git init
git add .
git commit -m "chore: initialize Next.js 14 project with Tailwind, Jest and dependencies"
```

---

## Task 2: Tailwind Config and Global Styles

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`
- Create: `src/__tests__/config.test.ts`

- [ ] **Step 1: Write failing test**

Create `src/__tests__/config.test.ts`:

```typescript
import tailwindConfig from '../../tailwind.config'

describe('Tailwind brand config', () => {
  it('defines navy brand color', () => {
    const colors = (tailwindConfig.theme?.extend as any)?.colors
    expect(colors.navy).toBe('#1B2B6E')
  })
  it('defines yellow accent color', () => {
    const colors = (tailwindConfig.theme?.extend as any)?.colors
    expect(colors.yellow).toBe('#FFC940')
  })
})
```

- [ ] **Step 2: Run test — expect FAIL**

```powershell
npx jest src/__tests__/config.test.ts --no-coverage
```

Expected: FAIL (colors not defined yet)

- [ ] **Step 3: Replace tailwind.config.ts with brand tokens**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B2B6E',
        navyDeep: '#0F1742',
        yellow: '#FFC940',
        grayMid: '#6B7280',
        offwhite: '#F5F5F3',
      },
      fontFamily: {
        display: ['var(--font-barlow)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 4: Run test — expect PASS**

```powershell
npx jest src/__tests__/config.test.ts --no-coverage
```

Expected: PASS

- [ ] **Step 5: Replace src/app/globals.css**

```css
@import "tailwindcss";

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-offwhite text-navyDeep font-sans;
  }
}
```

- [ ] **Step 6: Commit**

```bash
git add tailwind.config.ts src/app/globals.css src/__tests__/config.test.ts
git commit -m "feat: configure brand colors and font families in Tailwind"
```

---

## Task 3: Constants

**Files:**
- Create: `src/lib/constants.ts`
- Create: `src/__tests__/constants.test.ts`

- [ ] **Step 1: Write failing test**

Create `src/__tests__/constants.test.ts`:

```typescript
import { WHATSAPP_LINK, CONTACT, EQUIPMENT, NAV_LINKS } from '@/lib/constants'

describe('constants', () => {
  it('WhatsApp link includes correct number', () => {
    expect(WHATSAPP_LINK).toContain('5511947209899')
  })
  it('WhatsApp link starts with https://wa.me', () => {
    expect(WHATSAPP_LINK).toMatch(/^https:\/\/wa\.me\//)
  })
  it('has 3 contact phones', () => {
    expect(CONTACT.phones).toHaveLength(3)
  })
  it('contact email is defined', () => {
    expect(CONTACT.email).toContain('@')
  })
  it('has 3 equipment types', () => {
    expect(EQUIPMENT).toHaveLength(3)
  })
  it('has 4 nav links', () => {
    expect(NAV_LINKS).toHaveLength(4)
  })
  it('Instagram URL is correct', () => {
    expect(CONTACT.instagram).toContain('instagram.com/guimagaempilhadeiras')
  })
  it('LinkedIn URL is correct', () => {
    expect(CONTACT.linkedin).toContain('linkedin.com/company/guimaga-empilhadeiras')
  })
})
```

- [ ] **Step 2: Run test — expect FAIL**

```powershell
npx jest src/__tests__/constants.test.ts --no-coverage
```

Expected: FAIL (module not found)

- [ ] **Step 3: Create src/lib/constants.ts**

```typescript
export const WHATSAPP_NUMBER = '5511947209899'
export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Gostaria de solicitar um orçamento de locação de empilhadeiras.'
)
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export const CONTACT = {
  company: 'Guimaga Empilhadeiras',
  address: 'Av. Augusto Mazzi, 3.190, Jundiaí – SP',
  phones: ['(11) 3395-7366', '(11) 94720-9899', '(11) 98136-0172'],
  email: 'comercial@guimagaempilhadeiras.com.br',
  instagram: 'https://www.instagram.com/guimagaempilhadeiras/?hl=pt-br',
  linkedin:
    'https://www.linkedin.com/company/guimaga-empilhadeiras/posts/?feedView=all',
  // Generate a proper embed URL from Google Maps for this address and replace below.
  // Go to maps.google.com → search "Av. Augusto Mazzi 3190 Jundiaí SP" → Share → Embed a map → copy src URL.
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.08!2d-46.916!3d-23.183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf2c9a1f0a4c47%3A0xa!2sAv.%20Augusto%20Mazzi%2C%203190%20-%20Jundia%C3%AD%2C%20SP!5e0!3m2!1spt!2sbr!4v1',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Equipamentos', href: '/equipamentos' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
]

export const EQUIPMENT = [
  {
    id: 'eletrica',
    name: 'Empilhadeira Elétrica',
    description:
      'Ideal para uso interno. Silenciosa, sem emissão de gases e disponível em diversas capacidades de carga.',
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
    alt: 'Empilhadeira elétrica em operação em armazém',
    whatsappMsg: 'Olá! Tenho interesse em locar uma Empilhadeira Elétrica. Pode me passar mais informações?',
  },
  {
    id: 'glp',
    name: 'Empilhadeira a GLP',
    description:
      'Alta performance para uso interno e externo. Indicada para operações de maior exigência e capacidade de carga.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    alt: 'Empilhadeira a GLP em operação em armazém',
    whatsappMsg: 'Olá! Tenho interesse em locar uma Empilhadeira a GLP. Pode me passar mais informações?',
  },
  {
    id: 'paleteira',
    name: 'Paleteira Elétrica',
    description:
      'Movimentação horizontal ágil e eficiente. Ideal para armazéns e centros de distribuição.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    alt: 'Paleteira elétrica em armazém',
    whatsappMsg: 'Olá! Tenho interesse em locar uma Paleteira Elétrica. Pode me passar mais informações?',
  },
]

export const WHY_GUIMAGA = [
  {
    icon: 'Headphones',
    title: 'Suporte Contínuo',
    description: 'Atendimento dedicado durante todo o contrato de locação, do início ao fim.',
  },
  {
    icon: 'DollarSign',
    title: 'Preço Justo',
    description: 'Soluções competitivas sem abrir mão da qualidade dos equipamentos.',
  },
  {
    icon: 'Zap',
    title: 'Agilidade',
    description: 'Respostas rápidas e soluções eficazes para manter sua operação funcionando.',
  },
  {
    icon: 'Handshake',
    title: 'Parceria Verdadeira',
    description: 'Construímos relações de longo prazo baseadas em confiança e resultados.',
  },
]
```

- [ ] **Step 4: Run test — expect PASS**

```powershell
npx jest src/__tests__/constants.test.ts --no-coverage
```

Expected: PASS (8 tests)

- [ ] **Step 5: Commit**

```bash
git add src/lib/constants.ts src/__tests__/constants.test.ts
git commit -m "feat: add centralized constants for contact, equipment, nav and WhatsApp"
```

---

## Task 4: WhatsApp Floating Button

**Files:**
- Create: `src/components/WhatsAppButton.tsx`
- Create: `src/__tests__/WhatsAppButton.test.tsx`

- [ ] **Step 1: Write failing test**

Create `src/__tests__/WhatsAppButton.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import WhatsAppButton from '@/components/WhatsAppButton'

describe('WhatsAppButton', () => {
  it('renders a link pointing to the correct WhatsApp number', () => {
    render(<WhatsAppButton />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', expect.stringContaining('wa.me/5511947209899'))
  })

  it('opens in a new tab', () => {
    render(<WhatsAppButton />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
```

- [ ] **Step 2: Run test — expect FAIL**

```powershell
npx jest src/__tests__/WhatsAppButton.test.tsx --no-coverage
```

Expected: FAIL (module not found)

- [ ] **Step 3: Create WhatsAppButton component**

Create `src/components/WhatsAppButton.tsx`:

```tsx
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_LINK } from '@/lib/constants'

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7 fill-white text-white" />
    </a>
  )
}
```

- [ ] **Step 4: Run test — expect PASS**

```powershell
npx jest src/__tests__/WhatsAppButton.test.tsx --no-coverage
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/WhatsAppButton.tsx src/__tests__/WhatsAppButton.test.tsx
git commit -m "feat: add floating WhatsApp button with correct wa.me link"
```

---

## Task 5: Header Component

**Files:**
- Create: `src/components/Header.tsx`

- [ ] **Step 1: Create src/components/Header.tsx**

```tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Instagram, Linkedin } from 'lucide-react'
import { NAV_LINKS, CONTACT, WHATSAPP_LINK } from '@/lib/constants'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-navy shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="Guimaga Empilhadeiras"
            width={160}
            height={48}
            className="h-10 w-auto brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                pathname === link.href ? 'text-yellow' : 'text-white hover:text-yellow'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social icons + WhatsApp CTA — desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white transition-colors hover:text-yellow"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white transition-colors hover:text-yellow"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-yellow px-4 py-2 text-sm font-bold text-navy transition-opacity hover:opacity-90"
          >
            Fale pelo WhatsApp
          </a>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-navy px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm font-semibold ${
                pathname === link.href ? 'text-yellow' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-4">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow px-4 py-2 text-sm font-bold text-navy"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Header.tsx
git commit -m "feat: add responsive Header with nav, social icons and WhatsApp CTA"
```

---

## Task 6: Footer Component

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Create src/components/Footer.tsx**

```tsx
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react'
import { NAV_LINKS, CONTACT } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navyDeep text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">

          {/* Brand */}
          <div>
            <Image
              src="/images/logo.jpg"
              alt="Guimaga Empilhadeiras"
              width={140}
              height={42}
              className="mb-3 h-9 w-auto brightness-0 invert"
            />
            <p className="text-sm text-white/70">Locação de Empilhadeiras desde 2010</p>
            <div className="mt-4 flex gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/70 transition-colors hover:text-yellow"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/70 transition-colors hover:text-yellow"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
              Navegação
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
              Contato
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                {CONTACT.address}
              </li>
              {CONTACT.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a
                    href={`tel:${phone.replace(/\D/g, '')}`}
                    className="transition-colors hover:text-white"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Guimaga Empilhadeiras. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: add Footer with nav, contact info and social links"
```

---

## Task 7: Root Layout

**Files:**
- Modify: `src/app/layout.tsx`
- Delete: auto-generated content in `src/app/page.tsx` (will be replaced in Task 8)

- [ ] **Step 1: Replace src/app/layout.tsx**

```tsx
import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-barlow',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Guimaga Empilhadeiras | Locação de Empilhadeiras em Jundiaí',
    template: '%s | Guimaga Empilhadeiras',
  },
  description:
    'Especialistas em locação de empilhadeiras desde 2010. Empilhadeiras elétricas, a GLP e paleteiras elétricas em Jundiaí – SP.',
  keywords: [
    'locação de empilhadeiras',
    'aluguel de empilhadeiras',
    'Jundiaí',
    'empilhadeira elétrica',
    'empilhadeira GLP',
    'paleteira elétrica',
  ],
  openGraph: {
    siteName: 'Guimaga Empilhadeiras',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Verify dev server starts without errors**

```powershell
npm run dev
```

Open http://localhost:3000 — should show the navy Header and dark Footer without any JS errors in the console.

Stop with Ctrl+C.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: wire root layout with Google Fonts, Header, Footer and WhatsAppButton"
```

---

## Task 8: Home Page

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace src/app/page.tsx**

```tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Headphones, DollarSign, Zap, Handshake } from 'lucide-react'
import { WHATSAPP_LINK, EQUIPMENT, WHY_GUIMAGA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Locação de Empilhadeiras em Jundiaí',
  description:
    'Especialistas em locação de empilhadeiras desde 2010. Sua parceira ideal em movimentação de cargas em Jundiaí – SP.',
}

const ICON_MAP: Record<string, React.ElementType> = {
  Headphones,
  DollarSign,
  Zap,
  Handshake,
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"
          alt="Empilhadeira em operação em armazém"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <span className="mb-4 inline-block rounded-full border border-yellow px-4 py-1 font-display text-sm font-bold uppercase tracking-widest text-yellow">
            Desde 2010 · Jundiaí/SP
          </span>
          <h1 className="mb-6 font-display text-5xl font-extrabold leading-tight md:text-7xl">
            Especialistas em<br />
            <span className="text-yellow">Locação de</span><br />
            Empilhadeiras
          </h1>
          <p className="mb-8 text-lg text-white/80 md:text-xl">
            Sua parceira ideal em movimentação de cargas.
            Equipamentos novos e seminovos para a sua operação.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-yellow px-8 py-4 font-display text-lg font-bold text-navy transition-opacity hover:opacity-90"
          >
            Solicitar Orçamento pelo WhatsApp
          </a>
        </div>
      </section>

      {/* ── NUMBERS BAR ── */}
      <section className="bg-navy py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-4 text-center text-white sm:grid-cols-3">
          {[
            { value: 'Est. 2010', label: 'Anos no mercado' },
            { value: 'Jundiaí/SP', label: 'Atendimento regional' },
            { value: 'Novas e Seminovas', label: 'Frotas disponíveis' },
          ].map((stat) => (
            <div key={stat.value}>
              <div className="font-display text-3xl font-extrabold text-yellow md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EQUIPMENT PREVIEW ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
              Catálogo
            </span>
            <h2 className="mt-2 font-display text-4xl font-extrabold text-navy md:text-5xl">
              Nossos Equipamentos
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {EQUIPMENT.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-display text-xl font-bold text-navy">
                    {item.name}
                  </h3>
                  <p className="mb-4 text-sm text-grayMid">{item.description}</p>
                  <Link
                    href="/equipamentos"
                    className="text-sm font-semibold text-navy underline underline-offset-4 transition-colors hover:text-yellow"
                  >
                    Ver mais →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/equipamentos"
              className="inline-block rounded-full border-2 border-navy px-8 py-3 font-display font-bold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Ver todos os equipamentos
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY GUIMAGA ── */}
      <section className="bg-offwhite py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
              Diferenciais
            </span>
            <h2 className="mt-2 font-display text-4xl font-extrabold text-navy md:text-5xl">
              Por que a Guimaga?
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_GUIMAGA.map((item) => {
              const Icon = ICON_MAP[item.icon]
              return (
                <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                    <Icon className="h-6 w-6 text-yellow" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="text-sm text-grayMid">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── INSTITUTIONAL TEXT ── */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-lg leading-relaxed text-grayMid md:text-xl">
            A Guimaga Empilhadeiras, fundada em 2010, construiu sua trajetória com foco
            no suporte contínuo e na excelência do atendimento durante todo o contrato.
            Nosso objetivo é garantir soluções ágeis e eficazes a um preço justo,
            consolidando verdadeiras parcerias com os nossos clientes.
          </p>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-yellow py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-display text-3xl font-extrabold text-navy md:text-4xl">
            Pronto para otimizar sua operação?
          </h2>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-navy px-8 py-4 font-display text-lg font-bold text-white transition-opacity hover:opacity-90"
          >
            Fale com a Guimaga no WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Verify in browser**

```powershell
npm run dev
```

Open http://localhost:3000. Verify:
- Hero: full-screen with navy overlay, yellow badge, H1, yellow CTA button
- Numbers bar: navy strip with 3 stats in yellow
- 3 equipment cards with images and "Ver mais" links
- 4 "Por que a Guimaga" cards with icons on navy circles
- Institutional text paragraph
- Yellow CTA strip at the bottom

Stop with Ctrl+C.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: implement Home page with hero, equipment preview, why section and CTA strip"
```

---

## Task 9: Equipamentos Page

**Files:**
- Create: `src/app/equipamentos/page.tsx`

- [ ] **Step 1: Create src/app/equipamentos/page.tsx**

```tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import { EQUIPMENT, WHATSAPP_LINK, WHATSAPP_NUMBER } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Equipamentos',
  description:
    'Conheça nossa frota: empilhadeiras elétricas, a GLP e paleteiras elétricas para locação em Jundiaí – SP.',
}

export default function EquipamentosPage() {
  return (
    <>
      {/* ── BANNER ── */}
      <section className="bg-navy py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
            Catálogo
          </span>
          <h1 className="mt-2 font-display text-5xl font-extrabold md:text-6xl">
            Nossos Equipamentos
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Locação de empilhadeiras novas e seminovas, oferecendo os melhores
            equipamentos para a sua operação.
          </p>
        </div>
      </section>

      {/* ── CARDS ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            {EQUIPMENT.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-2xl bg-white shadow-md">
                <div className="relative h-64">
                  <Image src={item.image} alt={item.alt} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <h2 className="mb-3 font-display text-2xl font-extrabold text-navy">
                    {item.name}
                  </h2>
                  <p className="mb-6 text-grayMid">{item.description}</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(item.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-yellow px-6 py-3 font-display font-bold text-navy transition-opacity hover:opacity-90"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-offwhite py-14 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="mb-4 font-display text-3xl font-extrabold text-navy">
            Não encontrou o que procura?
          </h2>
          <p className="mb-6 text-grayMid">
            Entre em contato e vamos encontrar a melhor solução para a sua operação.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-navy px-8 py-4 font-display font-bold text-white transition-opacity hover:opacity-90"
          >
            Fale pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Verify in browser**

```powershell
npm run dev
```

Open http://localhost:3000/equipamentos. Verify:
- Navy banner with title and subtitle
- 3 cards each with image, name, description
- Each "Solicitar Orçamento" button opens WhatsApp with an equipment-specific message
- Bottom CTA section with navy button

Stop with Ctrl+C.

- [ ] **Step 3: Commit**

```bash
git add src/app/equipamentos/page.tsx
git commit -m "feat: implement Equipamentos page with equipment catalog and per-item WhatsApp CTAs"
```

---

## Task 10: Sobre Page

**Files:**
- Create: `src/app/sobre/page.tsx`

- [ ] **Step 1: Create src/app/sobre/page.tsx**

```tsx
import type { Metadata } from 'next'
import { Calendar, MapPin, Headphones, DollarSign, Zap, Handshake } from 'lucide-react'
import { WHATSAPP_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conheça a Guimaga Empilhadeiras, fundada em 2010 em Jundiaí/SP. Nossa história, valores e compromisso com a excelência.',
}

const VALUES = [
  {
    Icon: Headphones,
    title: 'Suporte Contínuo',
    description: 'Atendimento dedicado durante todo o contrato de locação, do início ao fim.',
  },
  {
    Icon: DollarSign,
    title: 'Preço Justo',
    description: 'Soluções competitivas sem abrir mão da qualidade dos equipamentos.',
  },
  {
    Icon: Zap,
    title: 'Agilidade',
    description: 'Respostas rápidas e eficazes para manter sua operação funcionando.',
  },
  {
    Icon: Handshake,
    title: 'Parceria Verdadeira',
    description: 'Construímos relações de longo prazo baseadas em confiança e resultados.',
  },
]

export default function SobrePage() {
  return (
    <>
      {/* ── BANNER ── */}
      <section className="bg-navy py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
            Nossa História
          </span>
          <h1 className="mt-2 font-display text-5xl font-extrabold md:text-6xl">
            Sobre a Guimaga
          </h1>
        </div>
      </section>

      {/* ── HISTORY ── */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 font-display text-4xl font-extrabold text-navy">
                Uma trajetória construída com parceria
              </h2>
              <p className="mb-4 leading-relaxed text-grayMid">
                A Guimaga Empilhadeiras, fundada em 2010, construiu sua trajetória com foco
                no suporte contínuo e na excelência do atendimento durante todo o contrato.
                Nosso objetivo é garantir soluções ágeis e eficazes a um preço justo,
                consolidando verdadeiras parcerias com os nossos clientes.
              </p>
              <p className="leading-relaxed text-grayMid">
                Fundada em Jundiaí, a Guimaga edificou-se com base no forte atendimento de
                pós-locação, promovendo uma relação de parceria que vai além do simples aluguel
                de equipamentos.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-navy p-6 text-center text-white">
                <Calendar className="mx-auto mb-3 h-8 w-8 text-yellow" />
                <div className="font-display text-3xl font-extrabold text-yellow">2010</div>
                <div className="mt-1 text-sm text-white/70">Ano de fundação</div>
              </div>
              <div className="rounded-2xl bg-yellow p-6 text-center">
                <MapPin className="mx-auto mb-3 h-8 w-8 text-navy" />
                <div className="font-display text-2xl font-extrabold text-navy">Jundiaí</div>
                <div className="mt-1 text-sm text-navy/70">São Paulo</div>
              </div>
              <div className="col-span-2 rounded-2xl bg-offwhite p-6 text-center">
                <div className="font-display text-lg font-extrabold text-navy">
                  Novas e Seminovas
                </div>
                <div className="mt-1 text-sm text-grayMid">Frotas disponíveis para locação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-offwhite py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
              Nossa Essência
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
                <p className="text-sm text-grayMid">{description}</p>
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

- [ ] **Step 2: Verify in browser**

```powershell
npm run dev
```

Open http://localhost:3000/sobre. Verify:
- Navy banner
- History text with 2-column layout (text left, stat cards right)
- "Est. 2010" card in navy, "Jundiaí" card in yellow
- 4 values cards on off-white background
- Yellow CTA strip

Stop with Ctrl+C.

- [ ] **Step 3: Commit**

```bash
git add src/app/sobre/page.tsx
git commit -m "feat: implement Sobre page with history, stat cards and values grid"
```

---

## Task 11: Contato Page

**Files:**
- Create: `src/app/contato/page.tsx`

- [ ] **Step 1: Create src/app/contato/page.tsx**

> **Note on Google Maps embed:** The `mapsEmbed` URL in `constants.ts` is an approximation. Before go-live, open Google Maps, search "Av. Augusto Mazzi, 3190, Jundiaí, SP", click Share → Embed a map, copy the `src` attribute value, and replace `CONTACT.mapsEmbed` in `constants.ts`.

```tsx
import type { Metadata } from 'next'
import { Phone, Mail, MapPin, MessageCircle, Instagram, Linkedin } from 'lucide-react'
import { CONTACT, WHATSAPP_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a Guimaga Empilhadeiras. WhatsApp, telefone, email e localização em Jundiaí – SP.',
}

export default function ContatoPage() {
  return (
    <>
      {/* ── BANNER ── */}
      <section className="bg-navy py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-yellow">
            Fale Conosco
          </span>
          <h1 className="mt-2 font-display text-5xl font-extrabold md:text-6xl">Contato</h1>
          <p className="mt-4 text-lg text-white/70">
            Estamos prontos para encontrar a melhor solução para a sua operação.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">

            {/* WhatsApp — full width, principal */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl bg-[#25D366] p-8 text-white transition-opacity hover:opacity-90 md:col-span-2"
            >
              <MessageCircle className="mt-1 h-8 w-8 flex-shrink-0 fill-white" />
              <div>
                <div className="font-display text-xs font-bold uppercase tracking-widest text-white/70">
                  Principal — Atendimento rápido
                </div>
                <div className="mt-1 font-display text-2xl font-extrabold">
                  WhatsApp: (11) 94720-9899
                </div>
                <div className="mt-1 text-white/80">Clique para abrir uma conversa</div>
              </div>
            </a>

            {/* Phones */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                <Phone className="h-6 w-6 text-yellow" />
              </div>
              <h2 className="mb-4 font-display text-xl font-bold text-navy">Telefones</h2>
              <ul className="space-y-3">
                {CONTACT.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\D/g, '')}`}
                      className="text-grayMid transition-colors hover:text-navy"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                <Mail className="h-6 w-6 text-yellow" />
              </div>
              <h2 className="mb-4 font-display text-xl font-bold text-navy">E-mail</h2>
              <a
                href={`mailto:${CONTACT.email}`}
                className="break-all text-grayMid transition-colors hover:text-navy"
              >
                {CONTACT.email}
              </a>
            </div>

            {/* Address */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                <MapPin className="h-6 w-6 text-yellow" />
              </div>
              <h2 className="mb-4 font-display text-xl font-bold text-navy">Endereço</h2>
              <p className="text-grayMid">{CONTACT.address}</p>
            </div>

            {/* Social */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="mb-6 font-display text-xl font-bold text-navy">Redes Sociais</h2>
              <div className="flex flex-col gap-4">
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-grayMid transition-colors hover:text-navy"
                >
                  <Instagram className="h-5 w-5 flex-shrink-0" />
                  <span>@guimaga.empilhadeiras</span>
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-grayMid transition-colors hover:text-navy"
                >
                  <Linkedin className="h-5 w-5 flex-shrink-0" />
                  <span>Guimaga Empilhadeiras</span>
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="mt-8 overflow-hidden rounded-2xl shadow-sm">
            <iframe
              src={CONTACT.mapsEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Guimaga Empilhadeiras — Jundiaí/SP"
            />
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Verify in browser**

```powershell
npm run dev
```

Open http://localhost:3000/contato. Verify:
- Navy banner
- Full-width green WhatsApp card (most prominent)
- Phones, Email, Address, Social cards in 2-column grid
- Google Maps embed (may show generic map until URL is replaced with real embed)

Stop with Ctrl+C.

- [ ] **Step 3: Commit**

```bash
git add src/app/contato/page.tsx
git commit -m "feat: implement Contato page with contact grid and Google Maps embed"
```

---

## Task 12: Final Verification and Deploy

**Files:** None (verification and deploy)

- [ ] **Step 1: Run all tests**

```powershell
npx jest --no-coverage
```

Expected: All tests PASS (config tests + constants tests + WhatsApp button tests)

- [ ] **Step 2: Run production build**

```powershell
npm run build
```

Expected: `✓ Compiled successfully`. Fix any TypeScript or ESLint errors before proceeding.

- [ ] **Step 3: Preview production build locally**

```powershell
npm start
```

Open http://localhost:3000. Walk through every page and verify:

| Page | What to check |
|---|---|
| `/` | Hero full-screen, numbers bar, 3 equipment cards, 4 why cards, yellow CTA |
| `/equipamentos` | 3 cards with images, per-card WhatsApp button with correct equipment name in message |
| `/sobre` | History text, 2010/Jundiaí stat cards, 4 values cards |
| `/contato` | Green WhatsApp card full-width, phone/email/address/social cards, Maps embed |
| All pages | Sticky navy Header with logo, nav, Instagram, LinkedIn, WhatsApp button |
| All pages | Dark Footer with nav, contact info, social icons |
| All pages | Green floating WhatsApp button bottom-right |
| Mobile | Hamburger menu opens/closes, social icons and WhatsApp visible in mobile menu |

Stop with Ctrl+C.

- [ ] **Step 4: Update Google Maps embed URL**

In `src/lib/constants.ts`, replace the `mapsEmbed` value:
1. Open https://www.google.com/maps
2. Search: `Av. Augusto Mazzi, 3190, Jundiaí, SP`
3. Click Share → Embed a map → Copy the `src` value from the iframe snippet
4. Paste it as the value of `CONTACT.mapsEmbed`

- [ ] **Step 5: Final commit**

```bash
git add .
git commit -m "chore: final production build verified — all pages complete"
```

- [ ] **Step 6: Push to GitHub and deploy on Vercel**

Create a new repository on https://github.com/new, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/guimaga-site.git
git branch -M main
git push -u origin main
```

Then go to https://vercel.com/new, import the repository — Next.js is auto-detected, no extra configuration needed. Click Deploy.
