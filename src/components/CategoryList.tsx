import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const CategoryList: React.FC = () => {
    const {categories, error, loading} = useTypedSelector(state => state.category)
    const {fetchCategories} = useActions()
    const notes = useTypedSelector(state => state.note).notes

    useEffect(() => {
        fetchCategories()
    }, []) 

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    
    return (
        <>
        <table>
			<tr>
				<th></th>
				<th>Note Category</th>
				<th>Active</th>
				<th>Archived</th>
			</tr>
			<tbody id="table-categories">
      {categories.map(category =>
        <tr>      
            <td><img height="45" width="45" src={category.picture}/></td>
            <td>{category.name}</td>
            <td>{Object.keys(notes.filter(note => !note.archive && category.name == note.category)).length}</td>
            <td>{Object.keys(notes.filter(note => note.archive && category.name == note.category)).length}</td>
        </tr>
        )}
      </tbody>
		</table>
      </>
    )
}

export default CategoryList