import React, { createContext, ReactNode, useContext } from 'react';
import { envs } from '~/constants/envs';

interface BouContextProps {
  isActive: boolean;
  linkBuy: string;
  linkWarning: string;
}

const BuyContext = createContext({} as BouContextProps);

interface Props {
  children: ReactNode;
}

export const BuyProvider: React.FC<Props> = ({ children }) => {
  const isActive = envs.BUE_IS_ACTIVE === 'true';
  const linkBuy = envs.LINK_BUE || '';
  const linkWarning = envs.LINK_WARNING || '';

  return (
    <BuyContext.Provider value={{ isActive, linkBuy, linkWarning }}>
      {children}
    </BuyContext.Provider>
  );
};

export const useBuy = (): BouContextProps => {
  return useContext(BuyContext);
};
