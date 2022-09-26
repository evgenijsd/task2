import axios from "axios"
import { Dispatch } from "redux"
import { NoteAction, NoteActionTypes } from "../../types/note"


export const fetchNotes = () => {
    return async (dispatch: Dispatch<NoteAction>) => {
        try {
            dispatch({type: NoteActionTypes.FETCH_NOTES})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')            
            setTimeout( () => { 
                dispatch({ type: NoteActionTypes.FETCH_NOTES_SUCCESS, payload: response.data })         
                }, 1500)
        } catch (e) {
            dispatch( {
                type: NoteActionTypes.FETCH_NOTES_ERROR, 
                payload: 'Error notes load'
            })
        }
    }
}