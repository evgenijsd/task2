import React from 'react';
import { INote } from '../types/noteData';
import { ContainerArchive } from './ContainerArchive';
import { ContainerNote } from './ContainerNote';

interface TableLineNotesProps {
    notes: INote[],
    updateNote: () => void
}

export function TableLineNote({notes, updateNote}: TableLineNotesProps) {
   
    return (
        <tbody>
            {notes.map(note =>
                    <tr>
                        <td className='w-1/12 p-2'><img height="45" width="45" src={note.picture}/></td>
                        <td className='w-1/6 p-2'>{note.name}</td>
                        <td className='w-1/12 p-2'>{new Date(note.created).toLocaleDateString()}</td>
                        <td className='w-1/6 p-2'>{note.category}</td>
                        <td className='w-1/5 p-2'>{note.content}</td>
                        <td className='w-1/6 p-2'>{note.dates}</td>
                        <td className='w-1/12 p-2 '>
                            {!note.archive && <ContainerNote note={note} onUpdate={updateNote}/>}
                            {note.archive && <ContainerArchive note={note} />}
                        </td>
                    </tr>
                )}
        </tbody>
    )
}