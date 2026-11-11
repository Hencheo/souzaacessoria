// Dados centrais do site. Tudo que aparece em várias páginas sai daqui.
// TODO: preencher NOME_COMPLETO, URL definitiva e redes sociais antes de publicar.

export const SITE = {
  url: 'https://vitoriasouza.adv.br',
  escritorio: 'Souza Advocacia e Consultoria',
  advogada: 'Dra. Vitoria Rabelo de Souza',
  oab: 'OAB/PA 25.287',
  cidade: 'Maringá',
  uf: 'PR',
  regiao: ['Maringá', 'Sarandi', 'Paiçandu', 'Marialva', 'Mandaguaçu', 'Mandaguari'],
  telefone: '(44) 98454-9287',
  telefoneE164: '+5544984549287',
  whatsapp: 'https://wa.me/5544984549287?text=' +
    encodeURIComponent('Olá! Gostaria de agendar um atendimento.'),
  email: '', // TODO: e-mail profissional, se houver
  horario: 'Segunda a sexta, das 9h às 18h, com hora marcada',
  instagram: '', // TODO
  descricao:
    'Advocacia em Direito Previdenciário e Direito Civil em Maringá e região. ' +
    'Atendimento com hora marcada: aposentadorias, BPC/LOAS, benefícios por incapacidade, ' +
    'contratos, indenizações e inventários.',
} as const;

export const NAV = [
  { href: '/', label: 'Início' },
  { href: '/sobre/', label: 'Sobre' },
  { href: '/previdenciario/', label: 'Previdenciário' },
  { href: '/civel/', label: 'Cível' },
  { href: '/blog/', label: 'Artigos' },
  { href: '/contato/', label: 'Contato' },
] as const;

export const AREAS = {
  previdenciario: {
    titulo: 'Direito Previdenciário',
    rota: '/previdenciario/',
    resumo:
      'Orientação e acompanhamento em pedidos e revisões junto ao INSS: aposentadorias, ' +
      'benefícios por incapacidade, BPC/LOAS e pensão por morte.',
  },
  civel: {
    titulo: 'Direito Civil',
    rota: '/civel/',
    resumo:
      'Assessoria em contratos, cobranças, relações de consumo, indenizações, locação, ' +
      'inventário e planejamento sucessório.',
  },
} as const;

export type AreaKey = keyof typeof AREAS;
