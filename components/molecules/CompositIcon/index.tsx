'use client';

import { Calendar, MapPin, Users } from 'lucide-react';
import { FC } from 'react';

import Subtitle from '@/components/atoms/Subtitle';

import CompositIconProps, { CompositIconType } from './index.types';

const ICON_MAP: Record<CompositIconType, JSX.Element> = {
  calendar: <Calendar />,
  map: <MapPin />,
  users: <Users />,
};

const CompositIcon: FC<CompositIconProps> = ({
  icon,
  colorIcon,
  title,
  subtitle,
}) => {
  const IconEl = ICON_MAP[icon];

  return (
    <div className="flex items-center gap-3 px-4 py-4">
      {/* Icon */}
      <span
        className="flex h-10 w-10 items-center justify-center"
        style={{ color: colorIcon }}
      >
        <span className="[&>svg]:h-8 [&>svg]:w-8 [&>svg]:stroke-[1.6]">
          {IconEl}
        </span>
      </span>

      {/* Text */}
      <div className="flex flex-col">
        <Subtitle content={title} />
        <span className="text-sm font-medium text-tertiary-gray">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default CompositIcon;
