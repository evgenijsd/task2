import axios from "axios"
import { Dispatch } from "redux"
import { NoteAction, NoteActionTypes } from "../../types/note"


export const fetchNotes = () => {
    return async (dispatch: Dispatch<NoteAction>) => {
        try {
            dispatch({type: NoteActionTypes.FETCH_NOTES})
            const response = await axios.get('https://task1-32668-default-rtdb.europe-west1.firebasedatabase.app/notes.json')
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