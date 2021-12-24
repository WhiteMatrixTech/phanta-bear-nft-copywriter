import home from './home';
import products from './all-products';
import buy from './buy';
import about from './about';
import profile from './profile';
import global from './global';
import common from './common';
import signup from './signup';
import { traditionalized } from './utils';

const twTranslation = {
  tw: '繁体中文',
  ...home.zh,
  ...products.zh,
  ...buy.zh,
  ...about.zh,
  ...profile.zh,
  ...signup.zh,
  ...common.zh
};

for (const key in  twTranslation) {
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
      ...profile.en,
      ...signup.en,
      ...common.en
    }
  },
  zh: {
    translation: {
      zh: '简体中文',
      ...home.zh,
      ...products.zh,
      ...buy.zh,
      ...about.zh,
      ...profile.zh,
      ...signup.zh,
      ...common.zh
    }
  },
  tw: {
    translation: twTranslation
  },
  global
};
