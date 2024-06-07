import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProfesor, loadGrade } from '../Actions/userActions';

interface ProfesorData {
    name: string;
    lastName: string;
    email: string;
}

interface GradeData {
    tutor: string;
    grade: string;
    section: string;
    school_year: number;
}

interface ResponseData {
    grade: GradeData;
    notas: string[];
    materias: string[];
}

interface UserState {
    searchResults: string[];
    loading: boolean;
    dataProf: ProfesorData | null;
    notas: string[];
    grade: GradeData | null;
    materias: string[];
}

const initialState: UserState = {
    searchResults: [],
    loading: false,
    dataProf: null,
    notas: [],
    grade: null,
    materias: []
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        searchMaterias(state, action: PayloadAction<string[]>) {
          state.searchResults = action.payload;
          state.loading = false;
      },
        loading(state) {
            state.loading = true;
        },
        ready(state) {
            state.loading = false;
        },
        clearDataProf(state) {
            state.dataProf = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfesor.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProfesor.fulfilled, (state, action: PayloadAction<ProfesorData>) => {
                state.dataProf = action.payload;
                state.loading = false;
            })
            .addCase(fetchProfesor.rejected, (state) => {
                state.loading = false;
            })
            .addCase(loadGrade.pending, (state) => {
                state.loading = true;
            })
            .addCase(loadGrade.fulfilled, (state, action: PayloadAction<ResponseData>) => {
                state.notas = action.payload.notas;
                state.grade = action.payload.grade;
                state.materias = action.payload.materias;
                state.loading = false;
            })
            .addCase(loadGrade.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { clearDataProf, loading, ready } = userSlice.actions;

export default userSlice.reducer;
