export const envs = {
  PAYMENT_IN_INSTALLMENTS: import.meta.env.VITE_PAYMENT_IN_INSTALLMENTS,
  CASH_PRICE: import.meta.env.VITE_CASH_PRICE,
  INSTALLMENTS_PRICE: import.meta.env.VITE_INSTALLMENTS_PRICE,
  BUE_IS_ACTIVE: import.meta.env.VITE_BUE_IS_ACTIVE,
  LINK_BUE: import.meta.env.VITE_LINK_BUE,
  LINK_WARNING: import.meta.env.VITE_LINK_WARNING,
  IS_BLACK: import.meta.env.VITE_IS_BLACK,
} as const;
