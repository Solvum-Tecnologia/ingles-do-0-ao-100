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
          <div data-aos="fade-up" className="bg" />
        </div>
        <div className="text">
          <h3 data-aos="zoom-in">Olá, eu sou o</h3>
          <h2 data-aos="zoom-in" data-aos-delay="200">
            Jader lelis
          </h2>

          <div data-aos="zoom-in" className="border" />

          <p data-aos="zoom-in" data-aos-delay="600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </Content>
    </Container>
  );
};

export default Documentary;
