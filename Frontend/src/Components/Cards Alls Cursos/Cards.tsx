import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import './Cards.css';

interface Materia {
    id: string;
    name: string;
    idTeacher: string;
}

interface ProfesorData {
    id: string;
    name: string;
    last_name: string;
    email: string;
    birthdate: string | null;
    dni: string;
    role: string;
    gradeId: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

const Cards: React.FC = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedMateria, setSelectedMateria] = useState<string | null>(null);
    const [selectedProfesor, setSelectedProfesor] = useState<string | null>(null);

    const materias = useSelector((state: RootState) => state.user.materias);
    const profesores = useSelector((state: RootState) => state.user.profesores as unknown as ProfesorData[]);

    const colors = [
        "#003366", "#003D80", "#004499", "#004BB3", "#0052CC",
        "#3269FF", "#3C72FF", "#456AFF", "#4E73FF", "#576CFF",
        "#6065FF", "#695EFF", "#7257FF", "#7B50FF", "#8449FF",
        "#8D42FF", "#963BFF", "#9F34FF", "#A82DFF", "#B126FF",
    ];

    const handleCardClick = (materia: string, profesorNombre: string, profesorApellido: string) => {
        setSelectedMateria(materia);
        setSelectedProfesor(`${profesorNombre} ${profesorApellido}`);
        setPopupOpen(true);
    };

    return (
        <div className="cards-container">
            {materias?.map((materia: Materia, index: number) => {
                const profesor = profesores.find(prof => prof.id === materia.idTeacher);
                const profesorNombre = profesor ? profesor.name : "Desconocido";
                const profesorApellido = profesor ? profesor.last_name : "Desconocido";

                return (
                    <div className="card-wrapper" key={materia.id}>
                        <div className="card" onClick={() => handleCardClick(materia.name, profesorNombre, profesorApellido)}>
                            <div className="card-header" style={{ backgroundColor: colors[index % colors.length] }}>
                            </div>
                            <hr />
                            <div className="card-body">
                                <h3 className='font-semibold'>{materia.name}</h3>
                            </div>
                            <hr />
                            <h2>Profesor:</h2>
                            <h2 className='font-semibold'>{profesorNombre} {profesorApellido}</h2>
                            <div className="overlay">
                                <span className="text-white font-semibold">VER CURSO</span>
                            </div>
                        </div>
                    </div>
                );
            })}
            {popupOpen && (
                <div className="popup fixed inset-0 flex items-center justify-center">
                    <div className="bg-white p-5 rounded shadow-lg w-[25em] relative">
                        <button
                            className="absolute top-2 right-2 bg-blue-400 px-2 py-1 rounded font-semibold text-white"
                            onClick={() => setPopupOpen(false)}
                        >
                            X
                        </button>
                        <h3 className="text-lg font-semibold mb-4 text-center">Has seleccionado: {selectedMateria}</h3>
                        <ul className="text-center">
                            <li><Link to={`/profesor/${selectedProfesor}/${selectedMateria}/asistencias`}>Ir a las asistencias de la materia</Link></li>
                            <li><Link to={`/profesor/${selectedProfesor}/${selectedMateria}/calificaciones`}>Ver las notas de la materia</Link></li>
                            <li><Link to={`/profesor/${selectedProfesor}/${selectedMateria}`}>Ver la información del profesor</Link></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cards;
