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
    localStorage.setItem('id', '')
  }

  const onModal = () => {
    setModal(true)
  }

  useEffect(() => {
      fetchNotes()
      fetchCategories()
  }, []) 

  if (loading) {
      return <h1 className="text-center">Loading...</h1>
  }
  if (error) {
      return <h1 className="text-center text-red-600">{error}</h1>
  }
  
  return (
    <>
      {!modal && 
        <>
          <div className="mx-10 mt-10">
            <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
              <table className="table-fixed min-w-full divide-y divide-gray-200 text-sm">
                <TableNoteHeader archive={false}/>      
                <TableLineNote notes={notes.filter(x => !x.archive)} updateNote={onModal} />
              </table>
            </div>
          </div>

          <div className='flex items-end justify-end'>
              <button type="button" onClick={clickCreate} className=" inline-block mx-10 mt-5 rounded bg-green-700 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                  Create Note
              </button>
          </div>
            

          <CategoryList />

          <div className="m-10">
            <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
              <table className="table-fixed min-w-full divide-y divide-gray-200 text-sm">
                <TableNoteHeader archive={true}/>      
                <TableLineNote notes={notes.filter(x => x.archive)} updateNote={onModal} />
              </table>
            </div>
          </div>
        </>
      }

      {modal && 
        <Modal onClose={closeState}>
          <CreateNote onCreate={createHandler} />
        </Modal>
      }
    </>
  )
}

export default NoteList