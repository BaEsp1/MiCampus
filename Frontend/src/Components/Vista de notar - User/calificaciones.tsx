import React, { useEffect} from "react";
import { useState } from "react";

interface ProfesorProps {
    profesor: string;
    materia: string;
}

interface User {
    name: string;
    last_name: string;
    id: string;
    notes: []
}


const Notas: React.FC<ProfesorProps> = ({ profesor, materia }) => {
    const [userData, setUserData] = useState<User | null>(null);

    const Calificaciones = [
        {
            competence: "Fracciones",
            note: "3",
            observacion: "-",
            capacity: null,
        },
        {
            competence: "Multiplos",
            note: "7",
            observacion: "-",
            capacity: null,
        },
        {
            competence: "Ecuaciones",
            note: "8",
            observacion: "-",
            capacity: null,
        },
        {
            competence: "Inecuaciones",
            note: "1",
            observacion: "-",
            capacity: null,
        }
    ];

    useEffect(() =>{
        const userDataFromStorage = localStorage.getItem('user');
        if (userDataFromStorage) {
            setUserData(JSON.parse(userDataFromStorage));
        }
    },[userData]);

    return (
        <div>
            <h1 className="text-white">holi {profesor}, {materia}</h1>

            <div className="flex flex-col">
                <div className="text-white flex justify-center gap-4 p-2" style={{ background: 'rgb(54, 74, 137)' }}>
                    Nombre y Apellido: <p style={{fontWeight:'bold'}}> {userData?.name} {userData?.last_name}</p>
                </div>
                <div className="flex flex-row justify-center gap-[16em]" style={{ background: 'rgb(54, 74, 137)' }}>
                    <div className="text-white font-semibold flex gap-2">Estado actual: <p>desaprobado</p></div>
                    <div className="text-white font-semibold flex gap-2">Promedio total: <p>5</p></div>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-4 grid-rows-10 gap-1 p-2" style={{ border: 'solid 2px #cccc' }}>
                {/* Variables */}
                <div className="bg-blue-500 text-white font-semibold p-1 text-center">Evaluación</div>
                <div className="bg-blue-500 text-white font-semibold p-1 text-center">Calificación</div>
                <div className="bg-blue-500 text-white font-semibold p-1 text-center">Recuperatorio</div>
                <div className="bg-blue-500 text-white font-semibold p-1 text-center">Observaciones</div>
                {/* Datos */}
                {Calificaciones.length > 0 ? (
                    Calificaciones.map((calificacion, index) => (
                        <React.Fragment key={index}>
                            <div className="p-1 font-bold text-center" style={{ border: 'solid 2px #cccc' }}>{calificacion.competence}</div>
                            <div className="p-1 font-bold text-center" style={{ border: 'solid 2px #cccc' }}>{calificacion.note}</div>
                            <div className="p-1 font-bold text-center" style={{ border: 'solid 2px #cccc' }}>{calificacion.capacity}</div>
                            <div className="p-1 font-bold text-center" style={{ border: 'solid 2px #cccc' }}>{calificacion.observacion}</div>
                        </React.Fragment>
                    ))
                ) : (
                    <div className="p-1 font-bold text-center" style={{ border: 'solid 2px #cccc' }}>Ups</div>
                )}
            </div>
        </div>
    );
}

export default Notas;
