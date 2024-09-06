import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { isEmpty } from 'lodash';

const initialState = {
value: 0,
}

const counterSlice=createSlice({
    name:'',
    initialState,
    reducers:{
        addNote: (state,action)=> {
            const note = {
                note: action.payload,
                id: uuidv4(),
            }
            state.notes= [...state.notes, note]
        },
        deleteNote: (state,action)=> {
            const findNote = state.notes.find(i => i.id === action.payload);
            if (!isEmpty(findNote)) {
                const filteredNotes = state.notes.filter(i => i.id !== action.payload);
                state.notes= filteredNotes
            }else return state;
        }
    }
});

export const {addNote,deleteNode}=counterSlice.actions;
export default counterSlice.reducer;