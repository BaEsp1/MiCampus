import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProfesor } from '../Actions/userActions';
import { User } from "../../config/api";


interface ProfesorData {
  name: string;
  lastName: string;
  email: string;
}

interface UserState {
  user: User | null;
  searchResults: string[];
  loading: boolean;
  DataProf: ProfesorData | null;
}

const initialState: UserState = {
  user: null,
  searchResults: [],
  loading: false,
  DataProf: null,
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
    searchMateriasStart(state) {
      state.loading = true;
    },
    searchMateriasSuccess(state, action: PayloadAction<string[]>) {
      state.searchResults = action.payload;
      state.loading = false;
    },
    searchMateriasFailure(state) {
      state.loading = false;
    },
    loading(state) {
      state.loading = true;
    },
    ready(state) {
      state.loading = false;
    },
    clearDataProf(state) {
      state.DataProf = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfesor.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfesor.fulfilled, (state, action: PayloadAction<ProfesorData>) => {
        state.DataProf = action.payload;
        state.loading = false;
      })
      .addCase(fetchProfesor.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setUserData, clearUserData, clearDataProf,searchMateriasStart, searchMateriasSuccess, searchMateriasFailure, loading, ready} = userSlice.actions;

export default userSlice.reducer;
