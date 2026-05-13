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
  it('has 6 equipment types', () => {
    expect(EQUIPMENT).toHaveLength(6)
  })
  it('all equipment items have local image paths', () => {
    EQUIPMENT.forEach((item) => {
      expect(item.image).toMatch(/^\/images\//)
    })
  })
  it('has 5 nav links', () => {
    expect(NAV_LINKS).toHaveLength(5)
  })
  it('first nav link is Início', () => {
    expect(NAV_LINKS[0]).toEqual({ label: 'Início', href: '/' })
  })
  it('includes A Empresa nav link', () => {
    expect(NAV_LINKS).toContainEqual({ label: 'A Empresa', href: '/a-empresa' })
  })
  it('Instagram URL is correct', () => {
    expect(CONTACT.instagram).toContain('instagram.com/guimagaempilhadeiras')
  })
  it('LinkedIn URL is correct', () => {
    expect(CONTACT.linkedin).toContain('linkedin.com/company/guimaga-empilhadeiras')
  })
})
