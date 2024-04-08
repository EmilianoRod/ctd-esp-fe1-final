import { Personaje } from "../componentes/personajes/tarjeta-personaje.componente";
import { createReducer, createAction } from "@reduxjs/toolkit";
import { fetchCharacter, CAMBIAR_FAVORITO, CLEAR_FAVORITES } from "../acciones/personajes";

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
    filtro: string;
}

const initialState: CharactersState = {
    data: null,
    originalData: null,
    loading: false,
    error: null,
    favorites: [],
    filtro: '',
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

                state.data = action.payload.map(personaje => ({
                    ...personaje,
                    isFavourite: state.favorites.includes(personaje.id)
                })) as Personaje[];

                // Copia de los datos originales sin filtrar
                state.originalData = action.payload as Personaje[];

            }
        })
        .addCase(fetchCharacter.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? "Errorrr";
        })
        .addCase(CAMBIAR_FAVORITO, (state, action) => {
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
            // Si el filtro es vacío, restaurar los datos originales
            if (action.payload === '') {
                state.filtro = ''; // Restablecer el filtro
                state.data = state.originalData;
            } else {
                // Aplicar el filtro de personajes sobre los datos originales
                const filtro = action.payload.toLowerCase();
                state.filtro = action.payload.toLowerCase();
                state.data = state.originalData?.filter(personaje => personaje.name.toLowerCase().includes(filtro)) ?? null;
            }
        })
        .addCase(CLEAR_FAVORITES, (state, action) => {
            console.log("CLEAR_FAVORITES action captured");
            // Limpiar todos los personajes favoritos utilizando el método filter
            // state.personajes = state.personajes.filter(() => false)

            state.favorites = [];
            console.log("Favorites cleared:", state.favorites);
        });
});


export default charactersReducer;