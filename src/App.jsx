import './App.css'
import { useRoutes } from 'react-router-dom'

import React from 'react'
import { TodoList } from './page/TodoList';

const  App = () => {
  const elements = useRoutes([
    {path:'/' ,element : <TodoList></TodoList>},
  ]);

  return  elements

}

export default  App
