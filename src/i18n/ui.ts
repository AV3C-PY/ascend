import es from './es.json';
import fr from './fr.json';
import pe from './pe.json';
import type { MarketCode } from '../lib/store';

export const dictionaries = {
  es,
  fr,
  pe
} as const;

export type DictKey = keyof typeof es;

export function useTranslations(market: MarketCode) {
  return function t(key: DictKey) {
    return dictionaries[market][key] || dictionaries['es'][key];
  }
}
