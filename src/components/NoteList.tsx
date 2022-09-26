import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const NoteList: React.FC = () => {
    const {notes, error, loading} = useTypedSelector(state => state.note)
    const {fetchNotes} = useActions()

    useEffect(() => {
        fetchNotes()
    }, []) 

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    
    return (
        <div>
            {notes.map(note =>
                <div key={note.id}>{note.name}</div>
            )}
        </div>
    )
}

export default NoteList