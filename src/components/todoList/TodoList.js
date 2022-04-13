import { useState } from "react";
import { data } from "../../utils/const";
import Button from "../button/Button";
import { Input } from "../input/Input";
import List from "./Row";
import React from "react";

const addBtn = {
  color: "white",
  background: "black",
};

const Todolist = () => {
  const [value, setValue] = useState("");
  const [listData, setListData] = useState(data);
  const completedTodos = listData.filter((t) => t.isCompleted).length;

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleCheck = (id) => {
    setListData(
      listData.map((list) =>
        list.id === id ? { ...list, isCompleted: !list.isCompleted } : list
      )
    );
  };

  const handleClick = (id) => {
    setListData(listData.filter((todo) => todo.id !== id));
  };

  const handleAdd = () => {
    if (value) {
      setListData([
        ...listData,
        {
          id: Math.random(),
          text: value,
          isCompleted: false,
        },
      ]);
      setValue("");
    }
  };

  const delCompleted = () => {
    setListData(listData.filter((t) => !t.isCompleted));
  };

  const handleUpdate = (id, text) => {
    setListData(listData.map((t) => {
      if(t.id === id){
        return {
          ...t,
          text
        }
      }
      return t
    }))
  }

  return (
    <div>
      <Input handleChange={handleChange} value={value} />
      <Button title="add Todo" btnStyle={addBtn} handleClick={handleAdd} />
      {listData.map((todo) => (
        <List
          todo={todo}
          key={todo.id}
          handleCheck={handleCheck}
          handleClick={handleClick}
          handleUpdate={handleUpdate}
        />
      ))}
      <span>
        Completed {completedTodos}/{listData.length}
      </span>
      <Button title="Clear Completed" handleClick={delCompleted} />
    </div>
  );
};

export default Todolist;
