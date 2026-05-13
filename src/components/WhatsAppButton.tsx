import Image from 'next/image'
import { WHATSAPP_LINK } from '@/lib/constants'

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale pelo WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#25D366] transition-transform hover:scale-110"
      >
        <Image
          src="/images/wpp.avif"
          alt="WhatsApp"
          width={48}
          height={48}
          unoptimized
        />
      </a>
    </div>
  )
}
