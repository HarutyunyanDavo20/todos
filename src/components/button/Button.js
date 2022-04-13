import React from "react";

const Button = ({ handleClick, title, btnStyle }) => {
  return (
    <button onClick={handleClick} style={btnStyle}>
      {title}
    </button>
  );
};

export default Button;
