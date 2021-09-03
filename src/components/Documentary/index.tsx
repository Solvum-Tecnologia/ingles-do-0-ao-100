import React from 'react';

import { Content, Container } from './styles';

const Documentary: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className="profile">
          <img
            data-aos="fade-down"
            src="/assets/images/men_documentary.svg"
            alt="Foto aluno"
          />
        </div>
        <div className="text">
          <h3 data-aos="zoom-in">Olá, eu sou o</h3>
          <h2 data-aos="zoom-in" data-aos-delay="200">
            Jader lelis
          </h2>

          <div data-aos="zoom-in" className="border" />

          <p data-aos="zoom-in" data-aos-delay="600">
            Jader Lelis é um professor de inglês certificado pela Edgware
            Academy de Londres e é apaixonado por idiomas, música e viagens! É
            músico amador há 16 anos, entusiasta de aprendizado de idiomas,
            professor de inglês há quase 7 anos, tendo ensinado mais de 400
            alunos no Brasil e em vários países do mundo pro meio de aulas
            particulares e mais de 1.000 alunos através do curso on-line de
            inglês. Jader também é o criador do podcast Inglês do Zero, o maior
            podcast de aprendizado de inglês do país com mais de 7 milhões de
            plays nas plataformas digitais.
          </p>
        </div>
      </Content>
    </Container>
  );
};

export default Documentary;
