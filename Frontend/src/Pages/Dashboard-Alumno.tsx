import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/Barra de Busqueda/Search';
import Cards from '../Components/Cards Cursos/Cards';
import Resultados from '../Components/Barra de Busqueda/Resultado';

interface User {
    name: string;
    last_name: string;
}

const DashboardAlumno: React.FC = () => {
    const [userData, setUserData] = useState<User>();

    useEffect(() => {
        const userDataFromStorage = localStorage.getItem('user');
        if (userDataFromStorage) {
            setUserData(JSON.parse(userDataFromStorage));
        }
    }, []);

    return (
        <div className="flex flex-row">
            <div className="w-72"></div>
            <div className="m-8 gap-8 flex flex-col">
                <div className="Bienvenida">
                    <h1 className="p-4 font-semibold text-3xl">
                        ¡Bienvenido {userData ? `${userData.name} ${userData.last_name}` : 'Alumn@'}!
                    </h1>
                </div>
                <div className="Buscador">
                    <SearchBar />
                    <Resultados />
                </div>
                <div className="Cursos">
                    <h1 className="text-lg text-gray-600">Cursos accedido recientemente:</h1>
                    <Cards />
                </div>
            </div>
        </div>
    );
}

export default DashboardAlumno;
