import React from "react";
import "./styles.css";
import { Todo } from "../models/models";
import TodoCard from "./TodoCard";

interface TodoListProps {
  todos: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  setTodoList,
}: TodoListProps) => {
  return <div className="todolist">
    {
        todos.map((element) => (
            <TodoCard
                key={element.id}
                item={element}
                todos={todos}
                setTodoList={setTodoList}
            />
        ))
    }
  </div>;
};

export default TodoList;
