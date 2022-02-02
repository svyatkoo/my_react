import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    toDoList: []
}

const todoSlice = createSlice({
    name: "toDoSlice",
    initialState,
    reducers: {
        save: (state, action) => {
            state.toDoList.push({id:  new Date().getTime(), name: action.payload.todo, status: false});
        },
        changeStatus: (state, action) => {
            const itemToDo = state.toDoList.find(item => item.id === action.payload.id);
            itemToDo.status = !itemToDo.status;
        },
        deleteItem:(state, action) => {
            state.toDoList = state.toDoList.filter(item => item.id !== action.payload.id);
        }
    },
    extraReducers: {}
})

const todoReducer = todoSlice.reducer;
export default todoReducer;

export const {save, changeStatus, deleteItem} = todoSlice.actions;