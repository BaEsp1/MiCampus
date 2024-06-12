import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface AuthSlice {
  isLogged: boolean;
  isLoading: boolean;
  errorMessage: string | undefined;
}

const initialState: AuthSlice = {
  isLogged: false,
  isLoading: false,
  errorMessage: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkingAuth: (state) => {
      state.isLoading = true
    },
    authenticated: (state) => {
      state.isLogged = true;
      state.isLoading = false
    },
    notAuthenticated: (state, { payload }: PayloadAction<string>) => {
      state.isLogged = false;
      state.isLoading = false;
      state.errorMessage = payload;
    },
    clearErrorMessage: state => {
      state.errorMessage = undefined;
    },
  },
})

export const { checkingAuth, authenticated, notAuthenticated, clearErrorMessage } = authSlice.actions;
export const authReducer = authSlice.reducer;