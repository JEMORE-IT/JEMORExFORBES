import { Metadata } from 'next';

import BackgroundCanvas from '@/components/atoms/BackgroundCanvas';
import Hero from '@/components/molecules/Hero';
import CardSection from '@/components/organisms/CardSection';
import TicketSection from '@/components/organisms/TicketSection';

export const metadata: Metadata = {
  title: 'JEMORE ti vuole bene',
  description: 'anche se non ti paga',
};

export default function Home() {
  return (
    <>
      <BackgroundCanvas />

      <Hero />

      <CardSection />

      <TicketSection />
    </>
  );
}
