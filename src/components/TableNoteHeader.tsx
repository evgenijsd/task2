import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NoteActionTypes } from '../types/note';
import { INote } from '../types/noteData';

interface TableNoteHeaderProps {
    notes: INote[],
    archive: boolean
}

export function TableNoteHeader({notes, archive}: TableNoteHeaderProps) {
    const dispatch = useDispatch()
    
    const archiveToggleAllNote = (notes: any[]) => {
        if (archive) {
            notes = notes.map(note => note.archive ? { ...note, archive: false } : note)            
        } else {
            notes = notes.map(note => note.archive ? note : { ...note, archive: true })
        }
        
        dispatch({ type: NoteActionTypes.UPDATE_NOTE, payload: notes })
    }

    const deleteAllNote = (notes: any[]) => {
        if (archive) {
            notes = notes.filter(note => !note.archive)
        } else {
            notes = notes.filter(note => note.archive)
        }
        
        dispatch({ type: NoteActionTypes.UPDATE_NOTE, payload: notes })
    }

    return (
        <tr>
            <th></th>
            <th>Name</th>
            <th>Created</th>
            <th>Category</th>
            <th>Content</th>
            <th>Dates</th>
            <th>
            <div className="container" >                    
                <button className="btn2" id="notes_archive" onClick={() => archiveToggleAllNote(notes)}>
                    <img height="30" width="30" src="https://img.icons8.com/dotty/344/archive-folder.png"/>
                </button>          
                <button className="btn2" id="notes_delete" onClick={() => deleteAllNote(notes)}>
                    <img height="30" width="30" src="https://img.icons8.com/sf-ultralight/344/trash.png"/>
                </button>
            </div>
            </th>
		</tr>
    )
}