import React from 'react'
import './styles.css'
const NotesList = ({ notes = [], setNotes = () => { } }) => {
    const onClickRemove = (id) => {
    }
    return (
        <div className='main-div'>
            <p>My Notes</p>
            {notes?.map((item) => {
                return <div key={item.id} className='list-view'>
                    <p>{item.note}</p>
                    <button onClick={() => onClickRemove(item.id)} className='button-div'>Delete</button>
                </div>
            })}
        </div>

    )
}
export default NotesList;