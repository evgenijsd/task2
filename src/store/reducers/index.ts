import { combineReducers } from 'redux';
import { categoryReducer } from './categoryReducer';
import { noteReducer } from './noteReducer';

export const rootReducer = combineReducers({
    note: noteReducer,
    category: categoryReducer,
})

export type RootState = ReturnType<typeof rootReducer>