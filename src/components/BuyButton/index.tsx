import React, { AnchorHTMLAttributes } from 'react';

import { Container, Button } from './styles';

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

const BuyButton: React.FC<Props> = ({ ...rest }) => {
  const active = false;

  return (
    <Container>
      <Button
        href={
          active
            ? 'https://payment.hotmart.com/K39846527P?checkoutMode=10'
            : 'https://www.inglesdozeroaocem.com.br/espera'
        }
        data-aos="zoom-in"
        {...rest}
        target="_blank"
        rel="noopener noreferrer"
      >
        {active ? (
          <>
            Sim, Quero aprender inglês
            <span>Clique aqui para garantir sua matrícula</span>
          </>
        ) : (
          <>Me avise com prioridade</>
        )}
      </Button>
    </Container>
  );
};

export default BuyButton;
