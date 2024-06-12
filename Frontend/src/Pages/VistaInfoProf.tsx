import React from 'react';
import { useParams } from 'react-router-dom';
import InitialProf from '../Components/Vista Info Prof/InitialProf';
import DataProf from '../Components/Vista Info Prof/DataProf';

const VistaPerfilProfesor: React.FC = () => {
  const { profesor } = useParams<{ profesor: string }>();
  const { materia } = useParams<{ materia: string }>();
  
  return (
    <div>
      <div className="Asistencias flex flex-row">
        <div className="Col1" style={{ width: '275px' }}></div>
        <div className="Col2" style={{ margin: '2em', width: '78em' }}>
          <div className='flex flex-row gap-[33em]'>
          <h1 className='flex p-2 font-semibold text-3xl items-center'>Información de contacto</h1>
            <div className='flex gap-2 flex-row items-center m-2'>
              <h1>Profesor@:</h1>
              <h1 className='font-semibold'>{profesor}</h1>
            </div>
          </div>
          {/* Presentacion */}
          <div>
            <h1 className='ml-12 p-2 font-semibold' >Presentación:</h1>
            <video src=" " className='w-[40em] flex justify-center items-center mx-auto p-2'></video>
            {/* <img  src="" width="360" height="640" alt="Video failed "/> */}
          </div>
          { profesor && materia ? <>
          <div  className='flex flex-row'style={{justifyContent: 'space-evenly'}}>
            <hr style={{position:'relative', top:'4em' ,border: 'solid 0.05em #E7E7E9', width: '38em'}}/>
            <InitialProf profesor={profesor} /> 
          <hr style={{position:'relative', top:'4em' ,border: 'solid 0.05em #E7E7E9', width: '38em'}}/>
          </div>
          <DataProf profesor={profesor} materia={materia} /></>
          : <h1> Upps... Algo salió mal , intenta nuevamente</h1>}
        </div>
      </div>
    </div>
  );
};

export default VistaPerfilProfesor;
