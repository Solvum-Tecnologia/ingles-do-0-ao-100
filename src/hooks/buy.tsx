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
  const isActive = false;
  const linkBuy =
    'https://pay.hotmart.com/K39846527P?off=igm7id7w&checkoutMode=10&bid=1661452742055';
  const linkWarning = 'https://forms.gle/ QcXd37U3WMSDdG6s7';

  return (
    <BuyContext.Provider value={{ isActive, linkBuy, linkWarning }}>
      {children}
    </BuyContext.Provider>
  );
};

export const useBuy = (): BouContextProps => {
  return useContext(BuyContext);
};
