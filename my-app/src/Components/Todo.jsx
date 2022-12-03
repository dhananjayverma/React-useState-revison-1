import React, { useState } from 'react'
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

export default function Todo() {
    const[todo,setTodo]=useState([]);
  
    const handleAddTodo=(text)=>{
        const obj={
            id:Date.now()+text+Math.random(),
           title:text,
           status:false
        };
        setTodo([...todo,obj]);
    }
    console.log(todo);
return (
    <div>
      <AddTodo handleAddTodo={handleAddTodo}/>
      {todo.map((todos)=>(
        <TodoItem key={todos.id} 
        title={todos.title} 
        status={todos.status}/>
      ))}
    </div>
  )
}
