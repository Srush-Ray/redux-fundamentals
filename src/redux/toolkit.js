import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

const todoSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
        state.notes.push({ id: Date.now(), note: action.payload });
        console.log('here',state.notes)
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addNote, deleteNote } = todoSlice.actions;

export default todoSlice.reducer;