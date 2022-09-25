import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const firebaseApi = createApi({
    reducerPath: '',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://task1-32668-default-rtdb.europe-west1.firebasedatabase.app/'
    }),
    endpoints: build => ({
        notes: build.query<any, string>({
            query: (result: string) => ({
                url: ''
            })
        })
    })
})

export const {useNotesQuery} = firebaseApi