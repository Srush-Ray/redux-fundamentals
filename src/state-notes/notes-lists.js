import React from 'react'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../redux-toolkit/reducer';
// import { deleteNote } from '../redux/actions';
const NotesList = () => {
    const notesList=useSelector(state=>state.notes);
    const dispatch=useDispatch();
    const onClickRemove = (id) => {
        dispatch(deleteNote(id));
        // const filterNotes=notes.filter(n=>n.id!==id);
        // setNotes(filterNotes)
    }
    return (
        <div className='main-div'>
            <p>My Notes</p>
            {notesList?.map((item) => {
                return <div key={item.id} className='list-view'>
                    <p>{item.note}</p>
                    <button onClick={() => onClickRemove(item.id)} className='button-div'>Delete</button>
                </div>
            })}
        </div>

    )
}
export default NotesList;