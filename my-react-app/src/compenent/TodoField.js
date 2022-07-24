import React, { useState ,useRef } from "react";
import { v4 as uuidv4 } from "uuid";


const TodoField = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const handleClick = () => {
    addTodo({
      id: uuidv4(),
      name: value,
      status: false
    });
    setValue("");
    inputRef.current.focus()
  };
  return (

    <div className="todoField">
      <input
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
        className="todoField__input"
      />
      <button onClick={() => handleClick()} className="todoField__btn">
        Add
      </button>
    </div>
  );
};

export default TodoField;
