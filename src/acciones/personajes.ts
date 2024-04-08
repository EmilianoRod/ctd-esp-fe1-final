import { Personaje } from "../componentes/personajes/tarjeta-personaje.componente";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";


// Defino el tipo de la acción asíncrona
type FetchCharacterPayload = {
    results: Personaje[];
};

/**
 * Función asincrónica para traer los personajes desede la API
 *
 * @async
 * @function fetchCharacter
 * @param {number} page - El número de página de los personajes que se van a traer
 * @param {function} getState - Función para obtener el estado actual de Redux
 * @returns {Promise<FetchCharacterPayload>} Una promesa que cuando se reuelve se traen los personajes 
 */

export const fetchCharacter = createAsyncThunk<FetchCharacterPayload, number>(
    "characters/fetchCharacters",
    async (page: number, { getState }) => {
        const state = getState() as RootState;
        const filtro = state.characters.filtro;
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${filtro}`);
        const data = await response.json();
        return data.results;
    }
);


/**
 * Acción para alternar el estado de favorito de un personaje
 * @type {ActionCreatorWithPayload<Personaje, string>}
 */
export const CAMBIAR_FAVORITO = createAction<Personaje>("CAMBIAR_FAVORITO");


/**
 * Acción para limpiar todos los personajes de la lista de favoritos.
 * @type {ActionCreatorWithoutPayload<string>}
 */
export const CLEAR_FAVORITES = createAction("CLEAR_FAVORITES");

