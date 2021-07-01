import React, { useState } from 'react';

import { Container, Content } from './styles';

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
        description: ' Health and Pain',
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
];

const Sessions: React.FC = () => {
  const [session, setSession] = useState(1);

  return (
    <Container>
      <Content>
        <h2 data-aos="zoom-in">Módulos do curso</h2>

        <div className="menu" data-aos="zoom-in">
          <ul>
            {modules.map(module => (
              <li key={module.id}>
                <button
                  type="button"
                  onClick={() => setSession(module.id)}
                  className={session === module.id ? 'active' : ''}
                >
                  {module.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {modules.map(
          module =>
            module.id === session && (
              <div className="items" data-aos="flip-left">
                {module.classes.map(item => (
                  <div className="item" key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            ),
        )}
      </Content>
    </Container>
  );
};

export default Sessions;
