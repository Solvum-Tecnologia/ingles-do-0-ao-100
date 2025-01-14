// Declaração para a propriedade window.env
interface EnvConfig {
  LINK_BUE: string;
  LINK_WARNING: string;
  CASH_PRICE: string;
  PAYMENT_IN_INSTALLMENTS: string;
  INSTALLMENTS_PRICE: string;
  BUTTON_TITLE: string;
  BUTTON_TEXT: string;
}

declare global {
  interface Window {
    env: EnvConfig;
  }
}

export {};
