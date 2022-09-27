import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const NoteList: React.FC = () => {
    const {categories, error, loading} = useTypedSelector(state => state.category)
    const {fetchCategories} = useActions()

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
			{/* <col style="width:5%" >
			<col style="width:35%">
			<col style="width:30%">
			<col style="width:30%"> */}
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
            <td>{category.name}</td>
            <td>{category.name}</td>
            {/* <td>{count}</td>
            <td>{count_archive}</td> */}
        </tr>
        )}
      </tbody>
		</table>
      </>
    )
}

export default NoteList