import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { INote } from '../types/noteData';
import { ErrorMessage } from './ErrorMessage';

const datesFindRegular = /((\d|\d{2})\D(\d|\d{2})\D\d{4})|(\d{4}\D(\d|\d{2})\D(\d|\d{2}))/g

const noteData: INote = {
    id: 'id' + Date.now().toString(),
    archive: false,
    category: 'Category',
    content: 'Content',
    created: new Date(),
    dates: 'Dates',
    name: 'NAme',
    picture: 'Picture'
}

interface CreateNotesProps {
    onCreate: (note: INote) => void
}

export function CreateNote({onCreate}: CreateNotesProps) {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState('')

    const categories = useTypedSelector(state => state.category).categories
   
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        
        if (name.trim().length === 0) {
            setError('Please enter name.')
            return
          }

        noteData.name = name
        noteData.category = category
        noteData.content = content
        noteData.dates = (content.match(datesFindRegular) || []).join(', ')

        onCreate(noteData)
    }
   
    return (
            <div className="modal_txt">
                <form className="guruweba_example_form" id="form" onSubmit={submitHandler}>
                    <div className="guruweba_example_caption">Edit/Create</div>
                    <div className="guruweba_example_infofield">Category</div>
                    <select id="categories" onChange={event => setCategory(event.target.value)}>
                        {categories.map(option => (
                            <option value={option.name}>{option.name}</option>
                        ))}
                        </select>                        
                    <div>Name</div>
                    <input type="text" id="name" value={name} onChange={event => setName(event.target.value)}/>
                    <div>Content</div>
                    <input type="text" id="content" value={content} onChange={event => setContent(event.target.value)}/>
                    <button type="submit" className="button-submit">Ok</button>
                    {error && <ErrorMessage error={error} />}
                </form>
            </div>
    )
}