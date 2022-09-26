import { noteReducer } from "./reducers/noteReducer"
import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { useDispatch } from "react-redux"


export const store = configureStore({
    reducer: {
        notes: noteReducer
    },
    middleware: [thunk],
})

export default store
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch