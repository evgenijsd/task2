
import React, { useState } from "react"
import { INote } from "../models"

interface NoteListProps {
    note: INote
}

export function NoteList({ note }: NoteListProps) {
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'

    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <img src={note.picture} className="w-1/6" alt={note.name} />
            <p> { note.content } </p>
            <p className="font-bold">{note.dates}</p>
            <button 
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >
                { details ? 'Hide Details' : 'Show Details' }
            </button>

            {details && <div>
                <p> { note.archive }</p>
                <p>Rate: <span style={{ fontWeight: 'bold' }}>{note.category}</span></p>
            </div>}
        </div>
    )
}