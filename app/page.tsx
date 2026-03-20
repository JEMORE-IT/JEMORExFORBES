import { Metadata } from 'next';

import Quote from '../components/atoms/Quote';
import Countdown from '../components/molecules/Countdown';
import Hero from '../components/molecules/Hero';
import ScrollFadeIn from '../components/molecules/ScrollFadeIn';
import CardSection from '../components/organisms/CardSection';
import TicketSection from '../components/organisms/TicketSection';
import VisualSection from '../components/organisms/VisualIdentity';

export const metadata: Metadata = {
  title: 'JEMORE ti vuole bene',
  description: 'anche se non ti paga',
};

export default function Home() {
  return (
    <div className="flex flex-col gap-[30vh] pb-[30vh] pt-[15vh] md:gap-[40vh]">
      <ScrollFadeIn>
        <Hero />
      </ScrollFadeIn>

      <ScrollFadeIn>
        <div className="flex min-h-[70vh] items-center justify-center px-4 md:min-h-[80vh]">
          <Quote
            content={`a decade of ideas, connections and growth.`}
            layout="center"
          />
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn>
        {/* Target date di esempio: 20 Maggio 2026 */}
        <Countdown targetDate="2026-05-20T09:00:00" />
      </ScrollFadeIn>

      <ScrollFadeIn>
        <CardSection />
      </ScrollFadeIn>

      <ScrollFadeIn>
        <VisualSection />
      </ScrollFadeIn>

      <ScrollFadeIn>
        <div className="flex min-h-[70vh] items-center justify-center px-4 md:min-h-[80vh]">
          <Quote
            content={`The path from knowledge to experience is not a straight line — it's a journey of discovery.`}
            layout="center"
          />
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <TicketSection />
      </ScrollFadeIn>
    </div>
  );
}
