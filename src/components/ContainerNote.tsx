import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { NoteActionTypes } from '../types/note';
import { INote } from '../types/noteData';

interface ContainerNoteProps {
    note: INote,
    onUpdate: () => void
}

export function ContainerNote({note, onUpdate}: ContainerNoteProps) {
    let notes = useTypedSelector(state => state.note).notes
    const dispatch = useDispatch()

    const editNote = (note: any) => {
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
            <button className="btn" data-id={note.id} onClick={() => editNote(note)}>
                <img height="25" width="25" src="https://img.icons8.com/material-rounded/344/edit--v1.png"/>
            </button>          
            <button className="btn" data-id={note.id} onClick={() => archiveNote(note)}>
                <img height="25" width="25" src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/344/external-_36-user-interface-jumpicon-(glyph)-jumpicon-glyph-ayub-irawan.png"/>
            </button>          
            <button className="btn" data-id={note.id} onClick={() => deleteNote(note)}>
                <img height="25" width="25" src="https://img.icons8.com/material-sharp/344/trash.png"/>
            </button>
        </div> 
    )
}