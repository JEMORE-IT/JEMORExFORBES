import React, { FC } from 'react';

import SubtitleProps from './index.types';

const Subtitle: FC<SubtitleProps> = ({ content }) => {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-[0.5em] text-primary-yellow">
      {content}
    </h2>
  );
};

export default Subtitle;
