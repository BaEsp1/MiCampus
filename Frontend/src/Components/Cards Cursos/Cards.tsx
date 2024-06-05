import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import './Cards.css'; 

const Cards: React.FC = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedMateria, setSelectedMateria] = useState<string | null>(null);
    const [selectedProfesor, setSelectedProfesor] = useState<string | null>(null);

    const materias = ['Matemáticas', 'Lengua Castellana', 'Historia', 'Biología'];
    const colors = [
        "#003366", "#003D80", "#004499", "#004BB3", "#0052CC",
        "#3269FF", "#3C72FF", "#456AFF", "#4E73FF", "#576CFF",
        "#6065FF", "#695EFF", "#7257FF", "#7B50FF", "#8449FF",
        "#8D42FF", "#963BFF", "#9F34FF", "#A82DFF", "#B126FF",
      ]
      
    const profesores = [
        { nombre: 'María', apellido: 'González' }, { nombre: 'Juan', apellido: 'Martínez' }, { nombre: 'Laura', apellido: 'Rodríguez' }, { nombre: 'Carlos', apellido: 'López' }, { nombre: 'Ana', apellido: 'Pérez' }, { nombre: 'Pedro', apellido: 'García' }, { nombre: 'Lucía', apellido: 'Fernández' }, { nombre: 'Diego', apellido: 'Sánchez' }, { nombre: 'Sara', apellido: 'Romero' }, { nombre: 'Pablo', apellido: 'Hernández' }, { nombre: 'Elena', apellido: 'Gómez' }, { nombre: 'Javier', apellido: 'Díaz' }, { nombre: 'Marta', apellido: 'Vargas' }, { nombre: 'Ricardo', apellido: 'Moreno' }, { nombre: 'Carmen', apellido: 'Jiménez' }, { nombre: 'Alejandro', apellido: 'Ruíz' }, { nombre: 'Isabel', apellido: 'Ortega' }, { nombre: 'Luis', apellido: 'Navarro' }, { nombre: 'Silvia', apellido: 'Molina' }, { nombre: 'Raúl', apellido: 'Santos' }
    ];
        
    const handleCardClick = (materia: string, profesorNombre: string, profesorApellido: string) => {
        setSelectedMateria(materia);
        setSelectedProfesor(`${profesorNombre} ${profesorApellido}`);
        setPopupOpen(true);
    };

    //Necesito los endpoints!!!

    // const [alumno, setAlumno] = useState<string[]>([]);
    // const [materias, setMaterias] = useState<string[]>([]);
    // const [profesores, setProfesores] = useState<string[]>([]);
    

    // useEffect(() => {
    //     const storedAlumno = localStorage.getItem('alumno');
    //     if (storedAlumno) {
    //         setAlumno(JSON.parse(storedAlumno));
    //     }s

    //     const fetchMaterias = async (alumnoId: string) => {
    //         const response = await fetch(`/api/materias?alumnoId=${alumnoId}`);
    //         const data = await response.json();
    //         setMaterias(data.materias);
    //     };

    //     const fetchProfesores = async () => {
    //         const response = await fetch(`/api/profesores`);
    //         const data = await response.json();
    //         setProfesores(data.profesores);
    //     };

    //     if (alumno) {
    //         fetchMaterias(alumno.id);
    //         fetchProfesores();
    //     }
    // }, [alumno]);

    return (
        <div className="cards-container">
            {materias.map((materia, index) => (
                <div className="card" key={index} onClick={() => handleCardClick(materia, profesores[index].nombre, profesores[index].apellido)}>
                    <div style={{ backgroundColor: colors[index % colors.length], height: '5em', borderRadius: '8px 8px 0 0 ' }}>
                    </div>
                    <hr/>
                    <div style={{ padding: '1em' }}>
                        <h3>{materia}</h3>
                    </div>
                    <hr/>
                    <h2>Profesor:</h2>
                    <h2>{profesores[index].nombre}, {profesores[index].apellido}</h2>
                    <div className="overlay">
                        <span className="text-white font-semibold">VER CURSO</span>
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
