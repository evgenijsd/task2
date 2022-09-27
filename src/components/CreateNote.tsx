import React, { useState } from 'react';
import { INote } from '../types/noteData';
import { ErrorMessage } from './ErrorMessage';

let datesFindRegular = /((\d|\d{2})\D(\d|\d{2})\D\d{4})|(\d{4}\D(\d|\d{2})\D(\d|\d{2}))/g

const noteData: INote = {
    id: '000',
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
                    <select id="categories" value={category} onChange={event => setCategory(event.target.value)}/>
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