'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

import { useMobile } from '@/lib/hooks/useMobile';
import { websiteConfig } from '@/website.config';
import DesktopNav from '@molecules/DesktopNav';
import MobileNav from '@molecules/MobileNav';

import HeaderProps, { Route } from './index.types';

const Header: FC<HeaderProps> = () => {
  const pathname: string = usePathname();
  const isMobile: boolean = useMobile();

  const routes: Route[] = websiteConfig.menuItems.map((item) => ({
    href: item.href,
    text: item.text,
    active: pathname === item.href,
  }));

  return (
    <>
      <header className="sticky top-0 z-50 bg-black shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-8 py-6">
          <Link href="/public" className="flex items-center space-x-2">
            <Image
              src={websiteConfig.logo_img}
              alt="Logo"
              width={130}
              height={130}
              className="item-start cursor-pointer justify-center"
            />
          </Link>

          <div>
            {isMobile ? (
              <MobileNav routes={routes} />
            ) : (
              <DesktopNav routes={routes} />
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
