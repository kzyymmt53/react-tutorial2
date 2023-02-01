import React, { useContext } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import { TodoContext } from "../store/todos-context";

const Todos: React.FC = () => {

  const todosCtx = useContext(TodoContext);
  return (
    <ul>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
