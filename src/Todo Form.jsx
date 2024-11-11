import { useState } from "react";

export default function Form({todos,setTodos}){
    const [todo, setTodo] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim()) { // Check if todo is not empty
          setTodos([...todos, todo]);
          setTodo(''); // Clear the input field
        }
      };
    return (
        <form onSubmit={handleSubmit} className="myForm">
        <input 
          type="text" 
          onChange={(e) => setTodo(e.target.value)} 
          value={todo} 
          className="input" 
          placeholder="Enter a new task "
        />
        <button type="submit" className="button">Add</button>
      </form>
    )
}