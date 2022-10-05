import * as NoteActionCreators from './note'
import * as CategoryActionCreators from './category'

const exportedObject = {
    ...NoteActionCreators,
    ...CategoryActionCreators,
}

export default exportedObject;
