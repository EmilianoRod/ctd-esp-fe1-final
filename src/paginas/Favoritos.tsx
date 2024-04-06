import React from 'react';
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_FAVORITE } from '../acciones/personajes';
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

    // useEffect(() => {
    //     // Aquí puedes despachar la acción para cargar personajes marcados como favoritos
    //     // Por ejemplo, dispatch(fetchFavoriteCharacters());
    // }, [dispatch]);

    return (
        <div className="container">
            <div className="actions">
                <h3>Personajes Favoritos</h3>
                <button className="danger">Test Button</button>
            </div>
            {loading ? (
                <p>Cargando...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <GrillaPersonajes
                characters={data ? data.filter(character => character.id !== undefined && favorites.includes(character.id)) : []}
                />
            )}
        </div>
    );
}


export default PaginaFavoritos