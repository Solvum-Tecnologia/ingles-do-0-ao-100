import React from 'react';

import { Container, Content } from './styles';

import differentials from '~/db/differentials';

const Differential: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className="title">
          <h2 data-aos="fade-up">Diferencial do nosso curso</h2>
          <span data-aos="fade-down" />
        </div>

        <div className="items">
          {differentials.map((item) => (
            <div data-aos="zoom-in" className="item" key={item.id}>
              <span>
                <img src={`/assets/icons/${item.icon}`} alt="" />
              </span>
              <h3>{item.title}</h3>
              <p> {item.description} </p>
            </div>
          ))}
        </div>
      </Content>
    </Container>
  );
};

export default Differential;
