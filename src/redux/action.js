import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from "./actionTypes"

export const addTodo = (todo)=> ({
    type : ADD_TODO,
    payload : todo

});

export const editTodo = (id,todo)=> ({
    type : EDIT_TODO,
    payload : {id,todo}

});

export const deleteTodo = (id)=> ({
    type : DELETE_TODO,
    payload : id

});

export const toggleTodo = (id)=> ({
    type : TOGGLE_TODO,
    payload : id

});