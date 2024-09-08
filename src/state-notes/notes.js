
import React, { useRef } from 'react'
import './styles.css'
import { useDispatch } from 'react-redux';
import { addNote } from '../redux-toolkit/reducer';
// import { setAddNotes } from '../redux/actions';

const Notes = () => {
  const inputRef=useRef();
  const dispatch=useDispatch();

  const onClickAdd=(e)=>{
    e.preventDefault();
    dispatch(addNote(inputRef.current.value));
    // setNotes(prev=>[...prev,{
    //   id:new Date(),
    //   note:inputRef.current.value
    // }])
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