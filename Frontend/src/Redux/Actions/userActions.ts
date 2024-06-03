import { AppDispatch } from '../store';
import { guardarInformacion } from '../Reducers/userReducer';

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

export const saveInfo = (alumnoInfo: AlumnoInfo, representanteInfo: RepresentanteInfo) => async (dispatch: AppDispatch) => {
    try {
        const response = await fetch('/api/saveInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ alumnoInfo, representanteInfo })
        });

        if (!response.ok) {
            throw new Error('Failed to save information');
        }
        dispatch(guardarInformacion({ alumnoInfo, representanteInfo }));
    } catch (error) {
        console.error('Error saving information:', error);
    }
};
