import { createReducer } from "@reduxjs/toolkit";
import { TOGGLE_FAVORITE } from "../acciones/personajes";
import { Personaje } from "../componentes/personajes/tarjeta-personaje.componente";

interface FavoritosState {
    personajes: Personaje[];
}

const initialState: FavoritosState = {
    personajes: [],
};

const favoritosReducer = createReducer(initialState, (builder) => {
    builder.addCase(TOGGLE_FAVORITE, (state, action) => {
        const index = state.personajes.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
            // Si el personaje ya está en la lista de favoritos, lo eliminamos
            state.personajes.splice(index, 1);
        } else {
            // Si el personaje no está en la lista de favoritos, lo agregamos
            state.personajes.push(action.payload);
        }
    });
});

export default favoritosReducer;