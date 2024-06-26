import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { updateUser } from '../../../Redux/Actions/userActions';

const MySwal = withReactContent(Swal);

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
    materias:[],
}

const FormPerfilAlumno: React.FC = () => {
    const [userData, setUserData] = useState<User | undefined>();

    useEffect(() => {
        const userDataFromStorage = localStorage.getItem('user');
        if (userDataFromStorage) {
            const userDataParsed = JSON.parse(userDataFromStorage);
            setUserData({
                ...userDataParsed,
                representante: userDataParsed.representante || {
                    relacion: '',
                    name: '',
                    telefono: '',
                    correoElectronico: ''
                }
            });
        }
    }, []);

    const handleUserDataChange = (key: keyof User, value: string) => {
        if (userData) {
            setUserData({ ...userData, [key]: value });
        }
    };

    // const handleRepresentanteInfoChange = (key: keyof User['representante'], value: string) => {
    //     if (userData && userData.representante) {
    //         setUserData({
    //             ...userData,
    //             representante: {
    //                 ...userData.representante,
    //                 [key]: value
    //             }
    //         });
    //     }
    // };

    const getInitials = (name: string, lastName: string) => {
        return `${name.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (userData) {
            const { name, dni, email, representante } = userData;
            if (name && dni && email && representante && representante.relacion && representante.name && representante.telefono && representante.correoElectronico) {
                try {
                    // console.log('Updating user with data:', userData);
                    await updateUser(userData);
                    MySwal.fire(
                        '¡Éxito!',
                        'Información guardada correctamente',
                        'success'
                    );
                } catch (error) {
                    // console.error('Error updating user:', error);
                    MySwal.fire(
                        'Error',
                        'Error guardando la información',
                        'error'
                    );
                }
            } else {
                // console.warn('Some fields are missing');
                MySwal.fire(
                    'Error',
                    'Por favor completa todos los campos',
                    'error'
                );
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-wrap justify-around w-[76em] gap-8">
            <div className="flex flex-col gap-8">
                <h2 className="font-semibold text-xl">Información del profesor</h2>
                <div className="flex flex-col gap-2">
                    <label>Nombres:</label>
                    <input
                        type="text"
                        className="border rounded p-2 w-[21em]"
                        style={{ borderColor: '#CCCCCC' }}
                        value={userData?.name || ''}
                        onChange={(e) => handleUserDataChange('name', e.target.value )}
                        disabled
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
                        disabled
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
                        disabled
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
                        disabled
                    />
                </div>
            </div>
            
            <div className="flex flex-col gap-8">
                <div className="w-[3em] h-[3em] rounded-full flex items-center justify-center text-white text-6xl" style={{backgroundColor:'rgb(54, 74, 137)' , alignSelf:'center'}}>
                    {userData ? getInitials(userData.name, userData.last_name) : ''}
                </div>
                {/* <button type="button" className="bg-blue-500 text-white rounded p-2 w-[12em]"  style={{alignSelf:'center'}}>Subir</button> */}
            </div>
            {/* <div className="w-full flex justify-center">
                <button type="submit" style={{ backgroundColor: '#070654' }} className="text-white rounded p-2 w-[21em]">Guardar</button>
            </div> */}
        </form>
    );
};

export default FormPerfilAlumno;
