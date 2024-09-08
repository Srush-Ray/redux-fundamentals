import { createSlice } from "@reduxjs/toolkit"

const initialState={
    notes:[]
}
const notesReducer=createSlice({
    name:'notes',
    initialState,
    reducers:{
        addNote:(state,action)=>{
            state.notes.push({
                id:new Date(),
                note:action.payload
            })
        },
        deleteNote:(state,action)=>{
            const filterNotes=state.notes.filter((note)=>note.id!==action.payload)
            state.notes=filterNotes;
        }
    }
});

export const {addNote,deleteNote}=notesReducer.actions;
export default notesReducer;