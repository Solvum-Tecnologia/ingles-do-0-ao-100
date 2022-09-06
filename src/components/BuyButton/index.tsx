import React, { AnchorHTMLAttributes } from 'react';
import { useBuy } from '../../hooks/buy';

import { Container, Button } from './styles';

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

const BuyButton: React.FC<Props> = ({ ...rest }) => {
  const { isActive, linkBuy, linkWarning } = useBuy();

  return (
    <Container>
      <Button
        href={isActive ? linkBuy : linkWarning}
        data-aos="zoom-in"
        {...rest}
        target="_blank"
        rel="noopener noreferrer"
      >
        {isActive ? (
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
