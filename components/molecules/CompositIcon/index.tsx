'use client';

import { Calendar, MapPin, Users } from 'lucide-react';
import { FC } from 'react';

import Subtitle from '../../../components/atoms/Subtitle';

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
    // Changed to items-start for better multi-line text alignment on mobile
    <div className="flex items-start gap-4 px-4 py-4 md:items-center">
      {/* Icon */}
      <span
        // Added shrink-0 so the icon doesn't squish, and mt-1 to align with the text block
        className="flex h-10 w-10 shrink-0 items-center justify-center mt-1 md:mt-0"
        style={{ color: colorIcon }}
      >
        <span className="[&>svg]:h-8 [&>svg]:w-8 [&>svg]:stroke-[1.6]">
          {IconEl}
        </span>
      </span>

      {/* Text */}
      {/* Removed invalid 'w-md', added flex-1 and w-full */}
      <div className="flex flex-1 w-full flex-col gap-1">
        <Subtitle content={title} />
        <span className="text-sm font-medium text-tertiary-gray">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default CompositIcon;