import "./Detalle.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import React from "react";


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

const PaginaDetalle = () => {
    const dispatch = useDispatch();
    const { isFavourite } = useSelector((state: RootState) => ({
        isFavourite: state.characters.favorites.includes(1), // Aquí deberías obtener el id del personaje actualmente mostrado en detalle
    }));

    const handleToggleFavorite = () => {
        // Aquí deberías despachar la acción para marcar/desmarcar como favorito al personaje actual
        // Por ejemplo: dispatch(TOGGLE_FAVORITE(1)); // Donde 1 es el id del personaje actualmente mostrado en detalle
    };

    return (
        <div className="container">
            <h3>Rick Sanchez</h3>
            <div className={"detalle"}>
                <div className={"detalle-header"}>
                    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez" />
                    <div className={"detalle-header-texto"}>
                        <p>Rick Sanchez</p>
                        <p>Planeta: Earth</p>
                        <p>Genero: Male</p>
                    </div>
                    <BotonFavorito esFavorito={isFavourite} onClick={handleToggleFavorite} />
                </div>
            </div>
            <h4>Lista de episodios donde apareció el personaje</h4>
            <div className={"episodios-grilla"}>
                <TarjetaEpisodio />
                <TarjetaEpisodio />
                <TarjetaEpisodio />
            </div>
        </div>
    );
}


export default PaginaDetalle