import "./Detalle.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { CAMBIAR_FAVORITO } from "../acciones/personajes";
import React from "react";
import { Personaje } from '../componentes/personajes/tarjeta-personaje.componente';



/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */

interface Character {
    id: number;
    name: string;
    image: string;
    origin: {
        name: string;
    };
    gender: string;
    episode: string[];
}


const PaginaDetalle = ({ character   } : {character : Character}) => {
    const dispatch = useDispatch();
    

    const { data, loading, error, isFavourite } = useSelector((state: RootState) => ({
        data: state.characters.data,
        loading: state.characters.loading,
        error: state.characters.error,
        isFavourite: state.characters.favorites.includes(1)
    }));

    /**
     * Maneja el cambio de estado del personaje favorito.
     * Despacha la acción CAMBIAR_FAVORITO para cambiar el estado del personaje favorito.
     * 
     * @returns {void}
     */
    const handleToggleFavorite = () => {
        dispatch(CAMBIAR_FAVORITO({ id: character.id, name: character.name, image: character.image, isFavourite }));
    };

    return (
        <div className="container">
            <h3>{character.name}</h3>
            <div className={"detalle"}>
                <div className={"detalle-header"}>
                    <img src={character.image} alt={character.name} />
                    <div className={"detalle-header-texto"}>
                        <p>{character.name}</p>
                        <p>Planeta: {character.origin.name}</p>
                        <p>Genero: {character.gender}</p>
                    </div>
                    <BotonFavorito esFavorito={isFavourite} onClick={handleToggleFavorite} />
                </div>
            </div>
            <h4>Lista de episodios donde apareció el personaje</h4>
            <div className={"episodios-grilla"}>
                {character.episode.map((episode, index) => (
                    <TarjetaEpisodio key={index}  />
                ))}
            </div>
        </div>
    );
}


export default PaginaDetalle;