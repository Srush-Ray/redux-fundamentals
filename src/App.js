import { useState } from 'react';
import './App.css';
import Notes from './state-notes/notes';
import NotesList from './state-notes/notes-lists';
// import { createStore } from 'redux';
// import { notesReducer } from './redux/reducers';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './redux-toolkit/reducer';

const store=configureStore(notesReducer);

function App() {
  // const [notes=[], setNotes=[]] = useState([]);

  return (
    <Provider store={store}>
    <div className="App">
      <Notes/>
      <NotesList/>
    </div>
    </Provider>
  );
}

export default App;
