// Loader.js
import React from "react";

const Loader = ({
  size,
  color,
  type,
  text,
  duration,
  style,
  className,
  ...restProps
}) => {
  const commonStyle = {
    width: size,
    height: size,
    borderColor: color,
    borderWidth: size / 10, // Adjust border width based on size
    ...style,
  };

  if (type === "spinner") {
    return (
      <>
        <div className="loader-container">
          <div className="loader"></div>
          {text && <div className="loader-text">{text}</div>}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="loader"></div>
        <div className={`${className}`} style={commonStyle} {...restProps}>
          {text}
        </div>
      </>
    );
  }
};

export default Loader;
