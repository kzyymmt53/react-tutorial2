import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import TodoContextProvider from './store/todos-context';

function App() {
 
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos  />
    </TodoContextProvider>
  );
}

export default App;
