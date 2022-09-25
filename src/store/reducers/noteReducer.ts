import {NoteAction, NoteActionTypes, NoteState} from "../../types/note";

const initialState: NoteState = {
    notes: [],
    loading: false,
    error: null
}

export const noteReducer = (state = initialState, action: NoteAction): NoteState => {
    switch (action.type) {
        case NoteActionTypes.FETCH_NOTES:
            return { loading: true, error: null, notes: [] }
        case NoteActionTypes.FETCH_NOTES_SUCCESS:
            return { loading: false, error: null, notes: action.payload }
        case NoteActionTypes.FETCH_NOTES_ERROR:
            return { loading: false, error: action.payload, notes: [] }
        default:
            return state
    }
}