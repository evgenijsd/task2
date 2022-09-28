import axios from "axios"
import { Dispatch } from "redux"
import { CategoryAction, CategoryActionTypes } from "../../types/category"


export const fetchCategories = () => {
    return async (dispatch: Dispatch<CategoryAction>) => {
        try {
            dispatch({type: CategoryActionTypes.FETCH_CATEGORIES})
            const response = await axios.get('https://task1-32668-default-rtdb.europe-west1.firebasedatabase.app/category.json')
            response.data = response.data ? Object.keys(response.data).map(key => ({
                ...response.data[key],
                id: key
              })) : []           
            setTimeout( () => { 
                dispatch({ type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS, payload: response.data })         
                }, 500)
        } catch (e) {
            dispatch( {
                type: CategoryActionTypes.FETCH_CATEGORIES_ERROR, 
                payload: 'Error notes load'
            })
        }
    }
}