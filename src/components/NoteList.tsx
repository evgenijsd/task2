import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchNotes } from '../store/action-creators/note';
import { NoteAction } from '../types/note';

const NoteList: React.FC = () => {
    //const {notes, error, loading} = useTypedSelector(state => state.note)

    const dispatch = useDispatch()

    useEffect( () => {
        //fetchNotes()
    }, []) 

    // if (loading) {
    //     return <h1>Loading...</h1>
    // }
    // if (error) {
    //     return <h1>{error}</h1>
    // }

    
    return (
        <div>

        </div>
    )
    // {notes.map(note =>
    //     <div>{note.name}</div>
    // )}
}

export default NoteList