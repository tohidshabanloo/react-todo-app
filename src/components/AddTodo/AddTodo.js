import "./AddTodo.scss";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const AddTodo = ({ setTodoList, todoList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => setInputValue(event.target.value);

  const addTodo = () => {
    const newTodo = { id: uuid(), text: inputValue };
    const updatedTodoList = [...todoList, newTodo];
    setTodoList(updatedTodoList);
    setInputValue("");
  };

  return (
    <div className="addtodo">
      <button onClick={addTodo}> + </button>
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
