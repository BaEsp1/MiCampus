import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearDataProf } from '../../Redux/Reducers/userReducer'; 
import { RootState, AppDispatch } from '../../Redux/store';

interface ProfesorProps {
  profesor: string;
  materia: string;
}

const DataProf: React.FC<ProfesorProps> = ({ profesor, materia }) => {
  const dispatch = useDispatch<AppDispatch>();
  const profesores = useSelector((state: RootState) => state.user.profesores);
  const loading = useSelector((state: RootState) => state.user.loading);

  useEffect(() => {
    return () => {
      dispatch(clearDataProf());
    };
  }, [dispatch]);

  if (loading || !profesores) {
    return <div>Loading...</div>;
  }

  const [nombre, apellido] = profesor.toLowerCase().split(' ');
  const selectedProfesor = profesores.find(
    prof => prof.name.toLowerCase() === nombre && prof.last_name.toLowerCase() === apellido
  );
  

  if (!selectedProfesor) {
    return <div>Profesor no encontrado</div>;
  }

  const MayusName = selectedProfesor.name.toLocaleUpperCase();

  return (
    <div>
      <div>
        <h1 className='flex items-center justify-center text-2xl font-semibold'>{MayusName}</h1>
        <h2 className='flex items-center justify-center font-400'>Profesor@ de {materia}</h2>
      </div>

      <div className='flex flex-row justify-center gap-10'>

        <div className='Col1 mt-6 w-[20em]'>
          <div className='flex flex-row gap-2 p-2'>
            <h1 className='font-semibold'>Nombre:</h1>
            <h1>{selectedProfesor.name}</h1>
          </div>
          <div className='flex flex-row gap-2 p-2'>
            <h1 className='font-semibold'>Email:</h1>
            <h1>{selectedProfesor.email}</h1>
          </div>
        </div>

        <div className='Col2 mt-6 w-[20em]'>
          <div className='flex flex-row gap-2 p-2'>
            <h1 className='font-semibold'>Apellido:</h1>
            <h1>{selectedProfesor.last_name}</h1>
          </div>
          <div className='flex flex-row gap-2 p-2'>
            <h1 className='font-semibold'>Cumpleaños:</h1>
            <h1>{selectedProfesor?.birthdate}</h1>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DataProf;
