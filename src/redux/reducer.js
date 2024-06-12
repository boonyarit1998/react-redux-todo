import { ADD_TODO,EDIT_TODO,DELETE_TODO, TOGGLE_TODO } from "./actionTypes";

const initState = {
    todos :[ ],
}


export const reducer = (state = initState,action) => {
  switch (action.type) {
    case ADD_TODO:
        return{...state,todos :[...state.todos,{todo : action.payload ,status : true}]};
    case EDIT_TODO:
        return{...state,todos : state.todos.map((todo,index) => (index === action.payload.id ?{...todo,todo:action.payload.todo} : todo))};
    case DELETE_TODO:
        return{...state,todos : state.todos.filter((todo,index) => index !== action.payload) };
    case TOGGLE_TODO:
        return{...state,todos : state.todos.map((todo,index) => (index === action.payload ? {...todo,status: !todo.status}: todo)) };
    default:
      return state ;
  }
}
