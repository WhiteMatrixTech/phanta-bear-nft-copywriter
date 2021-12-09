import home from './home';
import products from './all-products';
import buy from './buy';
import about from './about';
import { traditionalized } from './utils';

const twTranslation = {
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
      ...home.en,
      ...products.en,
      ...buy.en,
      ...about.en,
    }
  },
  zh: {
    translation: {
      ...home.zh,
      ...products.zh,
      ...buy.zh,
      ...about.zh,
    }
  },
  tw: {
    translation: twTranslation
  }
};
