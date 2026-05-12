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
