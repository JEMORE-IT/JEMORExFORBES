'use client';

import React from 'react';

import TimelineItem from '@/components/molecules/TimelineItem';
import TitleC from '@/components/molecules/TitleC';

import TimelineSectionProps from './index.types';

const TimelineSection: React.FC<TimelineSectionProps> = ({ events }) => {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 pb-32 pt-0">
      <div className="mb-20 text-center">
        <TitleC
          sottotitolo="THE PROGRAM"
          colored="Timeline"
          color="var(--tertiary-blue)"
          layout="center"
        >
          Event Timeline
        </TitleC>
        <p className="mt-4 max-w-2xl text-center font-opensans text-white/70">
          Scopri le attività previste per la giornata, dal check-in
          all&apos;aperitivo finale. Il programma potrebbe subire leggere
          variazioni.
        </p>
      </div>

      <div className="relative w-full">
        {/* Linea verticale centrale per Desktop (collega tutta la timeline) */}
        <div className="absolute left-8 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:left-1/2 md:block"></div>
        {/* Linea verticale per Mobile (collega tutta la timeline a sinistra) */}
        <div className="absolute left-8 top-0 block h-full w-px -translate-x-1/2 bg-white/10 md:hidden"></div>

        <div className="relative z-10 flex w-full flex-col py-10">
          {events.map((event, index) => (
            <TimelineItem
              key={index}
              time={event.time}
              title={event.title}
              description={event.description}
              color={event.color}
              align={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
