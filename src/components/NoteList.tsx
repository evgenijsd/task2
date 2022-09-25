import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchNotes } from '../store/action-creators/note';

const NoteList: React.FC = () => {
    const {notes, error, loading} = useTypedSelector(state => state.note)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchNotes())
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
                <div>{note.name}</div>
            )}
        </div>
    )
}

export default NoteList