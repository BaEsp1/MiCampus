import React from 'react';
import Fachada from '../Imagenes/Fachada Escuela/Fachada.jpeg';
import Carousel from '../Components/Carrusel - LP/Carrusel';

const LandingPage: React.FC = () => {
    return (
        <div style={{ 
            backgroundImage: `url(${Fachada})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100vw',
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '2.4em',
            overflow: 'hidden'
        }}>
            <div className='Titulo' style={{ margin: '0 auto', textAlign: 'center', paddingTop: '2em' }}>
                <h1 style={{ fontSize: '3em', fontWeight: 'bold', color: 'white' }}>Bienvenidos a Mi Campus</h1>
                <h2 style={{ fontSize: '1.5em', color: 'white' }}>Facilitando tu experiencia educativa</h2>
            </div>

            <div className='CarruselLP' style={{ width: '75%', margin: '0 auto' }}>
                <Carousel />
            </div>
            <a href='/login'>
                <button 
                    style={{
                        backgroundColor: 'White',
                        color: 'Black',
                        padding: '0.5em 3em',
                        border: 'none',
                        borderRadius: '5px',
                        position: 'absolute',
                        right: '5em', 
                        bottom: '3em',
                        fontWeight: '600'
                    }}
                >
                    INICIA SESIÓN
                </button>
            </a>
        </div>
    );
}

export default LandingPage;
