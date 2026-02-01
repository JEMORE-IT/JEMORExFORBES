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
    { text: 'Home', href: '/' },
    { text: 'Link1', href: 'https://jemore.it/servizi-offerti/' },
    { text: 'Link2', href: 'https://jemore.it/unisciti-a-noi/' },
  ],
  title: 'Evento JournEy',
  description:
    'template di base per siti web JEMORE, con configurazione di base, header, footer e navigazione.',
  font_variables: font_variables,
  color_themes: ['system', 'jemore-theme-light', 'jemore-theme-dark'],
};
