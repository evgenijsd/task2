import { useNotesQuery } from "../store/firebase/firebase.api"


export function HomePage() {
    const {isLoading, isError, data} = useNotesQuery('notes.json')
    return (
        <div>home</div>
    )
}