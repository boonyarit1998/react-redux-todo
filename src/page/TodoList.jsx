import React, { useState } from "react";

import { BsPlus } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/action";
import { TodoItem } from "../components/TodoItem";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos)
  const [newTodo,setTodo] = useState('');
  const dispatch = useDispatch();
 console.log(todos);
  const handleAddTodo = () =>{
    dispatch(addTodo(newTodo));
    setTodo('');
  }

 

  return (
    <div className=" h-screen w-screen mx-auto text-center bg-violet-400 items-center pt-8">
      <div className="max-w-2xl w-full mx-auto bg-gray-50 rounded-sm py-4">
        <h1 className="text-2xl p-4 font-bold">TODO APP</h1>
        <div className="flex justify-center mb-4 mx-2">
          <input
            className="border-2  rounded-sm flex-grow p-1"
            type="text"
            placeholder="ADD TODO"
            value={newTodo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="border-2  bg-blue-400 rounded p-1 " onClick={handleAddTodo} >
          <BsPlus size={20}/>
          </button>
        </div>
        {todos.map((todo,index) => (
          <TodoItem key={index} todo = {todo} index = {index}/>
        ))}
      </div>
    </div>
  );
};
