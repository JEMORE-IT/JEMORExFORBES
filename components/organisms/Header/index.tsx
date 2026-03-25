'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

import DesktopNav from '@molecules/DesktopNav';
import MobileNav from '@molecules/MobileNav';

import { websiteConfig as config } from '../../../website.config';

import HeaderProps, { Route } from './index.types';

const Header: FC<HeaderProps> = () => {
  const pathname: string = usePathname();

  const routes: Route[] = config.menuItems.map((item) => ({
    href: item.href,
    text: item.text,
    active: pathname === item.href,
  }));

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-8 py-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={config.logo_img}
              alt="Logo"
              width={150}
              height={150}
              className="item-start cursor-pointer justify-center"
              style={{
                // Usa #ccf80c per colorare il logo.
                // Le classi di tailwind non funzionano sugli svg (perchè ovvio che no),
                // quindi un workaround è generare un filtro css che converta il colore:
                // 1. brightness(0) — imposta l'immagine a nero
                // 2. saturate(100%) — mantiene il contrasto originale
                // 3. invert(89%) sepia(97%) saturate(1043%) hue-rotate(21deg) brightness(103%) contrast(97%) —  #ccf80c tradotto in filtro css
                filter:
                  'brightness(0) saturate(100%) invert(89%) sepia(97%) saturate(1043%) hue-rotate(21deg) brightness(103%) contrast(97%)',
              }}
            />
          </Link>

          <div>
            <MobileNav routes={routes} />
            <div className="hidden md:block">
              <DesktopNav routes={routes} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
