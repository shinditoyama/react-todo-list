import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        list: [],
        filterStatus: 'all',
    },
    reducers: {
        addTodo: (state, action) => {
            state.list.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.list = state.list.filter((item) => item.id !== action.payload.id);
        },
        updateTodo: (state, action) => {
            state.list = state.list.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, name: action.payload.name }
                }
                return item;
            });
        },
        toggleTodo: (state, action) => {
            state.list = state.list.map((item) => {
                if (item.id === action.payload.id) {
                    item.completed = !item.completed
                }
                return item;
            });
        },
        deleteAll: (state, action) => {
            state.list = [];
        },
        selectFilter: (state, action) => {
            state.filterStatus = action.payload;
        },
    }
});

export const { addTodo, deleteTodo, updateTodo, toggleTodo, deleteAll, selectFilter } = todoSlice.actions;

export default todoSlice.reducer;