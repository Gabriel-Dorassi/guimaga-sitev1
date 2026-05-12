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
