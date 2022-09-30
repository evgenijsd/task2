import NoteList from "../../components/NoteList";
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
        case NoteActionTypes.UPDATE_NOTE:
            const noteUpdate = action.payload
            return { loading: false, error: null, notes: state.notes.map(x => (x.id === noteUpdate.id ? noteUpdate : x)) }
        case NoteActionTypes.ADD_NOTE:
            const noteAdd = action.payload
            state.notes.push(noteAdd)
            return { loading: false, error: null, notes: state.notes }
        case NoteActionTypes.ARCHIVE_NOTE:
            const noteArchive = action.payload
            noteArchive.archive = true
            return { loading: false, error: null, notes: state.notes }
        case NoteActionTypes.RESTORE_NOTE:
            const noteRestore = action.payload
            noteRestore.archive = false
            return { loading: false, error: null, notes: state.notes }
        case NoteActionTypes.REMOVE_NOTE:
            const noteRemove = action.payload
            return { loading: false, error: null, notes: state.notes.filter(x => x.id !== noteRemove.id) }
        default:
            return state
    }
}