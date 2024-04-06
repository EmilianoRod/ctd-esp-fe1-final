import React from 'react';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useDispatch } from 'react-redux';
import { TOGGLE_FAVORITE } from '../../acciones/personajes';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */

export interface Personaje {
    id: number;
    name: string;
    image: string;
    isFavourite: boolean;
}


const TarjetaPersonaje = ({ id, image, name, isFavourite}: Personaje) => {

    const dispatch = useDispatch();
    const handleToggleFavorite = () => {
        dispatch(TOGGLE_FAVORITE({ id, name, image, isFavourite}));
    };


    return (
        <div className="tarjeta-personaje">
            <img src={image} alt="Rick Sanchez" />
            <div className="tarjeta-personaje-body">
                <span>{name}</span>
                <BotonFavorito esFavorito={isFavourite} onClick={handleToggleFavorite} />
            </div>
        </div>
    )
}

export default TarjetaPersonaje;