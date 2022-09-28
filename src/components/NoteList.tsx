import React, { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import CategoryList from './CategoryList';
import { CreateNote } from './CreateNote';
import { Modal } from './Modal';
import { INote } from '../types/noteData';
import { TableLineNote } from './TableLineNote';
import { TableNoteHeader } from './TableNoteHeader';
import { NoteActionTypes } from '../types/note';
import { useDispatch } from 'react-redux';

const NoteList: React.FC = () => {
    let {notes, error, loading} = useTypedSelector(state => state.note)
    const {fetchNotes} = useActions()    
    const dispatch = useDispatch()

    const [modal, setModal] = useState(false)

    const createHandler = (note: INote) => {
      setModal(false)
      
      if (!notes.find(x => x.id === note.id)) {
        notes.push(note)        
      }
      else {
        notes = notes.map(x => (x.id === note.id ? note : x))
      }

      dispatch({ type: NoteActionTypes.UPDATE_NOTE, payload: notes })
      
      localStorage.setItem('id', '')
    }

    const closeState = () => {
      setModal(false)
    }

    const clickCreate = () => {
      setModal(true)
    }

    const onModal = () => {
      setModal(true)
    }

    useEffect(() => {
        fetchNotes()
    }, []) 

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    
    return (
        <>
        {!modal && <>
            <table className="table-auto">
              <TableNoteHeader notes={notes} archive={false}/>      
              <TableLineNote notes={notes.filter(x => !x.archive)} updateNote={onModal} />
            </table>

            <button id="button-create" type="button" onClick={clickCreate}>Create Note</button>

            <CategoryList />

            <table className="table-auto">
              <TableNoteHeader notes={notes} archive={true}/>      
              <TableLineNote notes={notes.filter(x => x.archive)} updateNote={onModal} />
            </table>
          </>}

          {modal && 
            <Modal onClose={closeState}>
              <CreateNote onCreate={createHandler} />
            </Modal>
          }
      </>
    )
}

export default NoteList