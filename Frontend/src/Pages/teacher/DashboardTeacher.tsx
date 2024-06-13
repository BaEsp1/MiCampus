import React, { useState, useEffect } from 'react';
import Loader from "../../Imagenes/Loading/loading.gif";
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { loadGrade } from '../../Redux/Actions/userActions';
import video1 from "../../videos/WhatsApp Video 2024-06-12 at 18.39.15.mp4";
import video2 from "../../videos/WhatsApp Video 2024-06-12 at 18.39.15 (1).mp4";
import video3 from "../../videos/WhatsApp Video 2024-06-12 at 18.39.15 (2).mp4";
import { Link } from 'react-router-dom';

interface User {
    name: string;
    last_name: string;
    id: string;
}

const DashboarTeacher: React.FC = () => {
    const [userData, setUserData] = useState<User | null>(null);
    const { loading } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const userDataFromStorage = localStorage.getItem('user');
        if (userDataFromStorage) {
            const parsedUserData: User = JSON.parse(userDataFromStorage);
            setUserData(parsedUserData);
            dispatch(loadGrade(parsedUserData.id));
        }
    }, [dispatch]);

    return (
        <>
            {loading ? (
                <div className='flex justify-center flex-col items-center p-[14em]'>
                    <img src={Loader} className='h-[13em] w-[13em]' />
                    <h1 className='text-3xl'>Cargando</h1>
                </div>
            ) : (
                <div className="flex flex-row p-4">
                    <div className="w-72 hidden sm:block"></div>
                    <div className="mx-8 gap-4 flex flex-col w-auto">
                        <div className="Bienvenida p-4">
                            <img src="/welcome.png" alt="Bienvenido" width={300} height={300} style={{ float: 'right' }} />
                            <h1 className="p-3 font-semibold text-3xl">
                                ¡Bienvenid@ profesor@ {userData ? `${userData.name} ${userData.last_name}` : 'Alumn@'}!
                            </h1>
                            <h2 className="p-4 text-lg italic">¡Qué bueno verte por aquí! ¿Por dónde quieres comenzar?</h2>
                            <div className='flex flex-row gap-5 p-[1em] mx-auto w-[40em]'>
                                <div className='bg-blue-500 p-2 text-white rounded-lg transform transition-transform duration-200 hover:scale-110 hover:bg-[rgb(54,74,137)] shadow-lg'>
                                    <Link to="/profesor/materias" className='p-3 font-semibold text-lg'>Ver mis Materias</Link>
                                </div>
                                <div className='bg-blue-500 p-2 text-white rounded-lg transform transition-transform duration-200 hover:scale-110 hover:bg-[rgb(54,74,137)] shadow-lg'>
                                    <Link to="/profesor/notas" className='p-3 font-semibold text-lg'>Ver mis Calificaciones</Link>
                                </div>
                                <div className='bg-blue-500 p-2 text-white rounded-lg transform transition-transform duration-200 hover:scale-110 hover:bg-[rgb(54,74,137)] shadow-lg'>
                                    <Link to="/profesor/perfil" className='p-3 font-semibold text-lg'>Ver mi Perfil</Link>
                                </div>
                            </div>
                            <br/>
                            <hr className='mt-2' />
                        </div>

                        <div className='flex flex-col'>
                            <h1 className="p-2 text-lg ml-[3em]">Instituto educativo:</h1>
                            <h1 className=" mx-auto text-xl font-bold italic">Escuela Secundaria Presidente Domingo F. Sarmiento</h1>
                        </div>

                        <div className='videos flex flex-row gap-2'>
                            <video src={video1} height={350} width={350} autoPlay muted controls />
                            <video src={video2} height={350} width={350} autoPlay muted controls />
                            <video src={video3} height={350} width={350} autoPlay muted controls />
                        </div>
                        <hr></hr>
                    </div>
                </div>
            )}
        </>
    );
}

export default DashboarTeacher;
