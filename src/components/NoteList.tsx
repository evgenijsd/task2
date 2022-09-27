import React, { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import CategoryList from './CategoryList';
import { CreateNote } from './CreateNote';
import { Modal } from './Modal';
import { INote } from '../types/noteData';
import { TableLineNote } from './TableLineNote';
import { TableNoteHeader } from './TableNoteHeader';

const NoteList: React.FC = () => {
    const {notes, error, loading} = useTypedSelector(state => state.note)
    const {fetchNotes} = useActions()    

    const [modal, setModal] = useState(false)

    const createHandler = (note: INote) => {
      setModal(false)
      notes.push(note)
    }

    const closeState = () => {
      setModal(false)
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
              <TableNoteHeader notes={notes} />      
              <TableLineNote notes={notes.filter(x => !x.archive)} />
            </table>

            <button id="button-create" type="button" onClick={() => setModal(true)}>Create Note</button>

            <CategoryList />

            <table className="table-auto">
              <TableNoteHeader notes={notes} />      
              <TableLineNote notes={notes.filter(x => x.archive)} />
            </table>
          </>}

          {modal && 
            <Modal onClose={closeState}>
              <CreateNote onCreate={createHandler}/>
            </Modal>
          }
      </>
    )
}

export default NoteList