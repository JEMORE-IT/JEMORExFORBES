import { Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import Subtitle from '@/components/atoms/Subtitle';
import { websiteConfig } from '@/website.config';

import FooterProps from './index.types';

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="w-full bg-black py-10 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-8 md:grid-cols-3 md:gap-8">
        {/* Column 1: Logo and Copyright */}
        <div className="flex flex-col items-center space-y-4 md:items-start md:text-left">
          <Link href="/">
            <Image
              src={websiteConfig.logo_img}
              alt="Journey Logo"
              width={150}
              height={150}
              className="h-auto w-40"
            />
          </Link>
          <p className="mt-4 max-w-xs text-center text-xs leading-relaxed text-tertiary-gray md:text-left">
            © 2026 Journey Event. A Forbes x Italian Universities Collaboration
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center space-y-6">
            <Subtitle content="QUICK LINKS" />
            <nav className="flex flex-col space-y-2 text-center text-sm text-tertiary-gray">
              <Link href="#" className="hover:text-white">
                Jemore
              </Link>
              <Link href="#" className="hover:text-white">
                Forbes
              </Link>
              <Link href="#" className="hover:text-white">
                ODG
              </Link>
              <Link href="#" className="hover:text-white">
                info
              </Link>
            </nav>
          </div>
        </div>

        {/* Column 3: Contacts and Privacy */}
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center space-y-6">
            <Subtitle content="CONTATTI" />
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-secondary-pink transition-colors hover:opacity-80"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="#"
                className="text-secondary-pink transition-colors hover:opacity-80"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="#"
                className="text-secondary-pink transition-colors hover:opacity-80"
              >
                <Twitter size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy absolute bottom right or mostly aligned */}
      <div className="container mx-auto mt-12 px-8 text-center md:text-right">
        <Link href="#" className="text-xs text-tertiary-gray hover:text-white">
          Privacy policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
