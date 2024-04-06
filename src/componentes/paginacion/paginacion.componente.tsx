import './paginacion.css';
import React from 'react';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */


interface PaginacionProps {
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Paginacion: React.FC<PaginacionProps> = ({ currentPage, onPageChange }) => {

    const handlePrevClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        onPageChange(currentPage + 1);
    };

    return (
        <div className="paginacion">
            <button disabled={currentPage === 1} onClick={handlePrevClick} className="primary">
                Anterior
            </button>
            <span>{`Página ${currentPage}`}</span>
            <button onClick={handleNextClick} className="primary">
                Siguiente
            </button>
        </div>
    );
};

export default Paginacion;