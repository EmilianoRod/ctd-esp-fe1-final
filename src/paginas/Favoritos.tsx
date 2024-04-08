import React from 'react';
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_FAVORITES } from '../acciones/personajes';
import { RootState } from '../store/store';


/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */

const PaginaFavoritos = () => {
    const dispatch = useDispatch();

    const { data, loading, error, favorites } = useSelector((state: RootState) => ({
        data: state.characters.data,
        loading: state.characters.loading,
        error: state.characters.error,
        favorites: state.characters.favorites,
    }));


    /**
 * Maneja la eliminación de todos los personajes marcados como favoritos
 * Despacha la acción CLEAR_FAVORITES para limpiar la lista de favoritos en el estado de reduxx
 * 
 * @returns {void}
 */
    const handleClearFavorites = () : void => {
        dispatch(CLEAR_FAVORITES());        
    };




    return (
        <div className="container">
            <div className="actions">
                <h3>Personajes Favoritos</h3>
                <button className="danger" onClick={handleClearFavorites}>Eliminar Todos</button>
            </div>
            {loading ? (
                <p>Cargando...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <GrillaPersonajes
                characters={data ? data.filter(character => favorites.includes(character.id)) : []}
                />
            )}
        </div>
    );
}


export default PaginaFavoritos