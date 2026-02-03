import React, { FC } from 'react';

import Subtitle from '../../atoms/Subtitle';

import TitleProps from './index.types';

const TitleC: FC<TitleProps> = ({
  children,
  sottotitolo,
  colored,
  color,
  layout = 'left',
}) => {
  const renderContent = () => {
    if (!colored || !color || !children.includes(colored)) {
      return children;
    }

    const parts = children.split(colored);

    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < parts.length - 1 && (
          <span style={{ color: color }}>{colored}</span>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div
      className="mt-16 flex flex-col gap-1"
      style={{
        textAlign: layout,
      }}
    >
      {sottotitolo && <Subtitle content={sottotitolo} />}
      <h2 className="m-0 font-inter text-3xl font-medium leading-tight text-white md:text-5xl">
        {renderContent()}
      </h2>
    </div>
  );
};

export default TitleC;
