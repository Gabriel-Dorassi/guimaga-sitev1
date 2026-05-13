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
  mapsEmbed: 'https://maps.google.com/maps?q=Av.+Augusto+Mazzi+3190+Jundiai+SP+Brasil&output=embed',
}

export const NAV_LINKS = [
  { label: 'Início',       href: '/' },
  { label: 'A Empresa',    href: '/a-empresa' },
  { label: 'Equipamentos', href: '/equipamentos' },
  { label: 'Sobre',        href: '/sobre' },
  { label: 'Contato',      href: '/contato' },
]

export const EQUIPMENT = [
  {
    id: 'glp',
    name: 'Empilhadeira GLP',
    description:
      'Alta performance para uso interno e externo. Indicada para operações de maior exigência e capacidade de carga.',
    image: '/images/equipamentos/glp.png',
    alt: 'Empilhadeira GLP amarela com garfos vermelhos',
    whatsappMsg: 'Olá! Tenho interesse em locar uma Empilhadeira GLP. Pode me passar mais informações?',
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
