import { UserRound } from 'lucide-react';
import React from 'react';

import { SpeakerCardProps } from './index.types';

export const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  description,
  color,
}) => {
  return (
    <div
      className="flex flex-col items-center gap-6 rounded-2xl bg-black p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] md:flex-row md:items-start md:p-8"
      style={{ border: `1px solid ${color}40` }}
    >
      <div
        className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: `${color}20` }}
      >
        <UserRound
          style={{ color: color, width: '40px', height: '40px' }}
          strokeWidth={1.5}
        />
      </div>
      <div className="flex flex-col text-center md:text-left">
        <div
          className="mx-auto mb-3 h-1 w-6 rounded-full md:mx-0 md:h-1.5 md:w-8"
          style={{ backgroundColor: color }}
        />
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {name}
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
