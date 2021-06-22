import React from 'react';

import { Container } from './styles';

const Button: React.FC = ({ children }) => {
  return <Container data-aos="zoom-in">{children}</Container>;
};

export default Button;
