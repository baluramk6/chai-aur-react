import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    todos: [{ id: 1, todo: "Learn React", isCompleted: false }],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                todo: action.payload,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return (todo.todo = action.payload.todo);
                } else todo;
            });
        },
    },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
