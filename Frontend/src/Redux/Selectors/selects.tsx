import { createSelector } from 'reselect';
import { RootState } from '../store';

// Selector para obtener el estado del usuario
const selectUserState = (state: RootState) => state.user;

// Selector memoizado para obtener los resultados de búsqueda
export const selectSearchResults = createSelector(
  [selectUserState],
  (userState) => userState.searchResults
);

// Selector memoizado para obtener los profesores
export const selectProfesores = createSelector(
  [selectUserState],
  (userState) => userState.profesores
);

// Selector memoizado para obtener el estado de carga
export const selectLoading = createSelector(
  [selectUserState],
  (userState) => userState.loading
);

// Selector memoizado para obtener las materias
export const selectMaterias = createSelector(
    [selectUserState],
    (userState) => userState.materias ?? []
  );
  