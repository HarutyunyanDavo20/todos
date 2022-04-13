import React from "react";

const Checkbox = ({ handleCheck = () => {}, checked, id }) => {
  return (
    <input type="checkbox" onChange={() => handleCheck(id)} checked={checked} />
  );
};

export default Checkbox;
