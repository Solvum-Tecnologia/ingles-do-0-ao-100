import React, { AnchorHTMLAttributes } from 'react';

import { Container, Button } from './styles';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  subtitle?: string;
}

const BuyButton: React.FC<Props> = ({ title, subtitle, ...rest }) => {
  return (
    <Container>
      <Button
        data-aos="zoom-in"
        {...rest}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}

        {subtitle && <span>Clique aqui para garantir sua matrícula</span>}
      </Button>
    </Container>
  );
};

export default BuyButton;
