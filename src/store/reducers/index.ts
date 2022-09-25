import { combineReducers } from "redux"
import { noteReducer } from "./noteReducer"

export const rootReducer = combineReducers({
    note: noteReducer
})

export type RootState = ReturnType<typeof rootReducer>