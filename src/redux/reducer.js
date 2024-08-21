import { ADD_NOTE, DELETE_NOTE } from "./constants.js";
import { v4 as uuidv4 } from 'uuid';
import { isEmpty } from 'lodash';

const initialState = {
    notes: []
}

export const NotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            const note = {
                note: action.payload,
                id: uuidv4(),
            }
            return {
                ...state,
                notes: [...state.notes, note]
            }
        case DELETE_NOTE:
            const findNote = state.notes.find(i => i.id === action.payload);
        if (!isEmpty(findNote)) {
            const filteredNotes = state.notes.filter(i => i.id !== action.payload);
            return {
                ...state,
                notes: filteredNotes
            }
        }else return state;
        default:
            return state;
    }
}