import "./AddTodo.scss";
import { useState } from "react";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => setInputValue(event.target.value);

  return (
    <div className="addtodo">
      <button> + </button>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="add new todo..."
      ></input>
    </div>
  );
};

export default AddTodo;
