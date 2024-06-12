import React from 'react';
import { useParams , Link } from 'react-router-dom';
import Notas from '../Components/Vista de notar - User/calificaciones';

const Calificaciones: React.FC = () => {
  const { profesor } = useParams<{ profesor: string }>();
  const { materia } = useParams<{ materia: string }>();

  return <div>
  <div className="Calificaciones flex flex-row">
      <div className="Col1" style={{ width: '275px' }}>
      </div>

      <div className="Col2" style={{margin:'2em', width:'78em'}}>
        <h1 className='flex p-4 font-semibold text-3xl items-center'>Calificaciones</h1>
        <hr/>
        <div className='flex flex-row gap-[30em] items-center'>
          <div className='flex flex-row gap-2 p-2'>
          <h2 className='font-semibold ml-5'>Materia:</h2>
          <h2>{materia}</h2>

          </div>
          <div className='flex flex-row gap-2 p-2'>
          <h2 className='font-semibold'>Profesor: </h2>
          <Link to={`/profesor/${profesor}/${materia}`}>
              <h2>{profesor}</h2>
            </Link>
          </div>
        </div>

        { profesor && materia ? <>
          <Notas profesor={profesor} materia={materia}/> 
          </> 
          : <h1> Upps... Algo salió mal , intenta nuevamente</h1>}
  
      </div>
  </div>
</div>;
};

export default Calificaciones;