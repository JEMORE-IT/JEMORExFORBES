import { Metadata } from 'next';

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
      <Hero />

      <CardSection />

      <VisualSection />

      <TicketSection />
    </>
  );
}
