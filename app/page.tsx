import { Metadata } from 'next';

import Quote from '../components/atoms/Quote';
import Countdown from '../components/molecules/Countdown';
import Hero from '../components/molecules/Hero';
import ScrollExpandIn from '../components/molecules/ScrollExpandIn';
import ScrollFadeIn from '../components/molecules/ScrollFadeIn';
import CardSection from '../components/organisms/CardSection';
import SpeakerSection from '../components/organisms/SpeakerSection';
import TicketSection from '../components/organisms/TicketSection';
import VisualSection from '../components/organisms/VisualIdentity';

export const metadata: Metadata = {
  title: 'JournEy 2026',
  description: 'JEMORE x Next Leaders powered by Forbes Italia',
};

export default function Home() {
  return (
    <div className="flex flex-col gap-[8vh] overflow-x-hidden pb-[10vh] md:gap-[15vh]">
      <ScrollFadeIn>
        <Hero />
      </ScrollFadeIn>

      <ScrollFadeIn>
        <Countdown targetDate="2026-05-16T09:00:00" />
      </ScrollFadeIn>

      <ScrollFadeIn>
        <CardSection />
      </ScrollFadeIn>

      <ScrollFadeIn>
        <VisualSection />
      </ScrollFadeIn>


      <ScrollFadeIn>
        <SpeakerSection />
      </ScrollFadeIn>


      <ScrollFadeIn>
        <div className="flex min-h-[8vh] items-center justify-center px-4 md:min-h-[8vh]">
          <Quote
            content={`The path from knowledge to experience is not a straight line — it's a journey of discovery.`}
            layout="center"
          />
        </div>
      </ScrollFadeIn>

      <ScrollExpandIn delay={0.3}>
        <TicketSection />
      </ScrollExpandIn>
    </div>
  );
}
