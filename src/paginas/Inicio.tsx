import { useEffect } from 'react';
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
    const { data, loading, error } = useSelector((state: RootState) => state.characters); // Tipa state como RootState

    useEffect(() => {
        dispatch( fetchCharacter() );
    }, [dispatch]);

    const handleFilter = (filtro: string) => {
        // Aquí puedes implementar la lógica para filtrar los personajes en función del texto ingresado
        // Por ejemplo, podrías llamar a una acción de Redux que aplique el filtro
    };


    return (
        <div className="container">
            <div className="actions">
                <h3>Catálogo de Personajes</h3>
                <button className="danger">Test Button</button>
            </div>
            <Filtros onFilter={handleFilter}/>
            <Paginacion />
            {loading ? (
                <p>Cargando...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <GrillaPersonajes characters={data ?? []} />
            )}
            <Paginacion />
        </div>
    );
}

export default PaginaInicio;
