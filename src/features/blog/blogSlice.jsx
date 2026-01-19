import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: [],
  reducers: {
    addBlog: (state, action) => {
      state.push(action.payload);
    },
    deleteBlog: (state, action) => {
      return state.filter(blog => blog.id !== action.payload);
    },
    updateBlog: (state, action) => {
      const index = state.findIndex(
        blog => blog.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addBlog, deleteBlog, updateBlog } = blogSlice.actions;
export default blogSlice.reducer;
