import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearDataProf } from '../../Redux/Reducers/userReducer'; 
import { fetchProfesor } from '../../Redux/Actions/userActions';
import { RootState, AppDispatch } from '../../Redux/store';

interface ProfesorProps {
  profesor: string;
  materia: string;
}

const DataProf: React.FC<ProfesorProps> = ({ profesor, materia }) => {
  const dispatch = useDispatch<AppDispatch>();
  const profesorData = useSelector((state: RootState) => state.user.dataProf);
  const loading = useSelector((state: RootState) => state.user.loading);

  useEffect(() => {
    dispatch(fetchProfesor(profesor)); 

    return () => {
      dispatch(clearDataProf());
    };
  }, [dispatch, profesor]);

  if (loading || !profesorData) {
    return <div>Loading...</div>;
  }

  const MayusName = profesor.toLocaleUpperCase();

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
            <h1>{profesorData.name}</h1>
          </div>
          <div className='flex flex-row gap-2 p-2'>
            <h1 className='font-semibold'>Email:</h1>
            <h1>{profesorData.email}</h1>
          </div>
        </div>
        <div className='Col2 mt-6 w-[20em]'>
          <div className='flex flex-row gap-2 p-2'>
            <h1 className='font-semibold'>Apellido:</h1>
            <h1>{profesorData.lastName}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProf;
