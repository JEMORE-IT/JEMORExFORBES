import { UserRound } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { SpeakerCardProps } from './index.types';

export const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  tagline,
  description,
  color,
  image,
  imageClassName,
}) => {
  return (
    <div
      className="flex flex-col items-center gap-6 rounded-2xl bg-black p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] lg:flex-row lg:items-start lg:p-8 h-full"
      style={{ border: `1px solid ${color}40` }}
    >
      <div
        className="relative flex h-40 w-40 lg:h-44 lg:w-44 flex-shrink-0 overflow-hidden items-center justify-center rounded-full"
        style={{ backgroundColor: `${color}20` }}
      >
        {image ? (
          <Image src={image} alt={name} fill className={`object-cover ${imageClassName || ''}`} />
        ) : (
          <UserRound
            style={{ color: color, width: '40px', height: '40px' }}
            strokeWidth={1.5}
          />
        )}
      </div>
      <div className="flex flex-col text-center lg:text-left">
        <div
          className="mx-auto mb-3 h-1 w-6 rounded-full lg:mx-0 lg:h-1.5 lg:w-8"
          style={{ backgroundColor: color }}
        />
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {name}
        </h2>
        {tagline && (
          <p className="mb-3 text-sm italic text-center lg:text-left" style={{ color: color }}>
            {tagline}
          </p>
        )}
        {description.split('\n\n').map((para, i) => (
          <p key={i} className="mb-2 text-sm leading-relaxed text-justify text-zinc-400 last:mb-0">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SpeakerCard;
