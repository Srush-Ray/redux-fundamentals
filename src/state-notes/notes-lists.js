import React from 'react'
import './styles.css'
import { deleteNote } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
// import { isEmpty } from 'lodash';

const NotesList = ({ notes = [], setNotes = () => { } }) => {
    const notesState=useSelector(state=>state.notes)
    const dispatch=useDispatch();
    const onClickRemove = (id) => {
    dispatch(deleteNote(id))
        // const findNote = notes.find(i => i.id === id);
        // if (!isEmpty(findNote)) {
        //     const filteredNotes = notes.filter(i => i.id !== id);
        //     setNotes(filteredNotes);
        // }
    }
    return (
        <div className='main-div'>
            <p>List</p>
            {notesState.map((item) => {
                return <div key={item.id} className='list-view'>
                    <p>{item.note}</p>
                    <button onClick={() => onClickRemove(item.id)} className='button-div'>Remove</button>
                </div>
            })}
        </div>

    )
}

export default NotesList