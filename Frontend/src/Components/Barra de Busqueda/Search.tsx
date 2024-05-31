import React, { useState } from 'react';
import './Search.css'; 
import Lupa from "../../Imagenes/Iconos/lupa.png"

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        // logica

    };

    return (
        <div className="search-bar-container">
            <button onClick={handleSearch} className="search-button"><img src={Lupa} alt="Lupa" style={{width:'24px', opacity: '47%'}}/></button>
            <input
                type="search"
                value={query}
                onChange={handleInputChange}
                placeholder="Buscar materia"
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;
