import React from 'react';
import { useParams , Link } from 'react-router-dom';

const Calificaciones: React.FC = () => {
  const { profesor, materia } = useParams<{ profesor: string; materia: string }>();
  return <div>
  <div className="Calificaciones flex flex-row">
      <div className="Col1" style={{ width: '275px' }}>
      </div>

      <div className="Col2" style={{margin:'2em', width:'78em'}}>
      <h1 className='flex p-4 font-semibold text-3xl items-center'>Calificaciones</h1>
      <hr/>
      <div className='flex flex-row gap-[30em] items-center'>
      <h2>Materia: {materia}</h2>
      <h2>Profesor: <Link to={`/profesor/${profesor}`}>{profesor}</Link></h2>
      </div>
      <hr/>
      </div>
  </div>
</div>;
};

export default Calificaciones;