import React, { ReactNode } from 'react';
import { BuyProvider } from './buy';

interface Props {
  children: ReactNode;
}

export const Hooks: React.FC<Props> = ({ children }) => {
  return <BuyProvider>{children}</BuyProvider>;
};
