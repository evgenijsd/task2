import React, { useState } from 'react'
import { Provider } from 'react-redux';

import NoteList from './components/NoteList'
import { store } from './store';


function App() {
  return (
    <> 
      <NoteList/>
    </>
  )
}

export default App;
