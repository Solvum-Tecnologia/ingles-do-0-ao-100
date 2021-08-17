import React from 'react';
import formatNumber from '../../utils/formatNumber';
import BuyButton from '../BuyButton';

import { Container, Content } from './styles';

import topics from '../../db/topics';

const SumUp: React.FC = () => {
  const valueTotal = topics.reduce(
    (total, number) => total + Number(number.value),
    0,
  );

  return (
    <Container>
      <Content>
        <h2 data-aos="zoom-in">
          Recapitulando tudo o que você vai receber ao se matricular agora no
          curso.
        </h2>

        <div className="topics">
          {topics.map(item => (
            <div className="item" key={item.id}>
              <img
                data-aos="zoom-in"
                src="/assets/images/checked.svg"
                alt="checked"
              />
              <div className="title">
                <h3>
                  {item.title}
                  {item.value && <span>{formatNumber(item.value)}</span>}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mobile">
          <img
            data-aos="fade-left"
            src="/assets/images/mobile.svg"
            alt="checked"
          />
        </div>

        <div className="value-total">
          <h3 data-aos="fade-right">
            Valor Total <span> {formatNumber(valueTotal)}</span>
          </h3>

          <div data-aos="fade-left">
            <h3>Apenas nesta oferta</h3>
          </div>
        </div>

        <div className="promotion">
          <h3 data-aos="zoom-in-down" className="installment">
            12x de <span>97,</span>14
          </h3>
          <h3 data-aos="zoom-in-down" data-aos-delay="200">
            Ou {formatNumber(997)} à vista
          </h3>
        </div>

        <BuyButton
          title="Sim, Quero aprender inglês"
          subtitle="Clique aqui para garantir sua matrícula"
        />
      </Content>
    </Container>
  );
};

export default SumUp;
