import { INote } from "./noteData";

export interface NoteState {
    notes: any[];
    loading: boolean;
    error: null | string;
}

export enum NoteActionTypes {
    FETCH_NOTES = 'FETCH_NOTES',
    FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS',
    FETCH_NOTES_ERROR = 'FETCH_NOTES_ERROR',
    UPDATE_NOTE = 'UPDATE_NOTE',
    ADD_NOTE = 'ADD_NOTE',
    ARCHIVE_NOTE = 'ARCHIVE_NOTE',
    RESTORE_NOTE = 'RESTORE_NOTE',
    REMOVE_NOTE = 'REMOVE_NOTE',
    REMOVE_All_TOGGLE = 'REMOVE_All_TOGGLE',
    ARCHIVE_All_TOGGLE = 'ARCHIVE_All_TOGGLE',
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
interface UpdateNoteAction {
    type: NoteActionTypes.UPDATE_NOTE;
    payload: INote;
}

interface AddNoteAction {
    type: NoteActionTypes.ADD_NOTE;
    payload: INote;
}

interface ArchiveNoteAction {
    type: NoteActionTypes.ARCHIVE_NOTE;
    payload: INote;
}

interface RestoreNoteAction {
    type: NoteActionTypes.RESTORE_NOTE;
    payload: INote;
}

interface RemoveNoteAction {
    type: NoteActionTypes.REMOVE_NOTE;
    payload: INote;
}

interface RemoveAllToggleAction {
    type: NoteActionTypes.REMOVE_All_TOGGLE;
    payload: boolean;
}

interface ArchiveAllToggleAction {
    type: NoteActionTypes.ARCHIVE_All_TOGGLE;
    payload: boolean;
}

export type NoteAction = 
                FetchNotesAction | 
                FetchNotesErrorAction | 
                FetchNotesSuccessAction | 
                UpdateNoteAction |
                AddNoteAction |
                ArchiveNoteAction |
                RestoreNoteAction |
                RemoveNoteAction |
                RemoveAllToggleAction |
                ArchiveAllToggleAction