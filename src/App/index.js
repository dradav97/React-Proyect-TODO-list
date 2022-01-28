import React from 'react';
import { AppUI } from './AppUI';

// import './App.css';

const todosDefault = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

function App() {
  const [todos, setTodos]= React.useState(todosDefault);
  const [searchValue, setSearchValue] = React.useState('');
  console.log('searchValue : ',searchValue);
  const completed = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchTodos = []

  // aqui vemos si se ha escrito algo en el input y si NO hay mas de 1 letra escrita
  // entonces va a devolver el arreglo completo
  if(!searchValue.length >= 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text); 

    const newTodos = [... todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text); 
    const newTodos = [... todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos)
  }

  return (
    <AppUI
    totalTodos={totalTodos}
    completed={completed}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchTodos={searchTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;