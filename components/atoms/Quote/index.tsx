import React, { FC } from "react";
import QuoteProps from "./index.types";

const Quote: FC<QuoteProps> = ({ content, colored, color, layout = "left" }) => {
  const renderContent = () => {
    if (!colored || !color || !content.includes(colored)) {
      return content;
    }

    const parts = content.split(colored);

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
    <p style={{
      textAlign: layout,
      color: "var(--tertiary-gray)",
      fontFamily: "var(--font-inter)",
      fontSize: "1.5rem",
      fontWeight: "200",
      fontStyle: "italic"
    }}>
      "{renderContent()}"
    </p>
  );
};

export default Quote;