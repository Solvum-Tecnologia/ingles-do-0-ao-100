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
  const linkBuy = 'https://pay.hotmart.com/K39846527P?checkoutMode=10';
  const linkWarning = 'https://forms.gle/EFDDd98UpfQoXN6n6';

  return (
    <BuyContext.Provider value={{ isActive, linkBuy, linkWarning }}>
      {children}
    </BuyContext.Provider>
  );
};

export const useBuy = (): BouContextProps => {
  return useContext(BuyContext);
};
