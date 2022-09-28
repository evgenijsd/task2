import * as NoteActionCreators from './note'
import * as CategoryActionCreators from './category'

export default {
    ...NoteActionCreators,
    ...CategoryActionCreators,
}
