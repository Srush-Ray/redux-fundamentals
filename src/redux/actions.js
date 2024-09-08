
export const ADD_NOTES="ADD_NOTES";
export const DELETE_NOTES="DELETE_NOTES";

export const setAddNotes=(note='')=>{
    return {
        type:ADD_NOTES,
        payload:note,
    }
}

export const deleteNote=(id)=>{
    return {
        type: DELETE_NOTES,
        payload: id
    }
}