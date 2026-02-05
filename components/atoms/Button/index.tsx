import Link from 'next/link';
import React, { FC } from 'react';

import ButtonProps from './index.types';

const ButtonTicket: FC<ButtonProps> = ({ href, fill, shadow, textColor }) => {
  return (
    <Link
      href={href}
      className="relative inline-flex items-center justify-center px-3 py-1 text-sm font-bold uppercase tracking-wide transition-transform duration-300 hover:scale-105"
    >
      {/* Solid offset shadow */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 translate-x-[5px] translate-y-[5px] rounded-md"
        style={{ backgroundColor: shadow }}
      />

      {/* Button fill */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-md"
        style={{ backgroundColor: fill }}
      />

      {/* Text */}
      <span className="relative z-10" style={{ color: textColor }}>
        GET THE TICKET
      </span>
    </Link>
  );
};

export default ButtonTicket;
