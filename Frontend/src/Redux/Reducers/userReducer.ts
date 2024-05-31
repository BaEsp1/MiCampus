import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    searchResults: string[];
    loading: boolean;
}

const initialState: UserState = {
    searchResults: [],
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
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
    },
});

export const { searchMateriasStart, searchMateriasSuccess, searchMateriasFailure } = userSlice.actions;

export default userSlice.reducer;
