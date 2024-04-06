import { Personaje } from "../componentes/personajes/tarjeta-personaje.componente";
import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCharacter, TOGGLE_FAVORITE } from "../acciones/personajes";

// Acción para agregar favorito
export const addFavorite = createAction<number>("ADD_FAVORITE");

// Acción para eliminar favorito
export const removeFavorite = createAction<number>("REMOVE_FAVORITE");

export const filterCharacters = createAction<string>("FILTER_CHARACTERS");



// Estado inicial
interface CharactersState {
    data: Personaje[] | null;
    originalData: Personaje[] | null;
    loading: boolean;
    error: string | null;
    favorites: number[];
}

const initialState: CharactersState = {
    data: null,
    originalData: null, 
    loading: false,
    error: null,
    favorites: [],
};

// Reducer
const charactersReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchCharacter.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCharacter.fulfilled, (state, action) => {
            state.loading = false;
            if (Array.isArray(action.payload)) {
                state.data = action.payload as Personaje[];
                // Mantén una copia de los datos originales sin filtrar
                state.originalData = action.payload as Personaje[];
            } else {
                // Manejar el caso en el que action.payload no es un array de Personaje
            }
        })

        .addCase(fetchCharacter.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? "An error occurred";
        })
        .addCase(TOGGLE_FAVORITE, (state, action) => {
            const id = action.payload.id; // Ahora action.payload debería ser el id del personaje
            const index = state.favorites.indexOf(id);
            if (index !== -1) {
                state.favorites.splice(index, 1);
                // Actualizar el estado isFavourite del personaje
                state.data = state.data?.map(personaje =>
                    personaje.id === id ? { ...personaje, isFavourite: false } : personaje
                ) ?? null;
            } else {
                state.favorites.push(id);
                // Actualizar el estado isFavourite del personaje
                state.data = state.data?.map(personaje =>
                    personaje.id === id ? { ...personaje, isFavourite: true } : personaje
                ) ?? null;
            }
        })
        .addCase(filterCharacters, (state, action) => {
            // Aplicar el filtro de personajes sobre los datos originales
            const filtro = action.payload.toLowerCase();
            state.data = state.originalData?.filter(personaje => personaje.name.toLowerCase().includes(filtro)) ?? null;
        });

});


export default charactersReducer;