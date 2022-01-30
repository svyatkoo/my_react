import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentsService} from "../services";

export const getAllComments = createAsyncThunk(
    "commentSlice/getAllComments",
    async (_, {rejectedWithValue}) => {
        try {
            return await commentsService.getAll();
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

const commentSlice = createSlice({
    name: "commentSlice",
    initialState: {
        comments: []
    },
    extraReducers: {
        [getAllComments.fulfilled]: (state, action) => {
            state.comments = action.payload
        }
    }
})

const commentReducer = commentSlice.reducer;
export default commentReducer;