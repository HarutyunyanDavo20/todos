import { useState } from "react";
import Button from "../button/Button";
import Checkbox from "../checkbox/Checkbox";
import { Input } from "../input/Input";
import React from "react";

const delBtn = {
  color: "red",
  fontSize: "20px",
};

const List = ({ todo, handleCheck, handleClick, handleUpdate }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <div className="rowTodo">
      <Checkbox
        handleCheck={handleCheck}
        checked={todo.isCompleted}
        id={todo.id}
      />
      <span>{todo.text}</span>
      <Button
        title="X"
        btnStyle={delBtn}
        handleClick={() => handleClick(todo.id)}
      />
      <Input value={value} handleChange={handleChange} />
      <Button
        title="Update Name"
        handleClick={() => {
          if (value) {
            handleUpdate(todo.id, value);
            setValue("");
          }
        }}
      />
    </div>
  );
};

export default List;
