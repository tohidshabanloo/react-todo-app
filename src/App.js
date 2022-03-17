import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Header />
      <AddTodo todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
