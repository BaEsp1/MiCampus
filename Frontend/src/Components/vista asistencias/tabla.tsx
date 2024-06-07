import React, { useEffect, useState } from "react";

interface ProfesorProps {
    profesor: string;
    materia: string;
}

interface User {
    name: string;
    last_name: string;
    id: string;
    notes: [];
}

const TablaAsistencias: React.FC<ProfesorProps> = ({ profesor, materia }) => {
    const [userData, setUserData] = useState<User | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [asistenciaEnFecha, setAsistenciaEnFecha] = useState<{ date: string, asist: boolean } | null>(null);

    const asist = [
        { date: "2024-06-06", asist: true },
        { date: "2024-06-03", asist: true },
        { date: "2024-06-05", asist: true },
        { date: "2024-06-04", asist: false },
        { date: "2024-06-01", asist: true },
        { date: "2024-06-02", asist: true },
        { date: "2024-06-07", asist: false },
        { date: "2024-06-08", asist: true },
        { date: "2024-06-09", asist: false },
        { date: "2024-06-10", asist: true },
        { date: "2024-06-11", asist: true },
        { date: "2024-06-12", asist: true },
        { date: "2024-06-13", asist: false },
        { date: "2024-06-14", asist: true },
        { date: "2024-06-15", asist: true },
    ];

    useEffect(() => {
        const userDataFromStorage = localStorage.getItem('user');
        if (userDataFromStorage) {
            setUserData(JSON.parse(userDataFromStorage));
        }
    }, []);

    useEffect(() => {
        if (selectedDate) {
            const foundAsistencia = asist.find(a => a.date === selectedDate);
            setAsistenciaEnFecha(foundAsistencia || null);
        }
    }, [selectedDate]);

    const totalAsistencias = asist.length;
    const asistencias = asist.filter(a => a.asist).length;
    const inasistencias = totalAsistencias - asistencias;
    const porcentajeAsistencias = (asistencias / totalAsistencias) * 100;
    const estadoAlumno = porcentajeAsistencias <= 80 ? 'Regular' : 'Irregular';

    return (
        <div>
            <h1 className="text-white">holi {profesor}, {materia}</h1>
            <div className="flex flex-col">
                <div className="text-white flex justify-center gap-4 p-2" style={{ background: 'rgb(54, 74, 137)' }}>
                    Nombre y Apellido: <p style={{fontWeight:'bold'}}> {userData?.name} {userData?.last_name}</p>
                </div>
            </div>
            <hr />
            <div style={{ border: 'solid 2px #cccc' }}>
                <div className="grid grid-cols-4 gap-1 p-3">
                    <div className="bg-blue-500 text-white font-semibold flex gap-1 p-2 justify-center">Asistencias Totales</div>
                    <div className="bg-blue-500 text-white font-semibold flex gap-1 p-2 justify-center">Asistencias</div>
                    <div className="bg-blue-500 text-white font-semibold flex gap-2 p-2 justify-center">Inasistencias</div>
                    <div className="bg-blue-500 text-white font-semibold flex gap-2 p-2 justify-center">Estado</div>
                    <div className="p-1 font-bold text-center" style={{ border: 'solid 2px #cccc' }}>{totalAsistencias}</div>
                    <div className="p-1 font-bold text-center" style={{ border: 'solid 2px #cccc' }}>{asistencias}</div>
                    <div className="p-1 font-bold text-center" style={{ border: 'solid 2px #cccc' }}>{inasistencias}</div>
                    <div className="p-1 font-bold text-center" style={{ border: 'solid 2px #cccc' }}>{estadoAlumno}</div>
                </div>
            </div>

            <h2 className="p-2 text-2xl" >Consultá una fecha específica:</h2>
            <div className="p-2 w-[20em] flex justify-center item-center mx-auto"  style={{ border: 'solid 2px #cccc' }}>
                <label htmlFor="fecha" className="font-semibold m-2">Fecha: </label>
                <input
                    type="date"
                    id="fecha"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
            </div>
            {selectedDate && (
                <div className="p-2 w-[30em] flex justify-center item-center mx-auto flex-col" >
                    {/* <h3>Resultado para {selectedDate}:</h3> */}
                    {asistenciaEnFecha ? (
                        <p className="font-semibold text-xl  flex justify-center item-center">{asistenciaEnFecha.asist ? `${userData?.name} ${userData?.last_name} asistió a clases` : `${userData?.name} ${userData?.last_name} No asistió a clases`}</p>
                    ) : (
                        <p>No hay registros para esta fecha</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default TablaAsistencias;
