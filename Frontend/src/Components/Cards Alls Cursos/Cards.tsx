import React, { useState } from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

const Cards: React.FC = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedMateria, setSelectedMateria] = useState<string | null>(null);
    const [selectedProfesor, setSelectedProfesor] = useState<string | null>(null);

    const materias = [
        'Matemáticas', 'Lengua Castellana', 'Historia', 'Biología', 'Geografía', 'Física', 'Química',
        'Educación Física', 'Arte', 'Música', 'Inglés', 'Tecnología', 'Ciencias Sociales', 'Ciencias Naturales',
        'Educación Cívica', 'Filosofía', 'Literatura', 'Economía', 'Informática', 'Religión'
    ];

    const colors = [
        '#b12cc3', '#34103e', '#ff6600', '#ffcc45', '#5cdb95',
        '#8d99ae', '#ef476f', '#ffd166', '#06d6a0', '#277da1',
        '#f3722c', '#f8961e', '#f9844a', '#f9c74f', '#90be6d',
        '#43aa8b', '#577590', '#1f4068', '#ff7851', '#ea526f'
    ];

    const profesores = [
        { nombre: 'María', apellido: 'González' }, { nombre: 'Juan', apellido: 'Martínez' }, { nombre: 'Laura', apellido: 'Rodríguez' }, { nombre: 'Carlos', apellido: 'López' }, { nombre: 'Ana', apellido: 'Pérez' }, { nombre: 'Pedro', apellido: 'García' }, { nombre: 'Lucía', apellido: 'Fernández' }, { nombre: 'Diego', apellido: 'Sánchez' }, { nombre: 'Sara', apellido: 'Romero' }, { nombre: 'Pablo', apellido: 'Hernández' }, { nombre: 'Elena', apellido: 'Gómez' }, { nombre: 'Javier', apellido: 'Díaz' }, { nombre: 'Marta', apellido: 'Vargas' }, { nombre: 'Ricardo', apellido: 'Moreno' }, { nombre: 'Carmen', apellido: 'Jiménez' }, { nombre: 'Alejandro', apellido: 'Ruíz' }, { nombre: 'Isabel', apellido: 'Ortega' }, { nombre: 'Luis', apellido: 'Navarro' }, { nombre: 'Silvia', apellido: 'Molina' }, { nombre: 'Raúl', apellido: 'Santos' }
    ];

    const handleCardClick = (materia: string, profesorNombre: string, profesorApellido: string) => {
        setSelectedMateria(materia);
        setSelectedProfesor(`${profesorNombre} ${profesorApellido}`);
        setPopupOpen(true);
    };

    return (
        <div className="cards-container">
            {materias.map((materia, index) => (
                <div className="card" key={index} onClick={() => handleCardClick(materia, profesores[index].nombre, profesores[index].apellido)}>
                    <div style={{ backgroundColor: colors[index % colors.length], height: '5em', borderRadius: '8px 8px 0 0 ' }}>
                        <h3 style={{ padding: '1em', color: 'white', fontWeight: 'bold', textShadow: 'initial' }}>{materia}</h3>
                    </div>
                    <hr />
                    <h2>Profesor:</h2>
                    <h2>{profesores[index].nombre}, {profesores[index].apellido}</h2>
                    <div className="overlay">
                        <span className="text-white font-semibold">Seleccionar</span>
                    </div>
                </div>
            ))}
            {popupOpen && (
                <div className="popup fixed inset-0 flex items-center justify-center">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">Has seleccionado {selectedMateria} </h3>
                        <ul className="text-center">
                            <li><Link to={`/profesor/${selectedProfesor}/${selectedMateria}/asistencias`}>Ir a las asistencias de la materia</Link></li>
                            <li><Link to={`/profesor/${selectedProfesor}/${selectedMateria}/calificaciones`}>Ver las notas de la materia</Link></li>
                            <li><Link to={`/profesor/${selectedProfesor}`}>Ver la información del profesor</Link></li>
                        </ul>
                        <button className="bg-gray-200 px-4 py-2 mt-4 rounded" onClick={() => setPopupOpen(false)}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cards;
