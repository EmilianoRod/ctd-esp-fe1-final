import React from 'react';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { Personaje } from './tarjeta-personaje.componente';


/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */

interface Props {
    characters: Personaje[];
}

const GrillaPersonajes = ({ characters } : Props) => {


    return (
        <div className="grilla-personajes">
            {characters.map(character => (
                <TarjetaPersonaje
                    id={character.id}
                    key={character.id}
                    name={character.name}
                    image={character.image}
                    isFavourite={character.isFavourite}
                    
                />
            ))}
        </div>
    );
}

export default GrillaPersonajes;