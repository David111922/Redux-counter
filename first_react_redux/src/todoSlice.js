

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: []
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push({ id: Date.now(), text: action.payload });
    },
    clearTodo: (state) => {
      state.todo = [];
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { addTodo, clearTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
