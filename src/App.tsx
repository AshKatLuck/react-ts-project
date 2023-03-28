import React from 'react';
import Todos from './components/Todos';
import Todo from './model/Todo';

function App() {
  const TodoList = [
    new Todo("Learn React twice?"), 
    new Todo("Learn Typescript")
  ]
  return (
    <div>
      <Todos items={ TodoList} />
    </div>
  );
}

export default App;
