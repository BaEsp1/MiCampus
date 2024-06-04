import React from 'react';
import FormPerfilAlumno from '../Components/Formulario Perfil Alumno/formAlumno';

const PerfilAlumno: React.FC = () => {
    return (
        <div className="Perfil flex flex-row">
            <div className="Col1" style={{ width: '275px' }}>
            </div>

            <div className="Col2">
                <div className="Fila" style={{height:"6em"}}>
                    <h1 className="p-4 font-semibold text-3xl">Tu perfil</h1>
                </div>

                <div className="Col2-1">
                    <FormPerfilAlumno/>
                </div>
            </div>
        </div>
    );
}

export default PerfilAlumno;
