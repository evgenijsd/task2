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
        <thead className="bg-gray-100">
        <tr>
            <th className='w-1/12 p-2'></th>
            <th className='w-1/6 p-2 text-left'>Name</th>
            <th className='w-1/12 p-2 text-left'>Created</th>
            <th className='w-1/6 p-2 text-left'>Category</th>
            <th className='w-1/5 p-2 text-left'>Content</th>
            <th className='w-1/6 p-2 text-left'>Dates</th>
            <th>
            <div className="w-100 p-2 flex items-left justify-left" >                    
                <button id="notes_archive" onClick={() => archiveToggleAllNote(archive)} className="hover:scale-110 hover:shadow-xl focus:outline-none focus:ring hover:bg-yellow-200">
                    <img height="30" width="30" alt="not img" src="https://img.icons8.com/dotty/344/archive-folder.png"/>
                </button>          
                <button id="notes_delete" onClick={() => deleteAllNote(archive)} className="hover:scale-110 hover:shadow-xl focus:outline-none focus:ring hover:bg-yellow-200">
                    <img height="30" width="30" alt="not img" src="https://img.icons8.com/sf-ultralight/344/trash.png"/>
                </button>
            </div>
            </th>
		</tr>
        </thead>
    )
}