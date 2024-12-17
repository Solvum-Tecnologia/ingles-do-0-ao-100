// Declaração para a propriedade window.env
interface EnvConfig {
  LINK_BUE: string;
  LINK_WARNING: string;
}

declare global {
  interface Window {
    env: EnvConfig;
  }
}

export {};
