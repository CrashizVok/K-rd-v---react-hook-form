import React from "react";

const Spinner = ({ size = 50, dotSize = 8, dotCount = 8, color = "blue" }) => {
  const dots = [];

  for (let i = 0; i < dotCount; i++) {
    const angle = (360 / dotCount) * i;
    const style = {
      width: dotSize,
      height: dotSize,
      backgroundColor: color,
      borderRadius: "50%",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -dotSize / 2,
      marginLeft: -dotSize / 2,
      transform: `rotate(${angle}deg) translate(${size / 2}px) rotate(-${angle}deg)`,
      animation: `spinner-spin 1.5s linear infinite`,
      animationDelay: `${(1.5 / dotCount) * i}s`,
    };
    dots.push(<div key={i} style={style} />);
  }

  const containerStyle = {
    position: "relative",
    width: size * 2,
    height: size * 2,
  };

  return (
    <>
      <div style={containerStyle}>{dots}</div>

      <style>
        {`
          @keyframes spinner-spin {
            0% {
              transform: rotate(0deg) translate(${size / 2}px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translate(${size / 2}px) rotate(-360deg);
            }
          }
        `}
      </style>
    </>
  );
};

export default Spinner;
