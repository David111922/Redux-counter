import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, clearTodo, removeTodo } from './todoSlice';

const TodoComponent = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();
  const todo = useSelector(state => state.todo.todo);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
      setTodoText('');
    }
  };

  const handleClearTodo = () => {
    dispatch(clearTodo());
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <button onClick={handleClearTodo}>Clear All Todo</button>
      <ul>
        {todo.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;
