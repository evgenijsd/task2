import axios from "axios"
import { Dispatch } from "redux"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { NoteAction, NoteActionTypes } from "../../types/note"


export const fetchNotes = () => {
    return async (dispatch: Dispatch<NoteAction>) => {
        try {
            dispatch({type: NoteActionTypes.FETCH_NOTES})
            const response = await axios.get('https://task1-32668-default-rtdb.europe-west1.firebasedatabase.app/notes.json')
            response.data = response.data ? Object.keys(response.data).map(key => ({
                ...response.data[key],
                id: key
              })) : []           
            setTimeout( () => { 
                dispatch({ type: NoteActionTypes.FETCH_NOTES_SUCCESS, payload: response.data })         
                }, 500)
        } catch (e) {
            dispatch( {
                type: NoteActionTypes.FETCH_NOTES_ERROR, 
                payload: 'Error notes load'
            })
        }
    }
}