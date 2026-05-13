import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { NAV_LINKS, CONTACT } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">

          {/* Brand */}
          <div>
            <Image
              src="/images/logo.svg"
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
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/70 transition-colors hover:text-yellow"
              >
                <FaLinkedinIn className="h-5 w-5" />
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
