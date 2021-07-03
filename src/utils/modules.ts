const modules = [
  {
    id: 1,
    title: 'Módulo 1',
    classes: [
      { id: 1, title: 'Aula 1', description: 'Alfabeto + Fonéticas do inglês' },
      { id: 2, title: 'Aula 2', description: 'Tudo sobre números em inglês' },
      { id: 3, title: 'Aula 3', description: 'N.O.M.E' },
      {
        id: 4,
        title: 'Aula 4',
        description: 'Pronomes e Adjetivos Possessivos',
      },
      { id: 5, title: 'Aula 5', description: 'Verbo to be' },
      { id: 6, title: 'Aula 6', description: 'Adjetivos Essenciais' },
      { id: 7, title: 'Aula 7', description: 'Preposições de lugar' },
    ],
  },

  {
    id: 2,
    title: 'Módulo 2',
    classes: [
      { id: 8, title: 'Aula 8', description: 'Family Vocabulary' },
      { id: 9, title: 'Aula 9', description: 'This, That, These e Those' },
      { id: 10, title: 'Aula 10', description: 'Introducing other people' },
      {
        id: 11,
        title: 'Aula 11',
        description: 'Perguntas abertas e fechadas',
      },
      { id: 12, title: 'Aula 12', description: 'Adjetivos essenciais 2' },
      { id: 13, title: 'Aula 13', description: 'Genetive case (Possessive S)' },
      { id: 14, title: 'Aula 14', description: 'Vocabulary at home' },
    ],
  },

  {
    id: 3,
    title: 'Módulo 3',
    classes: [
      { id: 15, title: 'Aula 15', description: 'Present continuous' },
      { id: 16, title: 'Aula 16', description: 'Present simple' },
      {
        id: 17,
        title: 'Aula 17',
        description: 'Present continuous x Present simple',
      },
      {
        id: 18,
        title: 'Aula 18',
        description: 'Present continuous + WH words',
      },
      { id: 19, title: 'Aula 19', description: 'Números ordinais' },
      { id: 20, title: 'Aula 20', description: 'Talking about time' },
      {
        id: 21,
        title: 'Aula 21',
        description: 'Daily routine (present simple)',
      },
    ],
  },

  {
    id: 4,
    title: 'Módulo 4',
    classes: [
      { id: 22, title: 'Aula 22', description: 'Collocations' },
      { id: 23, title: 'Aula 23', description: 'IN, ON, AT – Geografia' },
      {
        id: 24,
        title: 'Aula 24',
        description: 'IN, ON, AT – Tempo',
      },
      {
        id: 25,
        title: 'Aula 25',
        description: 'IN, ON, AT – Transporte',
      },
      { id: 26, title: 'Aula 26', description: 'IN, ON, AT – Revisão' },
      { id: 27, title: 'Aula 27', description: 'There is – There are' },
      {
        id: 28,
        title: 'Aula 28',
        description: 'Jobs and professions',
      },
    ],
  },

  {
    id: 5,
    title: 'Módulo 5',
    classes: [
      {
        id: 29,
        title: 'Aula 29',
        description: 'Food (Countable and uncountable nouns)',
      },
      {
        id: 30,
        title: 'Aula 30',
        description: 'Rotinas diárias + Advérbios de frequência',
      },
      {
        id: 31,
        title: 'Aula 31',
        description: 'Todos os usos do CAN',
      },
      {
        id: 32,
        title: 'Aula 32',
        description: 'As duas formas do FUTURO em inglês',
      },
      { id: 33, title: 'Aula 33', description: 'Terceira forma do FUTURO' },
      { id: 34, title: 'Aula 34', description: 'Short Answers' },
      {
        id: 35,
        title: 'Aula 35',
        description: 'Look x Look like',
      },
    ],
  },

  {
    id: 6,
    title: 'Módulo 6',
    classes: [
      {
        id: 36,
        title: 'Aula 36',
        description: 'Health and Pain',
      },
      {
        id: 37,
        title: 'Aula 37',
        description: 'Feelings and emotions',
      },
      {
        id: 38,
        title: 'Aula 38',
        description: 'Places around town',
      },
      {
        id: 39,
        title: 'Aula 39',
        description: 'Como dar direções e orientações',
      },
      { id: 40, title: 'Aula 40', description: 'Clothing (Roupas em inglês)' },
      { id: 41, title: 'Aula 41', description: 'How often' },
      {
        id: 42,
        title: 'Aula 42',
        description: 'Entendendo o que diz o GPS',
      },
    ],
  },

  {
    id: 7,
    title: 'Módulo 7',
    classes: [
      {
        id: 43,
        title: 'Aula 43',
        description: 'Verbo to be no passado',
      },
      {
        id: 44,
        title: 'Aula 44',
        description: ' Did and Didn’t',
      },
      {
        id: 45,
        title: 'Aula 45',
        description: 'Verbos regulares e irregulares no passado',
      },
      {
        id: 46,
        title: 'Aula 46',
        description: 'Perguntas abertas e fechadas no passado',
      },
      {
        id: 47,
        title: 'Aula 47',
        description: 'Pronúncia dos verbos regulares no passado',
      },
      { id: 48, title: 'Aula 48', description: 'Falando de rotina no passado' },
      {
        id: 49,
        title: 'Aula 49',
        description: 'Used to',
      },
    ],
  },

  {
    id: 8,
    title: 'Módulo 8',
    classes: [
      {
        id: 50,
        title: 'Aula 50',
        description: 'Get',
      },
      {
        id: 51,
        title: 'Aula 51',
        description: 'Would',
      },
      {
        id: 52,
        title: 'Aula 52',
        description: 'Object pronoun x Subject pronoun',
      },
      {
        id: 53,
        title: 'Aula 53',
        description: 'Como formar qualquer frase em inglês',
      },
      {
        id: 54,
        title: 'Aula 54',
        description: 'Pointing someone out at a party',
      },
      { id: 55, title: 'Aula 55', description: 'Possessive pronouns' },
      {
        id: 56,
        title: 'Aula 56',
        description: 'Comparative and Superlative',
      },
    ],
  },

  {
    id: 9,
    title: 'Módulo 9',
    classes: [
      {
        id: 57,
        title: 'Aula 57',
        description: 'Analisando um texto',
      },
      {
        id: 58,
        title: 'Aula 58',
        description: 'Present perfect',
      },
      {
        id: 59,
        title: 'Aula 59',
        description: 'Present perfect 2',
      },
      {
        id: 60,
        title: 'Aula 60',
        description: 'I have been to',
      },
      {
        id: 61,
        title: 'Aula 61',
        description: 'Present perfect continuous',
      },
      {
        id: 62,
        title: 'Aula 62',
        description: 'Present perfect continuous vs Simple',
      },
      {
        id: 63,
        title: 'Aula 63',
        description: 'To and FOR',
      },
    ],
  },

  {
    id: 10,
    title: 'Módulo 10',
    classes: [
      {
        id: 64,
        title: 'Aula 64',
        description: 'Aumentativo e diminutivo em inglês',
      },
      {
        id: 65,
        title: 'Aula 65',
        description: 'Can, could and be able to',
      },
      {
        id: 66,
        title: 'Aula 66',
        description: 'May and might',
      },
      {
        id: 67,
        title: 'Aula 67',
        description: 'Agreeing and disagreeing',
      },
      {
        id: 68,
        title: 'Aula 68',
        description: 'At the restaurant',
      },
      {
        id: 69,
        title: 'Aula 69',
        description: 'Quão',
      },
      {
        id: 70,
        title: 'Aula 70',
        description: 'Modal verbs (review)',
      },
    ],
  },

  {
    id: 11,
    title: 'Módulo 11',
    classes: [
      {
        id: 71,
        title: 'Aula 71',
        description: 'Question tags',
      },
      {
        id: 72,
        title: 'Aula 72',
        description: 'Tell, say, speak and talk',
      },
      {
        id: 73,
        title: 'Aula 73',
        description: 'Must, have to, should and supposed to',
      },
      {
        id: 74,
        title: 'Aula 74',
        description: 'Passive voice',
      },
      {
        id: 75,
        title: 'Aula 75',
        description: 'Some and any',
      },
      {
        id: 76,
        title: 'Aula 76',
        description: 'Subject + verb + object + infinitive',
      },
      {
        id: 77,
        title: 'Aula 77',
        description: 'Still, already and yet',
      },
    ],
  },

  {
    id: 12,
    title: 'Módulo 12',
    classes: [
      {
        id: 78,
        title: 'Aula 78',
        description: 'Como pronunciar qualquer palavra em inglês',
      },
      {
        id: 79,
        title: 'Aula 79',
        description: 'Pronúncia  θ',
      },
      {
        id: 80,
        title: 'Aula 80',
        description: 'Pronúncia ɪ ɪ̈',
      },
      {
        id: 81,
        title: 'Aula 81',
        description: 'Pronúncia æ',
      },
      {
        id: 82,
        title: 'Aula 82',
        description: 'Pronúncia dark L',
      },
      {
        id: 83,
        title: 'Aula 83',
        description: 'Pronúncia ə',
      },
      {
        id: 84,
        title: 'Aula 84',
        description: 'Revisão + Erros comuns de brasileiros',
      },
    ],
  },

  {
    id: 13,
    title: 'Módulo 13',
    classes: [
      {
        id: 85,
        title: 'Aula 85',
        description: 'Analisando um texto em inglês',
      },
      {
        id: 86,
        title: 'Aula 86',
        description: 'Relative clauses',
      },
      {
        id: 87,
        title: 'Aula 87',
        description: 'If clause (1st and 2nd conditionals)',
      },
      {
        id: 88,
        title: 'Aula 88',
        description: 'The past perfect',
      },
      {
        id: 89,
        title: 'Aula 89',
        description: 'If clause (Zero and 3rd conditionals)',
      },
      {
        id: 90,
        title: 'Aula 90',
        description: 'I wish I had',
      },
      {
        id: 91,
        title: 'Aula 91',
        description: 'How to say ‘muito’ in English',
      },
    ],
  },

  {
    id: 14,
    title: 'Módulo 14',
    classes: [
      {
        id: 92,
        title: 'Aula 92',
        description:
          'Tough, Although, Though, Thought, Through, Thorough and Throughout',
      },
      {
        id: 93,
        title: 'Aula 93',
        description: 'Phrasal verbs',
      },
      {
        id: 94,
        title: 'Aula 94',
        description: 'Phrasal verbs 2',
      },
      {
        id: 95,
        title: 'Aula 95',
        description: 'Analisando cenas da PEPPA PIG',
      },
      {
        id: 96,
        title: 'Aula 96',
        description: 'Analisando entrevista de famosos',
      },
      {
        id: 97,
        title: 'Aula 97',
        description: 'Inglês americano x Inglês britânico',
      },
      {
        id: 98,
        title: 'Aula 98',
        description: 'Como trabalhar à fundo os 60 textos',
      },
    ],
  },
];

export default modules;
