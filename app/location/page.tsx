import { MapPin } from 'lucide-react';
import { Metadata } from 'next';

import Subtitle from '../../components/atoms/Subtitle';

export const metadata: Metadata = {
  title: 'Location | JournEy 2026',
  description:
    "Scopri la location dell'evento JournEy 2026 a Reggio Emilia.",
};

export default function Location() {
  return (
    <div className="flex flex-col items-center gap-12 px-4 pt-28 pb-20 md:gap-16 md:px-8">
      <Subtitle
        content="LOCATION"
        style={{
          fontSize: '2rem',
          letterSpacing: '0.3em',
          lineHeight: '1.4',
        }}
      />

      {/* Testo - da aggiornare */}
      <div className="flex flex-col items-center gap-3">
        <MapPin
          size={48}
          strokeWidth={1.6}
          style={{ color: 'var(--secondary-pink)' }}
        />
        <Subtitle
          content="CAPANNONE 15C"
          style={{
            color: 'var(--secondary-pink)',
            fontSize: '2rem',
            letterSpacing: '0.3em',
            lineHeight: '1.4',
          }}
        />
        <span className="text-base font-light tracking-[0.3em] text-white/80">
          REGGIANE PARCO INNOVAZIONE — REGGIO EMILIA
        </span>
      </div>

      {/* Google Maps Embed */}
      <div className="w-full max-w-4xl overflow-hidden rounded-xl shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Reggiane+Parco+Innovazione,Reggio+Emilia,Italy&zoom=16"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Capannone 15C - Reggiane Parco Innovazione, Reggio Emilia"
        />
      </div>
    </div>
  );
}
