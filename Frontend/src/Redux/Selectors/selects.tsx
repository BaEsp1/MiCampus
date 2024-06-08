import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectUserState = (state: RootState) => state.user;

export const selectSearchResults = createSelector(
  [selectUserState],
  (userState) => userState.searchResults
);

export const selectProfesores = createSelector(
  [selectUserState],
  (userState) => userState.profesores
);

export const selectLoading = createSelector(
  [selectUserState],
  (userState) => userState.loading
);

export const selectMaterias = createSelector(
    [selectUserState],
    (userState) => userState.materias ?? []
  );
  