import React from 'react';

import { Container, Content } from './styles';

import differentials from '../../db/differentials';

const Differential: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className="title">
          <h2 data-aos="fade-up">DIFERENCIAL DO NOSSO CURSO</h2>
          <span data-aos="fade-down" />
        </div>

        <div className="items">
          {differentials.map(item => (
            <div data-aos="zoom-in" className="item" key={item.id}>
              <h2>{item.id.toString().padStart(2, '0')}</h2>
              <h3>Plantão de dúvidas semanal</h3>
              <p>
                Uma live exclusiva somente para alunos onde o Teacher Jay
                responde as dúvidas que os alunos enviam.
              </p>
            </div>
          ))}
        </div>
      </Content>
    </Container>
  );
};

export default Differential;
