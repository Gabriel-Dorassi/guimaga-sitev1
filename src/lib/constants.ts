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
