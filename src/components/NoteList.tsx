import React, { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import CategoryList from './CategoryList';
import { CreateNote } from './CreateNote';
import { Modal } from './Modal';
import { INote } from '../types/noteData';


const NoteList: React.FC = () => {
    const {notes, error, loading} = useTypedSelector(state => state.note)
    const {fetchNotes} = useActions()

    const [modal, setModal] = useState(true)

const createHandler = (note: INote) => {
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
      <table className="table-auto">
			{/* <col style="width:5%"/>
			<col style="width:20%"/>
			<col style="width:15%"/>
			<col style="width:15%"/>
			<col style="width:15%"/>
			<col style="width:20%"/>
			<col style="width:10%"/> */}
			<tr>
			<th></th>
			<th>Name</th>
			<th>Created</th>
			<th>Category</th>
			<th>Content</th>
			<th>Dates</th>
			<th>
				<div className="container" >                    
					<button className="btn2" id="notes_archive"><img height="30" width="30" src="https://img.icons8.com/dotty/344/archive-folder.png"/></button>          
					<button className="btn2" id="notes_delete"><img height="30" width="30" src="https://img.icons8.com/sf-ultralight/344/trash.png"/></button>
				</div>
			</th>
			</tr>
			<tbody id="table-notes">
      {notes.map(note =>
      <tr>
            <td><img height="45" width="45" src={note.picture}/></td>
            <td>{note.name}</td>
            <td>{new Date(note.created).toLocaleDateString()}</td>
            <td>{note.category}</td>
            <td>{note.content}</td>
            <td>{note.dates}</td>
            <td>
            <div className="container" >            
            <button className="btn">
                <img height="25" width="25" src="https://img.icons8.com/material-rounded/344/edit--v1.png"/>
            </button>          
            <button className="btn">
                <img height="25" width="25" src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/344/external-_36-user-interface-jumpicon-(glyph)-jumpicon-glyph-ayub-irawan.png"/>
            </button>          
            <button className="btn">
                <img height="25" width="25" src="https://img.icons8.com/material-sharp/344/trash.png"/>
            </button>
        </div> 
        </td>
        </tr>
        )}
      </tbody>
		</table>
    <button id="button-create" type="button">Create Note</button>
    <CategoryList/>
    {modal && <Modal onClose={close}>
            <CreateNote onCreate={createHandler}/>
            </Modal>}
      </>
    )
}

export default NoteList