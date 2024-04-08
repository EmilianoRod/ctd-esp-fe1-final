// import { createReducer, createAction } from "@reduxjs/toolkit";
// import { CAMBIAR_FAVORITO, CLEAR_FAVORITES} from "../acciones/personajes";
// import { Personaje } from "../componentes/personajes/tarjeta-personaje.componente";

export {};
// interface FavoritosState {
//     personajes: Personaje[];
// }

// const initialState: FavoritosState = {
//     personajes: [],
// };



// const favoritosReducer = createReducer(initialState, (builder) => {
//     builder
//     .addCase(CAMBIAR_FAVORITO, (state, action) => {
//         const index = state.personajes.findIndex((p) => p.id === action.payload.id);
//         if (index !== -1) {
//             // Si el personaje ya está en la lista de favoritos, lo eliminamos
//             state.personajes.splice(index, 1);
//         } else {
//             // Si el personaje no está en la lista de favoritos, lo agregamos
//             state.personajes.push(action.payload);
//         }
//     })
//     .addCase(CLEAR_FAVORITES, (state, action) => {
//         console.log("CLEAR_FAVORITES action captured");
//         // Limpiar todos los personajes favoritos utilizando el método filter
//         // state.personajes = state.personajes.filter(() => false)
        
//         state.personajes = [];   
//         console.log("Favorites cleared:", state.personajes);
//     });
// });

// export default favoritosReducer;

