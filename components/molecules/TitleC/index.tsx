import React, { FC } from "react";
import TitleProps from "./index.types";
import Subtitle from "../../atoms/Subtitle";

const TitleC: FC<TitleProps> = ({ children, sottotitolo, colored, color, layout = "left" }) => {
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
    <div style={{ textAlign: layout, display: "flex", flexDirection: "column", gap: "0.25rem", marginTop: "4rem" }}>
      {sottotitolo && (
        <Subtitle content={sottotitolo} />
      )}
      <h2
        style={{
          fontSize: "3rem", // 4xl/5xl equivalent
          fontWeight: "500",
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

export default TitleC;