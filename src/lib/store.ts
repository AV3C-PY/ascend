import { atom, computed } from 'nanostores';

export type MarketCode = 'fr' | 'es' | 'pe';

export interface MarketInfo {
  code: MarketCode;
  name: string;
  currency: string;
  currencySymbol: string;
  locale: string;
  lemonSqueezyUrlPrefix: string;
  phonePrefix: string;
}

export const MARKETS: Record<MarketCode, MarketInfo> = {
  fr: {
    code: 'fr',
    name: 'France',
    currency: 'EUR',
    currencySymbol: '€',
    locale: 'fr-FR',
    lemonSqueezyUrlPrefix: 'https://ascend-fr.lemonsqueezy.com/checkout', // Example URLs
    phonePrefix: '+33'
  },
  es: {
    code: 'es',
    name: 'España',
    currency: 'EUR',
    currencySymbol: '€',
    locale: 'es-ES',
    lemonSqueezyUrlPrefix: 'https://ascend-es.lemonsqueezy.com/checkout',
    phonePrefix: '+34'
  },
  pe: {
    code: 'pe',
    name: 'Perú',
    currency: 'PEN',
    currencySymbol: 'S/',
    locale: 'es-PE',
    lemonSqueezyUrlPrefix: 'https://ascend-pe.lemonsqueezy.com/checkout',
    phonePrefix: '+51'
  }
};

// Initial state, defaults to Spain. We will set this on the client based on URL or local storage later.
export const currentMarketCode = atom<MarketCode>('es');

export const currentMarket = computed(currentMarketCode, (code) => MARKETS[code]);

// Helper for formatting prices
export function formatPrice(price: number, market: MarketInfo): string {
  return new Intl.NumberFormat(market.locale, {
    style: 'currency',
    currency: market.currency,
    maximumFractionDigits: 0
  }).format(price);
}
