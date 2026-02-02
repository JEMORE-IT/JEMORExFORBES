import React, { FC } from "react";
import TitleProps from "./index.types";

const Title: FC<TitleProps> = ({ children, sottotitolo, colored, color, layout = "left" }) => {
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
    <div style={{ textAlign: layout, display: "flex", flexDirection: "column", gap: "0.25rem" }}>
      {sottotitolo && (
        <span
          style={{
            textTransform: "uppercase",
            fontSize: "0.875rem", // small
            letterSpacing: "0.2em", // tracking-widest
            color: "var(--primary-yellow)",
            fontWeight: "bold",
            fontFamily: "var(--font-inter)",
          }}
        >
          {sottotitolo}
        </span>
      )}
      <h2
        style={{
          fontSize: "3rem", // 4xl/5xl equivalent
          fontWeight: "bold",
          lineHeight: 1.1,
          fontFamily: "var(--font-inter)",
          color: "white", // Assuming dark background as per screenshot
          margin: 0,
        }}
      >
        {renderContent()}
      </h2>
    </div>
  );
};

export default Title;