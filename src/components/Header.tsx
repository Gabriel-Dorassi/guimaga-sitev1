'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { NAV_LINKS, CONTACT, WHATSAPP_LINK } from '@/lib/constants'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-navy shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="rounded-md bg-white px-2 py-1">
            <Image
              src="/images/logo.png"
              alt="Guimaga Empilhadeiras"
              width={140}
              height={42}
              className="h-9 w-auto"
              priority
            />
          </div>
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
            <FaInstagram className="h-5 w-5" />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white transition-colors hover:text-yellow"
          >
            <FaLinkedinIn className="h-5 w-5" />
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
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white"
            >
              <FaLinkedinIn className="h-5 w-5" />
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
