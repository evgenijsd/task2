import React from 'react';
import { useDispatch } from 'react-redux';
import { NoteActionTypes } from '../types/note';

interface TableNoteHeaderProps {
    archive: boolean
}

export function TableNoteHeader({archive}: TableNoteHeaderProps) {
    const dispatch = useDispatch()
    
    const archiveToggleAllNote = (archive: boolean) => {
        dispatch({
            type: NoteActionTypes.ARCHIVE_All_TOGGLE,
            payload: archive
        })
    }

    const deleteAllNote = (archive: boolean) => {
        dispatch({
            type: NoteActionTypes.REMOVE_All_TOGGLE,
            payload: archive
        })
        console.log(archive)
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
                <button className="btn2" id="notes_archive" onClick={() => archiveToggleAllNote(archive)}>
                    <img height="30" width="30" src="https://img.icons8.com/dotty/344/archive-folder.png"/>
                </button>          
                <button className="btn2" id="notes_delete" onClick={() => deleteAllNote(archive)}>
                    <img height="30" width="30" src="https://img.icons8.com/sf-ultralight/344/trash.png"/>
                </button>
            </div>
            </th>
		</tr>
    )
}