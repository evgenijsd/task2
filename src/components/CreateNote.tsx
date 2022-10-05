import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { datesFindRegular, NoteActionTypes } from '../types/note';
import { INote } from '../types/noteData';
import { ErrorMessage } from './ErrorMessage';

interface CreateNotesProps {
    onCreate: (note: INote) => void,
}

export function CreateNote({onCreate}: CreateNotesProps) {
    const dispatch = useDispatch()
    const notes = useTypedSelector(state => state.note).notes 
    const categories = useTypedSelector(state => state.category).categories 
    const [name, setName] = useState('')
    const [category, setCategory] = useState(categories[0].name)
    const [content, setContent] = useState('')
    const [error, setError] = useState('') 

    let noteData: INote = {
        id: 'id' + Date.now().toString(),
        archive: false,
        category: '',
        content: '',
        created: new Date(),
        dates: '',
        name: '',
        picture: ''
    }
    
    useEffect(() => {
        initCreate()
    }, []) 

    const initCreate = () => {
        let id = localStorage.getItem('id')        
        
        if (id) {
            const noteId = notes.find(x => x.id === id)
            noteData.id = noteId.id
            noteData.created = noteId.created
            setName(noteId.name)
            setCategory(noteId.category)
            setContent(noteId.content)
        } else{
            noteData.name = name
            noteData.category = category
            noteData.content = content
            noteData.dates = (content.match(datesFindRegular) || []).join(', ')
            noteData.picture = categories.find(x => x.name === noteData.category).picture
        } 
    }  
   
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        setError('')         

        initCreate()
        
        if (name.trim().length === 0) {
            setError('Please enter name.')
            return
          }

        noteData.name = name
        noteData.category = category
        noteData.content = content
        noteData.dates = (content.match(datesFindRegular) || []).join(', ')
        noteData.picture = categories.find(x => x.name === noteData.category).picture

        if (!notes.find(x => x.id === noteData.id)) {
            dispatch({
                type: NoteActionTypes.ADD_NOTE,
                payload: noteData
            })       
        }
        else {
            dispatch({
                type: NoteActionTypes.UPDATE_NOTE,
                payload: noteData
            })              
        }

        onCreate(noteData)
    }
   
    return (
        <form id="form" onSubmit={submitHandler}>
            <div className="text-2xl text-center mb-2">Edit/Create</div>
            <div className="guruweba_example_infofield">Category</div>
            <select className='border py-2 px-4 mb-2 w-full outline-0' value={category} onChange={event => setCategory(event.target.value)}>
                {categories.map(option => (
                    <option key={option.name}>{option.name}</option>
                ))}
            </select>                        
            <div>Name</div>
            <input type="text" className='border py-2 px-4 mb-2 w-full outline-0' value={name} onChange={event => setName(event.target.value)}/>
            <div>Content</div>
            <input type="text" className='border py-2 px-4 mb-2 w-full outline-0' value={content} onChange={event => setContent(event.target.value)}/>
            <div className='flex items-end justify-end'>
                <button type="submit" className="inline-block mt-5 rounded bg-green-700 px-6 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                    Ok
                </button>
            </div>
            {error && <ErrorMessage error={error} />}
        </form>
    )
}