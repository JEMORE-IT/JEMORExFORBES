import { NextFontWithVariable } from 'next/dist/compiled/@next/font';

import { fonts } from './lib/fonts';

const font_variables = Object.values(fonts).map(
  (font: NextFontWithVariable) => {
    return font.variable;
  }
);

export const websiteConfig = {
  logo_img: '/images/logo_recolored.svg',
  menuItems: [
    { text: 'Home', href: '/' },
    { text: 'Next Leaders', href: 'https://nextleaders.forbes.it/', external: true },
    { text: 'Partner', href: '/partner' },
    { text: 'Programma', href: '/programma' },
    { text: 'Location', href: '/location' },

  ],
  title: 'Evento JournEy',
  description:
    'JEMORE x Next Leaders powered by Forbes Italia',
  font_variables: font_variables,
  color_themes: ['system', 'jemore-theme-light', 'jemore-theme-dark'],
};
