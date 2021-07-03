import React from 'react';

import { Container, Button } from './styles';

const BuyButton: React.FC = () => {
  return (
    <Container>
      <Button data-aos="zoom-in">
        Sim, Quero aprender inglês
        <span>Clique aqui para garantir sua matrícula</span>
      </Button>
    </Container>
  );
};

export default BuyButton;
