import React from 'react';

interface ProfesorProps {
  profesor: string;
  materia: string;
}

// interface ProfesorData {
//     profesor: string;
//     materia: string;
//   }

const DataProf: React.FC<ProfesorProps> = ({ profesor, materia }) => {
    const MayusName = profesor.toLocaleUpperCase();

    const data = 
        {name:"Julio" , lastName:"Lopez" , email:"hotmal@hotmal.com"}

  return (
    <div >
        {/* Nombre y Apellido / Materia*/}
        <div>
            <h1 className='flex items-center justify-center text-2xl font-semibold'>{MayusName}</h1>
            <h2 className='flex items-center justify-center font-400'>Profesor@ de {materia}</h2>
        </div>
        {/* Info */}
        <div className='flex flex-row justify-center gap-10'>
            <div className='Col1 mt-6 w-[20em]' >
            
                <div className='flex flex-row gap-2 p-2'>
                    <h1 className='font-semibold'>Nombre:</h1>
                    <h1>{data?.name}</h1>
                </div>
                <div className='flex flex-row gap-2 p-2'>
                    <h1 className='font-semibold'>Email:</h1>
                    <h1>{data?.email}</h1>
                </div>
            </div>

            <div className='Col2 mt-6 w-[20em]'>

                <div className='flex flex-row gap-2 p-2'>
                    <h1 className='font-semibold'>Apellido:</h1>
                    <h1>{data?.lastName}</h1>
                </div>
            </div>
        </div>
    </div>

  );
}

export default DataProf;
