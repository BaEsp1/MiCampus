import React from 'react';
import SearchBar from '../Components/Barra de Busqueda/Search';
import Cards from '../Components/Cards Cursos/Cards';

const DashboardUser: React.FC = () => {
    return (
        <>
        <hr style={{ borderColor: '#979797' }}/>
    <div className='Dash' style={{display:'flex', flexDirection:'row'}}>

        <div className='Col1' style={{ width:'275px'}}>
        </div>
        
        <div className='Col2' style={{margin: '2em', gap: '2em', display: 'flex', flexDirection: 'column' }}>
            <div className="Bienvenida" >
                <h1 style={{ fontSize: '1.5em', color: 'black' }}>Bienvenido: @Alumno</h1>
            </div>

            <div className='Buscador'>
            <SearchBar/>
            </div>
            <div className='Cursos'>
            <h1 style={{ fontSize: '1.2em', color: 'grey' }} >Cursos accedido recientemente:</h1>
            
            <Cards/>
            
            </div>
        </div>

    </div>
            </>
    );
}

export default DashboardUser