import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import './Cards.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Cards: React.FC = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedMateria, setSelectedMateria] = useState<string | null>(null);
    const [selectedProfesor, setSelectedProfesor] = useState<string | null>(null);

    const materias = useSelector((state: RootState) => state.user.materias);
    // const profesores = useSelector((state: RootState) => state.profesores);
    const profesores = [
        { nombre: 'María', apellido: 'González' }, { nombre: 'Juan', apellido: 'Martínez' }, { nombre: 'Laura', apellido: 'Rodríguez' }, { nombre: 'Carlos', apellido: 'López' }, { nombre: 'Ana', apellido: 'Pérez' }, { nombre: 'Pedro', apellido: 'García' }, { nombre: 'Lucía', apellido: 'Fernández' }, { nombre: 'Diego', apellido: 'Sánchez' }, { nombre: 'Sara', apellido: 'Romero' }, { nombre: 'Pablo', apellido: 'Hernández' }, { nombre: 'Elena', apellido: 'Gómez' }, { nombre: 'Javier', apellido: 'Díaz' }, { nombre: 'Marta', apellido: 'Vargas' }, { nombre: 'Ricardo', apellido: 'Moreno' }, { nombre: 'Carmen', apellido: 'Jiménez' }, { nombre: 'Alejandro', apellido: 'Ruíz' }, { nombre: 'Isabel', apellido: 'Ortega' }, { nombre: 'Luis', apellido: 'Navarro' }, { nombre: 'Silvia', apellido: 'Molina' }, { nombre: 'Raúl', apellido: 'Santos' }
    ];

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

    const settings = {
        arrow:true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <div className="cards-container-dash">
            <Slider {...settings}>
                {materias.map((materia: string, index: number) => (
                    <div className="card-wrapper" key={index}>
                        <div className="card" onClick={() => handleCardClick(materia, profesores[index].nombre, profesores[index].apellido)}>
                            <div className="card-header" style={{ backgroundColor: colors[index % colors.length] }}>
                            </div>
                            <hr />
                            <div className="card-body">
                                <h3 className='font-semibold'>{materia}</h3>
                            </div>
                            <hr />
                            <h2>Profesor:</h2>
                            <h2 className='font-semibold'>{profesores[index].nombre} {profesores[index].apellido}</h2>
                            <div className="overlay">
                                <span className="text-white font-semibold">VER CURSO</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
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
