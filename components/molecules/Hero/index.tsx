import Image from 'next/image';
import React from 'react';

import Quote from '@/components/atoms/Quote';
import Reveal from '@/components/atoms/Reveal';
import Subtitle from '@/components/atoms/Subtitle';

import HeroProps from './index.types';

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="mb-20 px-4 py-10 text-center">
      <div className="container mx-auto mb-40 flex flex-col items-center">
        <Reveal width="100%">
          <div className="relative mx-auto aspect-[9/16] w-full max-w-4xl md:aspect-[16/9]">
            {/* Mobile Image */}
            <Image
              src="/images/HeroMobile.svg"
              alt="Hero"
              fill
              className="object-cover md:hidden"
              priority
            />
            {/* Desktop Image */}
            <Image
              src="/images/hero_image.svg"
              alt="Hero"
              fill
              className="hidden object-cover md:block"
              priority
            />
          </div>
        </Reveal>

        <Reveal width="fit-content" delay={0.4}>
          <div className="mt-12 flex w-full max-w-4xl flex-row items-center justify-center gap-4 md:gap-24">
            <div className="flex flex-col items-center gap-2">
              <Subtitle
                content="MODENA"
                style={{ color: 'var(--secondary-pink)' }}
              />
              <span className="text-sm font-light tracking-widest text-white/80">
                44.6471°N 10.9252°E
              </span>
            </div>

            <div className="h-10 w-px bg-white/30"></div>

            <div className="flex flex-col items-center gap-2">
              <Subtitle
                content="REGGIO EMILIA"
                style={{ color: 'var(--primary-yellow)' }}
              />
              <span className="text-sm font-light tracking-widest text-white/80">
                44.6989°N 10.6310°E
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <Quote
        content={`Where knowledge meets experience. A Forbes collaboration with JEMORE.`}
        layout="center"
      />
    </section>
  );
};

export default Hero;
