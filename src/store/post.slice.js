import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postsService} from "../services/posts.service";

export const getAllPosts = createAsyncThunk(
    "postSlice/getAllPosts",
    async (_, {rejectedWithValue}) => {
        try {
            return await postsService.getAll();
        } catch (e) {
            return rejectedWithValue(e.message);
        }
    }
)

const postSlice = createSlice({
    name: "postSlice",
    initialState: {
        posts: []
    },
    extraReducers: {
        [getAllPosts.fulfilled]: (state, action) => {
            state.posts = action.payload
        }
    }
})

const postReducer = postSlice.reducer;
export default postReducer;