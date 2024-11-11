import { useState } from "react"

export default function TodoList({todos}){
 
    const handleDelete = (item) => {
        const updatedTodos = todos.filter((_, i) => i !== item);
        setTodos(updatedTodos);
      };
    return (
        <div>
           <ul className="ul">
        {todos.map((item, index) => (
          <li key={index} className="li">
            {item} <button className="delete" onClick={()=>handleDelete(index)}>❌</button>
          </li>
        ))}
      </ul>
        </div>
    )
}