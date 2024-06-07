import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';

const Resultados: React.FC = () => {
    const searchResults = useSelector((state: RootState) => state.user.searchResults);
    const loading = useSelector((state: RootState) => state.user.loading);
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedMateria, setSelectedMateria] = useState<string | null>(null);

    if (loading) {
        return <div></div>;
    }

    const handleCardClick = (materia: string) => {
        setSelectedMateria(materia);
        setPopupOpen(true);
    };

    return (
        <div className='Results'>
            {searchResults.length ? (
            <>
                <ul className='flex flex-row gap-3'>
                    {searchResults.map((result, index) => (
                        <li key={index}>
                            <div 
                            className='p-2 mt-3 text-white font-semibold w-[7em] h-10' 
                            style={{background:'rgb(54, 74, 137)',borderRadius:'10px', boxShadow:'8px 5px 18px 0px #00000059'}}
                            onClick={() => handleCardClick(result)}
                            >
                                <h3 className='flex justify-center'>
                                    {result}
                                </h3>
                            </div>
                        </li>
                    ))}
                </ul>
                {popupOpen && (
                <div className="popup fixed inset-0 flex items-center justify-center">
                    <div className="bg-white p-5 rounded shadow-lg w-[25em] relative" style={{top: '-12em'}}>
                        <button
                            className="absolute top-2 right-2 bg-blue-400 px-2 py-1 rounded font-semibold text-white"
                            onClick={() => setPopupOpen(false)}
                        >
                            X
                        </button>
                        <h3 className="text-lg font-semibold mb-4 text-center">Has seleccionado: {selectedMateria}</h3>
                        <ul className="text-center">
                            <li>
                                {/* <Link to={`/profesor/${selectedProfesor}/${selectedMateria}/asistencias`}> */}
                                    Ir a las asistencias de la materia
                                    {/* </Link> */}
                                    </li>
                            <li>
                                {/* <Link to={`/profesor/${selectedProfesor}/${selectedMateria}/calificaciones`}> */}
                                    Ver las notas de la materia
                                    {/* </Link> */}
                                    </li>
                            <li>
                                {/* <Link to={`/profesor/${selectedProfesor}/${selectedMateria}`}> */}
                                    Ver la información del profesor
                                    {/* </Link> */}
                                    </li>
                        </ul>
                    </div>
                </div>
                )}
            </>
            ) : (
                <div className='flex justify-center font-semibold p-4'> ... Upps no hemos encontrado nada , intenta nuevamente!</div>
            )}
        </div>
    );
};

export default Resultados;
