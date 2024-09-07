
import React, { useRef } from 'react'
import './styles.css'

const Notes = ({setNotes=()=>{}}) => {
  const inputRef=useRef();
  const onClickAdd=(e)=>{
    e.preventDefault();
    setNotes(prev=>[...prev,{
      id:new Date(),
      note:inputRef.current.value
    }])
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