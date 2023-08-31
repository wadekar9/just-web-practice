import React, { useEffect, useRef, useState } from "react";
import { AiFillEdit, AiFillDelete, AiOutlineCheckCircle } from "react-icons/ai";
import "./styles.css";
import { Todo } from "../models/models";

interface TodoCardProps {
  item: Todo;
  todos: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard: React.FC<TodoCardProps> = ({
  item,
  setTodoList,
  todos,
}: TodoCardProps) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(item.todo);

  const handleDone = (id: number) => {
    setTodoList(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodoList(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e:React.FormEvent,id: number) => {
    e.preventDefault();

    setTodoList(todos.map((ele) => ele.id === id ? { ...ele, todo : editTodo } : ele));

    setEdit(false);
  }

  useEffect(() => {
    (edit) ? inputRef.current?.focus() : inputRef.current?.blur();
  },[edit]);

  return (
    <form className="todoCard" onSubmit={(e) => handleEdit(e,item.id)}>
      {edit ? (
        <input ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="todo__text" />
      ) : item.isDone ? (
        <s className="todo__text">{item.todo}</s>
      ) : (
        <span className="todo__text">{item.todo}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !item.isDone) {
                setEdit(!edit)
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(item.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(item.id)}>
          <AiOutlineCheckCircle />
        </span>
      </div>
    </form>
  );
};

export default TodoCard;
