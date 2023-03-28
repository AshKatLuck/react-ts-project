import React from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './model/Todo';
import { useState } from "react";

function App() {
  const [toDoList, setToDoList] = useState<Todo[]>([]);

  const addToDoHandler = (toDoText:string) => {
    // console.log(toDoText);
    const newToDoItem = new Todo(toDoText);
    setToDoList((prevState) => prevState.concat(newToDoItem))
  }
  return (
    <div>
      <NewTodo onAddToDo={addToDoHandler}/>
      <Todos items={ toDoList} />
    </div>
  );
}

export default App;
