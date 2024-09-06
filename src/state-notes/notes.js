
import React, { useRef } from 'react'
import './styles.css'
// import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/toolkit';
// import { addNote } from '../redux/actions';
const Notes = () => {
  const inputRef=useRef();
  const dispatch=useDispatch();
  const onClickAdd=(e)=>{
    e.preventDefault();
    dispatch(addNote(inputRef.current.value))
    // const note={
    //   note:inputRef.current.value,
    //   id: uuidv4(),
    // }
    // setNotes(prev=>([...prev,note]));
  }
  return (
    <div className='main-div'>
        <form onSubmit={onClickAdd}>
       Add note: <input name="" id='noteInput'  ref={inputRef} />
      <button type="submit" className='button-div'>+ Add Note</button>
        </form>
    </div>
  )
}

export default Notes