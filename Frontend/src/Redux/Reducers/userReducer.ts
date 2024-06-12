import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfesor, loadGrade } from '../Actions/userActions';
import { ProfesorData, GradeData, Course, ResponseData, Nota } from '../Types/userTypes'
import { User } from '../../config/api';


interface UserState {
  user: User | null;
  searchResults: { id: string; name: string; idTeacher: string }[];
  loading: boolean;
  dataProf: ProfesorData | null;
  notas: Nota[];
  grade: GradeData | null;
  materias: Course[] | null;
  profesores: ProfesorData[];
}

const initialState: UserState = {
  searchResults: [],
  loading: false,
  dataProf: null,
  notas: [],
  grade: null,
  materias: null,
  profesores: [],
  user: null
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUserData: (state) => {
      state.user == null;
    },
    searchMaterias(state, action: PayloadAction<{ id: string; name: string; idTeacher: string }[] | null>) {
      state.searchResults = action.payload || [];
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
        state.notas = action.payload.notas.map(notaString => {
          const nota: Nota = typeof notaString === 'string' ? JSON.parse(notaString) : notaString;
          return nota;
        });
        state.grade = action.payload.grade;
        state.materias = action.payload.materias;
        state.profesores = action.payload.profesores;
        state.loading = false;
      })

      .addCase(loadGrade.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setUserData, clearUserData, clearDataProf, loading, ready } = userSlice.actions;

export default userSlice.reducer;
