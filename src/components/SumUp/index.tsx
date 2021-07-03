import React from 'react';
import formatNumber from '../../utils/formatNumber';
import BuyButton from '../BuyButton';

import { Container, Content } from './styles';

const topics = [
  {
    id: 1,
    title: '98 aulas oficiais',
    value: null,
  },
  {
    id: 2,
    title: 'Dezenas de aulas extras para fixação',
    value: null,
  },
  {
    id: 3,
    title: 'Aulas de conversação semanais',
    value: null,
  },
  {
    id: 4,
    title: 'Plantão de dúvidas',
    value: null,
  },
  {
    id: 5,
    title: 'Acesso vitalício',
    value: 257.0,
  },
  {
    id: 6,
    title: 'Suporte de pronúncia no WhatsApp',
    value: 327.0,
  },
  {
    id: 7,
    title: 'E-book English for travel',
    value: 37.9,
  },
  {
    id: 8,
    title: '+ 365 vídeos bônus',
    value: 447.0,
  },
  {
    id: 9,
    title: 'Suporte pedagógico',
    value: null,
  },
  {
    id: 10,
    title: 'Grupo de conversação',
    value: null,
  },
  {
    id: 11,
    title: '60 textos com áudios gravados por falantes nativos de inglês',
    value: null,
  },
  {
    id: 12,
    title: '91 frases com áudios gravados por falantes nativos de inglês',
    value: null,
  },
  {
    id: 13,
    title: 'Curso completo',
    value: 1997.0,
  },
];

const SumUp: React.FC = () => {
  const valueTotal = topics.reduce(
    (total, number) => total + Number(number.value),
    0,
  );

  const value = 1165.68;

  const installment = (value / 12).toString().split('.');

  const value1 = installment[0];
  const value2 = installment[1];

  return (
    <Container>
      <Content>
        <h2 data-aos="zoom-in">
          RECAPITULANDO TUDO O QUE VOCÊ VAI RECEBER AO SE MATRICULAR AGORA NO
          CURSO.
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
                <h3>{item.title}</h3>
                {item.value && <span>{formatNumber(item.value)}</span>}
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
            12x de <span>{value1},</span> {value2}
          </h3>
          <h3 data-aos="zoom-in-down" data-aos-delay="200">
            Ou {formatNumber(value - value * 0.15)} à vista
          </h3>
        </div>

        <BuyButton />
      </Content>
    </Container>
  );
};

export default SumUp;
