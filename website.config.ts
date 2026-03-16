import { NextFontWithVariable } from 'next/dist/compiled/@next/font';

import { fonts } from '@/lib/fonts';

const font_variables = Object.values(fonts).map(
  (font: NextFontWithVariable) => {
    return font.variable;
  }
);

export const websiteConfig = {
  logo_img: '/images/logo.svg',
  menuItems: [
    { text: 'HomePage', href: '/' },
    { text: 'Next Leaders', href: '' },
    { text: 'Programma', href: '' },
    { text: 'Partner', href: '' },
    { text: 'Contatti', href: '' },
  ],
  title: 'Evento JournEy',
  description:
    'template di base per siti web JEMORE, con configurazione di base, header, footer e navigazione.',
  font_variables: font_variables,
  color_themes: ['system', 'jemore-theme-light', 'jemore-theme-dark'],
};
