import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMaterias } from '../../Redux/Actions/searchActions';
import { RootState, AppDispatch } from '../../Redux/store';
import './Search.css'; 
import Lupa from "../../Imagenes/Iconos/lupa.png";

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const searchResults = useSelector((state: RootState) => state.user.searchResults);
    console.log(searchResults)
    // const loading = useSelector((state: RootState) => state.user.loading);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        dispatch(searchMaterias(query));
    };

    return (
        <div className="search-bar-container">
            <button onClick={handleSearch} className="search-button">
                <img src={Lupa} alt="Lupa" style={{width:'24px', opacity: '47%'}}/>
            </button>
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
