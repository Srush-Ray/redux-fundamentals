import { useState } from 'react';
import './App.css';
import Notes from './state-notes/notes';
import NotesList from './state-notes/notes-lists';
import { createStore } from 'redux';
import { NotesReducer } from './redux/reducer';
import {Provider} from 'react-redux';
import store from './redux/store';

// const store = createStore(NotesReducer)

function App() {
  const [notes=[], setNotes=[]] = useState([]);

  return (
    <Provider store={store}>
    <div className="App">
      <Notes setNotes={setNotes}/>
      <NotesList notes={notes} setNotes={setNotes}/>
    </div>
    </Provider>

  );
}

export default App;
