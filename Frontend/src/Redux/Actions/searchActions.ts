import { AppDispatch } from '../store';
import { searchMateriasStart, searchMateriasSuccess, searchMateriasFailure } from '../Reducers/userReducer';

export const searchMaterias = (query: string) => async (dispatch: AppDispatch) => {
    dispatch(searchMateriasStart());
    try {
        const response = await fetch(`/api/materias?query=${query}`);
        const data: string[] = await response.json();
        dispatch(searchMateriasSuccess(data));
    } catch (error) {
        dispatch(searchMateriasFailure());
    }
};
