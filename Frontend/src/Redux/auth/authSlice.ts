import { createSlice } from '@reduxjs/toolkit'

interface AuthSlice {
  status: 'authenticated' | 'not-authenticated' | 'checking';
}

const initialState: AuthSlice = {
    status: 'not-authenticated'
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkingAuth: (state) => {
        state.status = 'checking'
    },
    authenticated: (state) => {
      state.status = 'authenticated';
    },
    notAuthenticated: (state) => {
        state.status = 'not-authenticated';
    },
  },
})

export const {checkingAuth, authenticated, notAuthenticated } = authSlice.actions;
export const authReducer = authSlice.reducer;
