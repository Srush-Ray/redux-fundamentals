import { useState } from 'react';
import './App.css';
import Notes from './state-notes/notes';
import NotesList from './state-notes/notes-lists';

function App() {
  const [notes=[], setNotes=[]] = useState([]);

  return (
    <div className="App">
      <Notes setNotes={setNotes}/>
      <NotesList notes={notes} setNotes={setNotes}/>
    </div>
  );
}

export default App;
