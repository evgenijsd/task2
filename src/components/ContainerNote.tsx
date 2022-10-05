import React from 'react';
import { useDispatch } from 'react-redux';
import { NoteActionTypes } from '../types/note';
import { INote } from '../types/noteData';

interface ContainerNoteProps {
    note: INote,
    onUpdate: () => void
}

export function ContainerNote({note, onUpdate}: ContainerNoteProps) {
    const dispatch = useDispatch()

    const editNote = (note: INote) => {
        dispatch({
            type: NoteActionTypes.UPDATE_NOTE,
            payload: note
        })

        localStorage.setItem('id', note.id)
        onUpdate()        
    }

    const archiveNote = (note: INote) => {
        dispatch({
            type: NoteActionTypes.ARCHIVE_NOTE,
            payload: note
        })
    }

    const deleteNote = (note: INote) => {
        dispatch({
            type: NoteActionTypes.REMOVE_NOTE,
            payload: note
        })
    }
   
    return (
        <div className="container" >            
            <button data-id={note.id} onClick={() => editNote(note)} className="hover:scale-110 hover:shadow-xl focus:outline-none focus:ring hover:bg-yellow-200">
                <img height="25" width="25" alt="not img" src="https://img.icons8.com/material-rounded/344/edit--v1.png"/>
            </button>          
            <button data-id={note.id} onClick={() => archiveNote(note)} className="hover:scale-110 hover:shadow-xl focus:outline-none focus:ring hover:bg-yellow-200">
                <img height="25" width="25" alt="not img" src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/344/external-_36-user-interface-jumpicon-(glyph)-jumpicon-glyph-ayub-irawan.png"/>
            </button>          
            <button data-id={note.id} onClick={() => deleteNote(note)} className="hover:scale-110 hover:shadow-xl focus:outline-none focus:ring hover:bg-yellow-200">
                <img height="25" width="25" alt="not img" src="https://img.icons8.com/material-sharp/344/trash.png"/>
            </button>
        </div> 
    )
}