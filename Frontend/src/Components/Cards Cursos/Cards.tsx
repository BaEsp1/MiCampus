import React from 'react';
import './Cards.css'; 

const Cards: React.FC = () => {
    const Materias = ['Matemáticas', 'Lengua Castellana', 'Historia', 'Biología'];
    const colors = ['#b12cc3', '#34103e', '#ff6600', '#ffcc45']; 
    const profesor = ['Lucas', 'Pablo', 'Gabriel','Pedro']

    return (
        <div className="cards-container">
            {Materias.map((materia, index) => (
                <div className="card">
                <div key={index}  style={{ backgroundColor: colors[index % colors.length] , height:'5em', borderRadius:'8px 8px 0 0 '}}>
                
                </div>
                    <hr/>
                <div style={{padding: '1em'}}>
                    <h3>{materia}</h3>
                </div>
                    <hr/>
                    <h2>Profesor: </h2>
                    <h2>{profesor[index]}</h2>
                </div>
            ))}
        </div>
    );
}

export default Cards;
