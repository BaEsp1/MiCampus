import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

interface ProfesorProps {
    materia: string;
}

interface User {
    name: string;
    last_name: string;
    id: string;
    notes: number[];
}

interface Nota {
    course: string;
    competence: string;
    note: number;
    capacity: string;
}

const Notas: React.FC<ProfesorProps> = ({ materia }) => {
    const [userData, setUserData] = useState<User | null>(null);
    const notas = useSelector((state: RootState) => state.user.notas as Nota[]);

    const calificaciones = notas.filter(n => n.course === materia);

    useEffect(() => {
        const userDataFromStorage = localStorage.getItem('user');
        if (userDataFromStorage) {
            setUserData(JSON.parse(userDataFromStorage));
        }
    }, []);

    const calcularPromedio = (calificaciones: Nota[]) => {
        if (calificaciones.length === 0) return 0;
        const suma = calificaciones.reduce((acc, curr) => acc + curr.note, 0);
        return suma / calificaciones.length;
    };

    const promedio = calcularPromedio(calificaciones);
    const estado = promedio > 60 ? "Aprobado" : "Desaprobado";

    return (
        <div style={{boxShadow: "0 2px 4px #0000001a"}}>

            <div className="flex flex-col">
                <div className="text-white flex justify-center gap-4 p-2" style={{ background: 'rgb(54, 74, 137)', borderRadius:" 0.5em 0.5em 0 0"}}>
                    Nombre y Apellido: <p style={{fontWeight:'bold'}}> {userData?.name} {userData?.last_name}</p>
                </div>
                <div className="flex flex-row justify-center gap-[16em]" style={{ background: 'rgb(54, 74, 137)' }}>
                    <div className="text-white flex gap-2">Estado actual: <p className="text-white flex gap-2 font-semibold">{estado}</p></div>
                    <div className="text-white flex gap-2">Promedio total: <p className="text-white flex gap-2 font-semibold">{promedio.toFixed(2)}</p></div>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-4 grid-rows-10 gap-1 p-2" style={{ border: 'solid 2px rgba(204, 204, 204, 0.7)', borderRadius:" 0 0 0.5em 0.5em" }}>
                {/* Variables */}
                <div className="bg-blue-500 text-white font-semibold p-1 text-center" style={{ borderRadius:"0.5em"}}>Evaluación</div>
                <div className="bg-blue-500 text-white font-semibold p-1 text-center" style={{ borderRadius:"0.5em"}}>Calificación</div>
                <div className="bg-blue-500 text-white font-semibold p-1 text-center" style={{ borderRadius:"0.5em"}}>Recuperatorio</div>
                <div className="bg-blue-500 text-white font-semibold p-1 text-center" style={{ borderRadius:"0.5em"}}>Observaciones</div>
                {/* Datos */}
                {calificaciones.length > 0 ? (
                    calificaciones.map((calificacion, index) => (
                        <React.Fragment key={index}>
                            <div className="p-1 font-bold text-center" style={{ border: 'solid 2px rgba(204, 204, 204, 0.6)', borderRadius:"0.5em" }}>{calificacion.competence}</div>
                            <div className="p-1 font-bold text-center" style={{ border: 'solid 2px rgba(204, 204, 204, 0.6)', borderRadius:"0.5em" }}>{calificacion.note}</div>
                            <div className="p-1 font-bold text-center" style={{ border: 'solid 2px rgba(204, 204, 204, 0.6)', borderRadius:"0.5em" }}>{calificacion.capacity === "" ? <p>No</p> : <p>Si</p>}</div>
                            <div className="p-1 font-bold text-center" style={{ border: 'solid 2px rgba(204, 204, 204, 0.6)', borderRadius:"0.5em" }}>Ninguna</div>
                        </React.Fragment>
                    ))
                ) : (
                    <div className="p-1 font-bold text-center" style={{ border: 'solid 2px #cccc' }}>Ups</div>
                )}
            </div>
        </div>
    );
};

export default Notas;
