import React, { useState } from 'react';
import { INote } from '../types/noteData';
import { ContainerArchive } from './ContainerArchive';
import { ContainerNote } from './ContainerNote';

interface TableLineNotesProps {
    notes: INote[]
}

export function TableLineNote({notes}: TableLineNotesProps) {
   
    return (
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
                            {!note.archive && <ContainerNote note={note} />}
                            {note.archive && <ContainerArchive note={note} />}
                        </td>
                    </tr>
                )}
        </tbody>
    )
}