import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    totalTodos,
    completed,
    searchValue,
    setSearchValue,
    searchTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <React.Fragment>
        <TodoCounter 
            total={totalTodos}
            completed={completed}
        />
        <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />

        <TodoList>
            {searchTodos.map(todo => (
            <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
            />
            ))}
        </TodoList>

        <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI }