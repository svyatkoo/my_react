import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    toDoList: [],
    allCounter: null,
    complited: null
}

const todoSlice = createSlice({
    name: "toDoSlice",
    initialState,
    reducers: {
        save: (state, action) => {
            state.toDoList.push({id: new Date().getTime(), name: action.payload.todo, status: false});
            state.allCounter = state.allCounter + 1;
        },
        changeStatus: (state, action) => {
            const itemToDo = state.toDoList.find(item => item.id === action.payload.id);
            itemToDo.status = !itemToDo.status;
            if (itemToDo.status) {
                state.complited = state.complited + 1;
            }
            if (!itemToDo.status) {
                state.complited = state.complited - 1;
            }
        },
        deleteItem: (state, action) => {
            state.toDoList = state.toDoList.filter(item => item.id !== action.payload.id);
            state.allCounter = state.allCounter - 1;
        }
    },
    extraReducers: {}
})

const todoReducer = todoSlice.reducer;
export default todoReducer;

export const {save, changeStatus, deleteItem} = todoSlice.actions;