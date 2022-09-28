export interface CategoryState {
    categories: any[];
    loading: boolean;
    error: null | string;
}
export enum CategoryActionTypes {
    FETCH_CATEGORIES = 'FETCH_CATEGORIES',
    FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR',
}
interface FetchCategoriesAction {
    type: CategoryActionTypes.FETCH_CATEGORIES;
}
interface FetchCategoriesSuccessAction {
    type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS;
    payload: any[]
}
interface FetchCategoriesErrorAction {
    type: CategoryActionTypes.FETCH_CATEGORIES_ERROR;
    payload: string;
}
export type CategoryAction = FetchCategoriesAction | FetchCategoriesErrorAction | FetchCategoriesSuccessAction