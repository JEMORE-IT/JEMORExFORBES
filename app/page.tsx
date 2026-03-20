import { Metadata } from 'next';

import BackgroundCanvas from '@/components/atoms/BackgroundCanvas';
import Countdown from '@/components/molecules/Countdown';
import Hero from '@/components/molecules/Hero';
import CardSection from '@/components/organisms/CardSection';
import TicketSection from '@/components/organisms/TicketSection';
import VisualSection from '@/components/organisms/VisualIdentity';

export const metadata: Metadata = {
  title: 'JEMORE ti vuole bene',
  description: 'anche se non ti paga',
};

export default function Home() {
  return (
    <>
      <BackgroundCanvas />

      <Hero />

      {/* Target date di esempio: 20 Maggio 2026 */}
      <Countdown targetDate="2026-05-20T09:00:00" />

      <CardSection />

      <VisualSection />

      <TicketSection />
    </>
  );
}
