import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

const CategoryList: React.FC = () => {
    const {categories, error, loading} = useTypedSelector(state => state.category)    
    const notes = useTypedSelector(state => state.note).notes

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    
    return (
        <>
        <div className="mx-10 mt-10">
            <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
                <table className="table-fixed min-w-full divide-y divide-gray-200 text-sm">
                    <thead className='bg-gray-100'>
                        <tr>
                            <th className='w-1/12 px-2 py-3 text-left'></th>
                            <th className='w-1/3 px-2 py-3 text-left'>Note Category</th>
                            <th className='w-1/3 px-2 py-3 text-left'>Active</th>
                            <th className='w-1/3 px-2 py-3 text-left'>Archived</th>
                        </tr>
                    </thead>
                    <tbody id="table-categories">
                        {categories.map(category =>
                            <tr>      
                                <td className='w-1/12 p-2' ><img height="45" width="45" alt="not img" src={category.picture}/></td>
                                <td className='w-1/3 p-2' >{category.name}</td>
                                <td className='w-1/3 p-2'>{Object.keys(notes.filter(note => !note.archive && category.name === note.category)).length}</td>
                                <td className='w-1/3 p-2'>{Object.keys(notes.filter(note => note.archive && category.name === note.category)).length}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
      </>
    )
}

export default CategoryList