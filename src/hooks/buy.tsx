import React, { createContext, ReactNode, useContext } from 'react';

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
  const isActive = true;
  const linkBuy = 'https://inglesdozeroaocem.com.br/black-friday2';
  const linkWarning = 'https://forms.gle/QcXd37U3WMSDdG6s7';

  return (
    <BuyContext.Provider value={{ isActive, linkBuy, linkWarning }}>
      {children}
    </BuyContext.Provider>
  );
};

export const useBuy = (): BouContextProps => {
  return useContext(BuyContext);
};
