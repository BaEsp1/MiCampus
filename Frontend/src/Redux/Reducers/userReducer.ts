import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AlumnoInfo {
    nombre: string;
    tipoDocumento: string;
    numeroDocumento: string;
    correoElectronico: string;
}

interface RepresentanteInfo {
    relacion: string;
    nombre: string;
    telefono: string;
    correoElectronico: string;
}

interface UserState {
    searchResults: string[];
    loading: boolean;
    alumnoInfo: AlumnoInfo;
    representanteInfo: RepresentanteInfo;
}

const initialState: UserState = {
    searchResults: [],
    loading: false,
    alumnoInfo: {
        nombre: "",
        tipoDocumento: "",
        numeroDocumento: "",
        correoElectronico: ""
    },
    representanteInfo: {
        relacion: "",
        nombre: "",
        telefono: "",
        correoElectronico: ""
    },
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
        guardarInformacion(state, action: PayloadAction<{ alumnoInfo: AlumnoInfo, representanteInfo: RepresentanteInfo }>) {
            state.alumnoInfo = action.payload.alumnoInfo;
            state.representanteInfo = action.payload.representanteInfo;
        },
    },
});

export const { searchMateriasStart, searchMateriasSuccess, searchMateriasFailure, guardarInformacion } = userSlice.actions;

export default userSlice.reducer;
