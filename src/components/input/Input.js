import React from "react";

export const Input = ({
  value = "",
  placeholder = "Type text",
  handleChange = () => {},
}) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
