import React, { FC } from 'react';

import SubtitleProps from './index.types';

const Subtitle: FC<SubtitleProps> = ({ content }) => {
  return (
    <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-primary-yellow">
      {content}
    </h2>
  );
};

export default Subtitle;
