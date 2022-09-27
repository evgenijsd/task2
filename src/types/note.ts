export interface NoteState {
    notes: any[];
    loading: boolean;
    error: null | string;
}
export enum NoteActionTypes {
    FETCH_NOTES = 'FETCH_NOTES',
    FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS',
    FETCH_NOTES_ERROR = 'FETCH_NOTES_ERROR',
}
interface FetchNotesAction {
    type: NoteActionTypes.FETCH_NOTES;
}
interface FetchNotesSuccessAction {
    type: NoteActionTypes.FETCH_NOTES_SUCCESS;
    payload: any[]
}
interface FetchNotesErrorAction {
    type: NoteActionTypes.FETCH_NOTES_ERROR;
    payload: string;
}
export type NoteAction = FetchNotesAction | FetchNotesErrorAction | FetchNotesSuccessAction