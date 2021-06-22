import React from 'react';
import Button from '../Button';

import { Container, Content } from './styles';

const SumUp: React.FC = () => {
  return (
    <Container>
      <Content>
        <h2 data-aos="zoom-in">Vamos resumir tudo?</h2>

        <div className="topics">
          <div className="item">
            <img
              data-aos="zoom-in"
              src="/assets/images/checked.svg"
              alt="checked"
            />
            <h3>Tópico 1</h3>
          </div>

          <div className="item">
            <img
              data-aos="zoom-in"
              data-aos-delay="200"
              src="/assets/images/checked.svg"
              alt="checked"
            />
            <h3>Tópico 2</h3>
          </div>

          <div className="item">
            <img
              data-aos="zoom-in"
              data-aos-delay="200"
              src="/assets/images/checked.svg"
              alt="checked"
            />
            <h3>Tópico 3</h3>
          </div>
        </div>

        <div className="mobile">
          <img
            data-aos="fade-left"
            src="/assets/images/mobile.svg"
            alt="checked"
          />
        </div>

        <div className="purchase">
          <Button>Sim, Quero aprender inglês</Button>
        </div>
      </Content>
    </Container>
  );
};

export default SumUp;
