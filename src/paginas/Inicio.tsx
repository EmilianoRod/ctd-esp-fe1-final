import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacter } from '../acciones/personajes';
import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import React from "react";
import { AppDispatch, RootState } from '../store/store';


/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */

const PaginaInicio = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, error } = useSelector((state: RootState) => state.characters);

    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        dispatch( fetchCharacter(currentPage) );
    }, [dispatch, currentPage]);

    const handleFilter = (filtro: string) => {
        // Aquí puedes implementar la lógica para filtrar los personajes en función del texto ingresado
        // Por ejemplo, podrías llamar a una acción de Redux que aplique el filtro
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="container">
            <div className="actions">
                <h3>Catálogo de Personajes</h3>
                <button className="danger">Test Button</button>
            </div>
            <Filtros onFilter={handleFilter}/>
            <Paginacion
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
            {loading ? (
                <p>Cargando...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <GrillaPersonajes characters={data ?? []} />
            )}
            <Paginacion
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default PaginaInicio;
