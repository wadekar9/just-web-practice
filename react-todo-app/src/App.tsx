import React, { useState } from 'react';
import "./App.css";
import InputFeild from './components/InputFeild';
import TodoList from './components/TodoList';
import { Todo } from './models/models';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);


  console.log(todoList,"ppppp")

  const handleAdd = (event : React.FormEvent) => {
    event.preventDefault();

    if(todo){
      setTodoList([...todoList, { id : Date.now(), todo : todo, isDone : false }])
      setTodo('');
    }
  }

  return (
    <div className='App'>
      <span className="heading">Taskify</span>

      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList setTodoList={setTodoList} todos={todoList} key={'todo-list'} />
    </div>
  )
}

export default App
