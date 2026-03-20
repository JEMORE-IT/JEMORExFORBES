'use client';

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

import TitleC from '../../../components/molecules/TitleC';
import { Card, CardContent } from '../../../components/ui/card';

export interface CountdownProps {
  targetDate: string; // Formato accettato da Date.parse, es. '2026-05-20T09:00:00Z'
}

const MILLISECONDS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE;
const MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * MINUTES_IN_HOUR;
const MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * HOURS_IN_DAY;

const SKELETON_BLOCKS_COUNT = 4;
const ANIMATION_DELAY_MULTIPLIER = 0.1;
const ANIMATION_DURATION = 0.5;

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
          days: Math.floor(difference / MILLISECONDS_IN_DAY),
          hours: Math.floor((difference / MILLISECONDS_IN_HOUR) % HOURS_IN_DAY),
          minutes: Math.floor(
            (difference / MILLISECONDS_IN_MINUTE) % MINUTES_IN_HOUR
          ),
          seconds: Math.floor(
            (difference / MILLISECONDS_IN_SECOND) % SECONDS_IN_MINUTE
          ),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, MILLISECONDS_IN_SECOND);

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

      <div className="mt-12 grid w-full grid-cols-2 place-items-center gap-4 text-center sm:flex sm:flex-row sm:justify-center sm:gap-8 md:mt-16 md:gap-16">
        {!mounted ? (
          // Skeleton prima dell'idratazione
          [...Array(SKELETON_BLOCKS_COUNT)].map((_, i) => (
            <Card
              key={i}
              className="flex h-24 w-24 flex-col items-center justify-center border-none bg-black text-white shadow-2xl backdrop-blur-md sm:h-28 sm:w-28 md:h-32 md:w-32"
            >
              <CardContent className="flex flex-col items-center justify-center p-0">
                <span className="font-inter text-2xl font-bold text-white/30 sm:text-4xl md:text-5xl">
                  00
                </span>
                <span className="mt-1 font-opensans text-[9px] uppercase tracking-wider text-white/40 sm:mt-2 sm:text-xs md:text-sm">
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
      transition={{
        duration: ANIMATION_DURATION,
        delay: index * ANIMATION_DELAY_MULTIPLIER,
        ease: 'easeOut',
      }}
    >
      <Card className="flex h-24 w-24 flex-col items-center justify-center border-none bg-black text-white shadow-2xl backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 sm:h-28 sm:w-28 md:h-32 md:w-32">
        <CardContent className="flex flex-col items-center justify-center p-0">
          <span
            className="font-inter text-2xl font-bold sm:text-4xl md:text-5xl"
            style={{ color: color }}
          >
            {value.toString().padStart(2, '0')}
          </span>
          <span className="mt-1 font-opensans text-[9px] uppercase tracking-wider text-white/60 sm:mt-2 sm:text-xs md:text-sm">
            {label}
          </span>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Countdown;
