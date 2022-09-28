import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { NoteActionTypes } from '../types/note';
import { INote } from '../types/noteData';

interface ContainerArchiveProps {
    note: INote
}

export function ContainerArchive({note}: ContainerArchiveProps) {
    let notes = useTypedSelector(state => state.note).notes
    const dispatch = useDispatch()

    const restoreNote = (note: any) => {
        note.archive = false
        dispatch({ type: NoteActionTypes.UPDATE_NOTE, payload: notes })
    }
    
    const deleteNote = (note: any) => {
        notes = notes.filter(x => x.id !== note.id)
        dispatch({ type: NoteActionTypes.UPDATE_NOTE, payload: notes })
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