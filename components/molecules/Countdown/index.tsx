'use client';

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

import TitleC from '../../../components/molecules/TitleC';
import { Card, CardContent } from '../../../components/ui/card';

export interface CountdownProps {
  targetDate: string; // Formato accettato da Date.parse, es. '2026-05-20T09:00:00Z'
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-10">
      <TitleC
        sottotitolo="TIMING"
        colored="inizia"
        color="var(--secondary-pink)"
        layout="center"
      >
        L&apos;evento inizia tra
      </TitleC>

      <div className="mb-24 mt-24 flex w-full flex-wrap justify-center gap-8 text-center md:gap-16">
        {!mounted ? (
          // Skeleton prima dell'idratazione
          [...Array(4)].map((_, i) => (
            <Card
              key={i}
              className="flex h-24 w-24 flex-col items-center justify-center border-none bg-black text-white shadow-2xl backdrop-blur-md md:h-32 md:w-32"
            >
              <CardContent className="flex flex-col items-center justify-center p-0">
                <span className="font-inter text-4xl font-bold text-white/30 md:text-5xl">
                  00
                </span>
                <span className="mt-2 font-opensans text-xs uppercase tracking-widest text-white/40 md:text-sm">
                  {['Giorni', 'Ore', 'Minuti', 'Secondi'][i]}
                </span>
              </CardContent>
            </Card>
          ))
        ) : (
          <>
            <TimeBlock
              value={timeLeft.days}
              label="Giorni"
              color="var(--primary-yellow)"
              index={0}
            />
            <TimeBlock
              value={timeLeft.hours}
              label="Ore"
              color="var(--secondary-pink)"
              index={1}
            />
            <TimeBlock
              value={timeLeft.minutes}
              label="Minuti"
              color="var(--tertiary-blue)"
              index={2}
            />
            <TimeBlock
              value={timeLeft.seconds}
              label="Secondi"
              color="white"
              index={3}
            />
          </>
        )}
      </div>
    </section>
  );
};

interface TimeBlockProps {
  value: number;
  label: string;
  color: string;
}

const TimeBlock: React.FC<TimeBlockProps & { index: number }> = ({
  value,
  label,
  color,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      <Card className="flex h-24 w-24 flex-col items-center justify-center border-none bg-black text-white shadow-2xl backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 md:h-32 md:w-32">
        <CardContent className="flex flex-col items-center justify-center p-0">
          <span
            className="font-inter text-4xl font-bold md:text-5xl"
            style={{ color: color }}
          >
            {value.toString().padStart(2, '0')}
          </span>
          <span className="mt-2 font-opensans text-xs uppercase tracking-widest text-white/60 md:text-sm">
            {label}
          </span>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Countdown;
