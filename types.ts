
export interface TarotCardType {
  id: number;
  name: {
    en: string;
    ru: string;
  };
  imageUrl: string;
  description: {
    en: string;
    ru: string;
  };
}

export type Language = 'en' | 'ru';

export interface Spread {
    id: string;
    name: (lang: Language) => string;
    cardCount: number;
    positions: (lang: Language) => string[];
}
