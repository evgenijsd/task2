import React from 'react';
import { useDispatch } from 'react-redux';
import { NoteActionTypes } from '../types/note';
import { INote } from '../types/noteData';

interface ContainerArchiveProps {
    note: INote
}

export function ContainerArchive({note}: ContainerArchiveProps) {
    const dispatch = useDispatch()

    const restoreNote = (note: INote) => {
        dispatch({
            type: NoteActionTypes.RESTORE_NOTE,
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
            <button className="btn" data-id={note.id} onClick={() => restoreNote(note)}>
                <img height="25" width="25" src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/344/external-_36-user-interface-jumpicon-(glyph)-jumpicon-glyph-ayub-irawan.png"/>
            </button>          
            <button className="btn" data-id={note.id} onClick={() => deleteNote(note)}>
                <img height="25" width="25" src="https://img.icons8.com/material-sharp/344/trash.png"/>
            </button>
        </div> 
    )
}