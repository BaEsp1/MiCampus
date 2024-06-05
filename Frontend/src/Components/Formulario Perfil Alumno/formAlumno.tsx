import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../../Redux/store'; 
import icon from '../../Imagenes/Iconos/user.png';
import { toast } from 'react-toastify';

const FormPerfilAlumno: React.FC = () => {
    // const dispatch = useDispatch<AppDispatch>();

    const [userData, setuserData] = useState({
        name: '',
        tipoDocumento: '',
        numeroDocumento: '',
        correoElectronico: ''
    });

    const [representanteInfo, setRepresentanteInfo] = useState({
        relacion: '',
        name: '',
        telefono: '',
        correoElectronico: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
            if (userData.name && userData.tipoDocumento 
                && userData.numeroDocumento && userData.correoElectronico 
                && representanteInfo.relacion && representanteInfo.name 
                && representanteInfo.telefono && representanteInfo.correoElectronico){
            // dispatch(saveInfo(userData, representanteInfo));
            toast.success('Información guardada correctamente');
        } else {
            toast.error('Por favor completa todos los campos');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-wrap justify-around w-[76em] gap-8">
            <div className="flex flex-col gap-8">
                <h2 className="font-semibold text-xl">Información del alumno</h2>

                <div className="flex flex-col gap-2">
                    <label>name y Apellido:</label>
                    <input 
                        type="text" 
                        className="border rounded p-2 w-[21em]" 
                        style={{ borderColor: '#CCCCCC' }}
                        value={userData.name}
                        onChange={(e) => setuserData({ ...userData, name: e.target.value })}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label>Tipo de documento:</label>
                    <select 
                        className="border rounded p-2" 
                        style={{ borderColor: '#CCCCCC' }}
                        value={userData.tipoDocumento}
                        onChange={(e) => setuserData({ ...userData, tipoDocumento: e.target.value })}
                    >
                        <option>DNI</option>
                        <option>DU</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label>Nº de Documento:</label>
                    <input 
                        type="text" 
                        className="border rounded p-2 w-[21em]" 
                        style={{ borderColor: '#CCCCCC' }}
                        value={userData.numeroDocumento}
                        onChange={(e) => setuserData({ ...userData, numeroDocumento: e.target.value })}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label>Correo electrónico:</label>
                    <input 
                        type="text" 
                        className="border rounded p-2 w-[21em]" 
                        style={{ borderColor: '#CCCCCC' }}
                        value={userData.correoElectronico}
                        onChange={(e) => setuserData({ ...userData, correoElectronico: e.target.value })}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-8">
                <h2 className="font-semibold text-xl">Información del representante</h2>

                <div className="flex flex-col gap-2">
                    <label>Relación con el Alumno:</label>
                    <select 
                        className="border rounded p-2"  
                        style={{ borderColor: '#CCCCCC' }}
                        value={representanteInfo.relacion}
                        onChange={(e) => setRepresentanteInfo({ ...representanteInfo, relacion: e.target.value })}
                    >
                        <option>Representante</option>
                        <option>Madre</option>
                        <option>Padre</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label>name y Apellido:</label>
                    <input 
                        type="text" 
                        className="border rounded p-2 w-[21em]"  
                        style={{ borderColor: '#CCCCCC' }}
                        value={representanteInfo.name}
                        onChange={(e) => setRepresentanteInfo({ ...representanteInfo, name: e.target.value })}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label>Teléfono:</label>
                    <input 
                        type="text" 
                        className="border rounded p-2 w-[21em]"  
                        style={{ borderColor: '#CCCCCC' }}
                        value={representanteInfo.telefono}
                        onChange={(e) => setRepresentanteInfo({ ...representanteInfo, telefono: e.target.value })}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label>Correo Electrónico:</label>
                    <input 
                        type="text" 
                        className="border rounded p-2 w-[21em]" 
                        style={{ borderColor: '#CCCCCC' }}
                        value={representanteInfo.correoElectronico}
                        onChange={(e) => setRepresentanteInfo({ ...representanteInfo, correoElectronico: e.target.value })}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-8">
                <h2 className="font-semibold text-xl">Foto de perfil del alumno</h2>
                <img src={icon} style={{ width: '13em', borderRadius: '10em' }} />
                <button type="button" className="bg-blue-500 text-white rounded p-2">Subir</button>
            </div>

            <div className="w-full flex justify-center">
                <button type="submit" style={{ backgroundColor: '#070654' }} className="text-white rounded p-2 w-[21em]">Guardar</button>
            </div>
        </form>
    );
}

export default FormPerfilAlumno;
