import React from 'react';
// import { useState, useEffect } from 'react';
import './Cards.css'; 

const Cards: React.FC = () => {


    const materias = ['Matemáticas', 'Lengua Castellana', 'Historia', 'Biología'];
    const colors = ['#b12cc3', '#34103e', '#ff6600', '#ffcc45']; 
    const profesores = ['Lucas', 'Pablo', 'Gabriel', 'Pedro'];
        
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
                <div className="card" key={index}>
                    <div style={{ backgroundColor: colors[index % colors.length], height: '5em', borderRadius: '8px 8px 0 0 ' }}>
                    </div>
                    <hr/>
                    <div style={{ padding: '1em' }}>
                        <h3>{materia}</h3>
                    </div>
                    <hr/>
                    <h2>Profesor: {profesores[index]}</h2>
                    <div className="overlay">
                        <span className="text-white font-semibold">VER CURSO</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;
