import React, { FC } from 'react';

import SubtitleProps from './index.types';

const Subtitle: FC<SubtitleProps> = ({ content, className, style }) => {
  return (
    <h2
      className={`text-sm font-semibold uppercase tracking-[0.5em] text-primary-yellow ${className || ''}`}
      style={style}
    >
      {content}
    </h2>
  );
};

export default Subtitle;
