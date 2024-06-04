// src/Components/Resultados/Resultados.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';

const Resultados: React.FC = () => {
    const searchResults = useSelector((state: RootState) => state.user.searchResults);
    const loading = useSelector((state: RootState) => state.user.loading);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {searchResults.length ? (
                <ul>
                    {searchResults.map((result, index) => (
                        <li key={index}>{result}</li>
                    ))}
                </ul>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default Resultados;
