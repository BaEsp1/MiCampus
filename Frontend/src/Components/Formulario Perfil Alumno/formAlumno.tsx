import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { updateUser } from '../../Redux/Actions/userActions';

interface User {
    name: string;
    last_name: string;
    email: string;
    dni: string;
    birthdate: string;
    representante: {
        relacion: string;
        name: string;
        telefono: string;
        correoElectronico: string;
    };
}

const FormPerfilAlumno: React.FC = () => {
    const [userData, setUserData] = useState<User | undefined>();

    useEffect(() => {
        const userDataFromStorage = localStorage.getItem('user');
        if (userDataFromStorage) {
            const userDataParsed = JSON.parse(userDataFromStorage);
            setUserData(userDataParsed);
        }
    }, []);

    const handleUserDataChange = (key: keyof User, value: string) => {
        if (userData) {
            setUserData({ ...userData, [key]: value });
        }
    };

    const handleRepresentanteInfoChange = (key: keyof User['representante'], value: string) => {
        if (userData) {
            setUserData({
                ...userData,
                representante: {
                    ...userData.representante,
                    [key]: value
                }
            });
        }
    };

    const getInitials = (name: string, lastName: string) => {
        return `${name.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (userData?.name && userData.dni && userData.email && userData.representante.relacion && userData.representante.name && userData.representante.telefono && userData.representante.correoElectronico) {
            try {
                await updateUser(userData);
                toast.success('Información guardada correctamente');
            } catch (error) {
                toast.error('Error guardando la información');
            }
        } else {
            toast.error('Por favor completa todos los campos');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-wrap justify-around w-[76em] gap-8">
            <div className="flex flex-col gap-8">
                <h2 className="font-semibold text-xl">Información del alumno</h2>
                <div className="flex flex-col gap-2">
                    <label>Nombres:</label>
                    <input
                        type="text"
                        className="border rounded p-2 w-[21em]"
                        style={{ borderColor: '#CCCCCC' }}
                        value={userData?.name || ''}
                        onChange={(e) => handleUserDataChange('name', e.target.value )}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Apellidos:</label>
                    <input
                        type="text"
                        className="border rounded p-2 w-[21em]"
                        style={{ borderColor: '#CCCCCC' }}
                        value={userData?.last_name || ''}
                        onChange={(e) => handleUserDataChange('last_name', e.target.value )}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Nº de DNI:</label>
                    <input
                        type="text"
                        className="border rounded p-2 w-[21em]"
                        style={{ borderColor: '#CCCCCC' }}
                        value={userData?.dni || ''}
                        onChange={(e) => handleUserDataChange('dni', e.target.value )}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Correo electrónico:</label>
                    <input
                        type="text"
                        className="border rounded p-2 w-[21em]"
                        style={{ borderColor: '#CCCCCC' }}
                        value={userData?.email || ''}
                        onChange={(e) => handleUserDataChange('email', e.target.value )}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <h2 className="font-semibold text-xl">Información del representante</h2>
                <div className="flex flex-col gap-2">
                    <label>Relación con el Alumno:</label>
                    <select
                        className="border rounded p-2 w-[21em] h-11"
                        style={{ borderColor: '#CCCCCC' }}
                        value={userData?.representante?.relacion || ''}
                        onChange={(e) => handleRepresentanteInfoChange('relacion', e.target.value )}
                    >
                        <option value="">Seleccione</option>
                        <option value="Representante">Representante</option>
                        <option value="Madre">Madre</option>
                        <option value="Padre">Padre</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label>Nombre y Apellido:</label>
                    <input
                        type="text"
                        className="border rounded p-2 w-[21em]"
                        style={{ borderColor: '#CCCCCC' }}
                        value={userData?.representante?.name || ''}
                        onChange={(e) => handleRepresentanteInfoChange('name', e.target.value )}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Teléfono:</label>
                    <input
                        type="text"
                        className="border rounded p-2 w-[21em]"
                        style={{ borderColor: '#CCCCCC' }}
                        value={userData?.representante?.telefono || ''}
                        onChange={(e) => handleRepresentanteInfoChange('telefono', e.target.value )}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Correo Electrónico:</label>
                    <input
                        type="text"
                        className="border rounded p-2 w-[21em]"
                        style={{ borderColor: '#CCCCCC' }}
                        value={userData?.representante?.correoElectronico || ''}
                        onChange={(e) => handleRepresentanteInfoChange('correoElectronico', e.target.value )}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <h2 className="font-semibold text-xl">Foto de perfil del alumno</h2>
                <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl" style={{backgroundColor:'rgb(54, 74, 137)' , alignSelf:'center'}}>
                    {userData ? getInitials(userData.name, userData.last_name) : ''}
                </div>
                <button type="button" className="bg-blue-500 text-white rounded p-2 w-[12em]"  style={{alignSelf:'center'}}>Subir</button>
            </div>
            <div className="w-full flex justify-center">
                <button type="submit" style={{ backgroundColor: '#070654' }} className="text-white rounded p-2 w-[21em]">Guardar</button>
            </div>
        </form>
    );
};

export default FormPerfilAlumno;
