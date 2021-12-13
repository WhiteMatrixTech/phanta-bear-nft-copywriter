import home from './home';
import products from './all-products';
import buy from './buy';
import about from './about';
import comingSoon from './coming-soon'
import { traditionalized } from './utils';

const twTranslation = {
  tw: '繁体中文',
  ...home.zh,
  ...products.zh,
  ...buy.zh,
  ...about.zh,
};

for (const key in twTranslation) {
  twTranslation[key] = traditionalized(twTranslation[key])
}

export const resources = {
  en: {
    translation: {
      en: 'English',
      ...home.en,
      ...products.en,
      ...buy.en,
      ...about.en,
      ...comingSoon.en
    }
  },
  zh: {
    translation: {
      zh: '简体中文',
      ...home.zh,
      ...products.zh,
      ...buy.zh,
      ...about.zh,
      ...comingSoon.zh
    }
  },
  tw: {
    translation: twTranslation
  }
};
