import React, { useState } from 'react'
import { Provider } from 'react-redux';

import NoteList from './components/NoteList'
import { store } from './store';


function App() {


  return (
    <>
          <Provider store={store}>
            <NoteList/>
          </Provider>
    </>
  )
}

export default App;
