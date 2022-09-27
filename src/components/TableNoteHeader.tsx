import React, { useState } from 'react';
import { INote } from '../types/noteData';

interface TableNoteHeaderProps {
    notes: INote[]
}

export function TableNoteHeader({notes}: TableNoteHeaderProps) {
   
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
                <button className="btn2" id="notes_archive"><img height="30" width="30" src="https://img.icons8.com/dotty/344/archive-folder.png"/></button>          
                <button className="btn2" id="notes_delete"><img height="30" width="30" src="https://img.icons8.com/sf-ultralight/344/trash.png"/></button>
            </div>
            </th>
		</tr>
    )
}