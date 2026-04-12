import Image from 'next/image';
import React from 'react';

import Subtitle from '../../../components/atoms/Subtitle';

import HeroProps from './index.types';

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="text-center">
      <div className="flex flex-col items-center">
        <div className="relative mt-20 h-[calc(100vh-2rem)] w-screen">
          {/* Mobile Image */}
          <Image
            src="/images/hero_mobile.png"
            alt="Hero Mobile"
            fill
            // Modificato: xl:hidden fa scomparire l'immagine solo dopo i 1280px
            className="object-cover xl:hidden"
            priority
          />
          {/* Desktop Image */}
          <Image
            src="/images/hero_image.png"
            alt="Hero Desktop"
            fill
            // Modificato: hidden xl:block fa apparire l'immagine solo dopo i 1280px
            className="hidden object-cover xl:block"
            priority
          />
        </div>

        <div className="mt-16 flex flex-col items-center gap-3">
          <Subtitle
            content="REGGIO EMILIA"
            style={{
              color: 'var(--primary-yellow)',
              fontSize: '2rem',
              letterSpacing: '0.3em',
              lineHeight: '1.4',
            }}
          />
          <span className="text-base font-light tracking-[0.3em] text-white/80">
            44.6979°N 10.6468°E
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;