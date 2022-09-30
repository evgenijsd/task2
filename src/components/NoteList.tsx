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
  let {notes, error, loading} = useTypedSelector(state => state.note)
  const {fetchCategories} = useActions()
  const {fetchNotes} = useActions()    

  const [modal, setModal] = useState(false)

  const createHandler = (note: INote) => {
    setModal(false)
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
      fetchCategories()
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
            <TableNoteHeader archive={false}/>      
            <TableLineNote notes={notes.filter(x => !x.archive)} updateNote={onModal} />
          </table>

          <button id="button-create" type="button" onClick={clickCreate}>Create Note</button>

          <CategoryList />

          <table className="table-auto">
            <TableNoteHeader archive={true}/>      
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