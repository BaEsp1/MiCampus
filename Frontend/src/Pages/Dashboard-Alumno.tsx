import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/Barra de Busqueda/Search';
import Cards from '../Components/Carrusel Cursos/Cards';
import Resultados from '../Components/Barra de Busqueda/Resultado';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../Redux/store';
import { loadGrade } from '../Redux/Actions/userActions';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

interface User {
    name: string;
    last_name: string;
    id: string;
}

const DashboardAlumno: React.FC = () => {
    const [userData, setUserData] = useState<User | null>(null);
    const   results = useSelector((state: RootState) => state.user.searchResults)
    const dispatch: AppDispatch = useDispatch()

    
    useEffect(() => {
        const userDataFromStorage = localStorage.getItem('user');
        if (userDataFromStorage) {
            const parsedUserData: User = JSON.parse(userDataFromStorage);
            setUserData(parsedUserData);
            dispatch(loadGrade(parsedUserData.id));
        }
    }, [dispatch]);

    return (
        <div className="flex flex-row">
            <div className="w-72"></div>
            <div className="m-8 gap-8 flex flex-col">
                <div className="Bienvenida">
                    <h1 className="p-3 font-semibold text-3xl">
                        ¡Bienvenido {userData ? `${userData.name} ${userData.last_name}` : 'Alumn@'}!
                    </h1>
                </div>
                <div className="Buscador h-[5em]">
                    <SearchBar />
                    { results? <Resultados />: ""}
                </div>
                <hr className='mt-2'/>
                <div className="Cursos">
                    <h1 className="text-lg text-gray-600">Materias accedidas recientemente:</h1>
                    <Cards />
                </div>
            </div>
        </div>
    );
}

export default DashboardAlumno;
