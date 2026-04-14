import React, { FC } from 'react';

import ButtonProps from './index.types';

const ButtonTicket: FC<ButtonProps> = ({ href, fill, shadow, textColor }) => {
  return (
    <a
      target="_blank"
      href={href}
      data-gomry-action="checkout"
      data-gomry-event-id="JournEy-O4egFY4BQVpPNL6W1QGh"
      className="gomry-checkout--button group relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 hover:scale-110"
    >
      {/* Solid offset shadow */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 translate-x-[6px] translate-y-[6px] rounded-md transition-transform duration-300 group-hover:translate-x-[8px] group-hover:translate-y-[8px]"
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
    </a>
  );
};

export default ButtonTicket;
