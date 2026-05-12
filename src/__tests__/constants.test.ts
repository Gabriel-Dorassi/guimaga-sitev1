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
