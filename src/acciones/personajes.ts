import { Personaje } from "../componentes/personajes/tarjeta-personaje.componente";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";



// Definir el tipo de la acción asíncrona
type FetchCharacterPayload = {
    results: Personaje[];
};


export const fetchCharacter = createAsyncThunk<FetchCharacterPayload>(
    "characters/fetchCharacters",
    async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        return data.results;
    }
);


export const TOGGLE_FAVORITE = createAction<Personaje>("TOGGLE_FAVORITE");
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

interface AddFavoriteAction {
    type: typeof ADD_FAVORITE;
    payload: Personaje;
}

interface RemoveFavoriteAction {
    type: typeof REMOVE_FAVORITE;
    payload: number;
}

export type CharacterAction =
    | AddFavoriteAction
    | RemoveFavoriteAction;

    export const addFavorite = (character: Personaje) => ({
        type: ADD_FAVORITE,
        payload: character
    });

export const removeFavorite = (id: number) => ({
    type: REMOVE_FAVORITE,
    payload: id,
});
