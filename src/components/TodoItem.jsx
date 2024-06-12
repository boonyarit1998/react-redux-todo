import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { FaCheck ,FaToggleOff,FaToggleOn  } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../redux/action";

export const TodoItem = ({ todo, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const [newTodo, setTodo] = useState("");

  const handleEditButton = () => {
    setTodo(todo.todo);
    setIsEditing(true);
  };

  const handleEditTodo = () => {
    dispatch(editTodo(index,newTodo));
    setIsEditing(false);
  };



  return (
    <div key={index} className="flex mb-2 p-1 mx-2">
      {isEditing ? (
        <input
          className="border-2  rounded-sm flex-grow p-1"
          type="text"
          placeholder="ADD TODO"
          value={newTodo}
          onChange={(e) => setTodo(e.target.value)}
        />
      ) : (

        <div className="flex-grow bg-gray-100 border-b-2 text-left">
          {todo.status?(<h1 className="">{todo.todo}</h1>) :(<h1 className="line-through">{todo.todo}</h1>)}
          
        </div>
      )}
      {isEditing ? (
        <button
          className="border-2  bg-yellow-400 rounded p-1"
          onClick={handleEditTodo}
        >
          <BsPlus size={20} />
        </button>
      ) : (
        <button
          className="border-2  bg-yellow-400 rounded p-1"
          onClick={ handleEditButton}
        >
          <CiEdit size={20} />
        </button>
      )}

      <button
        className="border-2  bg-red-400 rounded p-1"
        onClick={() => dispatch(deleteTodo(index))}
      >
        <MdDelete size={20} />
      </button>
      {todo.status ?( <button
        className="border-2  bg-orange-400 rounded p-1"
        onClick={() => dispatch(toggleTodo(index))}
      >
        <FaToggleOff size={20} />
      </button>):( <button
        className="border-2  bg-orange-400 rounded p-1"
        onClick={() => dispatch(toggleTodo(index))}
      >
        <FaToggleOn size={20} />
      </button>)}
     
    </div>
  );
};
