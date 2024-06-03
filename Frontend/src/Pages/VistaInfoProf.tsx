import React from 'react';
import { useParams } from 'react-router-dom';

const VistaPerfilProfesor: React.FC = () => {
  const { profesor } = useParams<{ profesor: string }>();
  return <div>
  <div className="Asistencias flex flex-row">
      <div className="Col1" style={{ width: '275px' }}>
      </div>

      <div className="Col2" style={{margin:'2em', width:'78em'}}>
      <h1 className='flex p-4 font-semibold text-3xl items-center'>Información de contacto</h1>
      <hr/>
      <div className='flex flex-row gap-[30em] items-center'>
      <h2>Profesor: {profesor}</h2>
      </div>
      <hr/>
      </div>
  </div>
</div>;

};

export default VistaPerfilProfesor;