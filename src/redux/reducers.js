import { ADD_NOTES, DELETE_NOTES } from "./actions";

const initialState={
    notes:[]
}

export const notesReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_NOTES:
            const newNote={
                id:new Date(),
                note:action.payload,
            }
            return {
                ...state,
                notes:[...state.notes,newNote],

            }
           case DELETE_NOTES:
             const filterNotes=state.notes.filter((note)=>note.id!==action.payload);
            return {
                ...state,
                notes:filterNotes
            }
        default:
           return state;
    }
}