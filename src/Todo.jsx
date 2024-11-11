import { useState } from "react";
import './StyleSheet/style.css';
import Form from "./Todo Form"
import TodoList from "./TodoList";

export default function Todo() {
  // States for the todo input and list of todos
  const [todos, setTodos] = useState([]);

  return (
    <div>
      
      <Form todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos}/>
    </div>
  );
}
