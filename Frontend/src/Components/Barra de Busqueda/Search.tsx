import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMaterias } from '../../Redux/Actions/userActions';
import { RootState } from '../../Redux/store';
import { AppDispatch } from '../../Redux/store';
import './Search.css'; 
import Lupa from "../../Imagenes/Iconos/lupa.png";

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const materias = useSelector((state: RootState) => state.user.materias ?? []);
    const searchResults = useSelector((state: RootState) => state.user.searchResults)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        const results = materias?.filter(materia =>
            materia.name.toLowerCase().includes(query.toLowerCase())
        );
        dispatch(searchMaterias(results));
    };
    
    useEffect(()=>{
        if (searchResults !== null) {
            const timer = setTimeout(() => {
                dispatch(searchMaterias(null));
            }, 50000);
            return () => clearTimeout(timer);
        }
    }, [searchResults, dispatch]);

    return (
        <div className="search-bar-container">
            <button onClick={handleSearch} className="search-button">
                <img src={Lupa} alt="Lupa" style={{width:'24px', opacity: '47%'}}/>
            </button>
            <input
                type="search"
                value={query}
                onChange={handleInputChange}
                placeholder="Buscar materias"
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;
