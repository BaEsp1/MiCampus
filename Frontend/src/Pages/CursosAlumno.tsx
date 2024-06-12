import React from 'react';
import Cards from '../Components/Cards Alls Cursos/Cards';

const materias: React.FC = () => {
    return (
        <div className="Materias flex flex-row">
            <div className="Col1" style={{ width: '275px' }}>
            </div>

            <div className="Col2" style={{margin:'2em', width:'fit-content'}}>
            <h1 className="p-4 font-semibold text-3xl justify-center flex"> Materias</h1>
            <Cards></Cards>
            </div>
        </div>
    );
}

export default materias;
