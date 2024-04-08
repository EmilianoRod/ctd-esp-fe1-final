import { configureStore, combineReducers} from "@reduxjs/toolkit";
import charactersReducer from "../reducers/personajesReducer";
// import favoritosReducer from "../reducers/favoritosReducer";



const rootReducer = combineReducers({
    characters: charactersReducer,
    // favoritos: favoritosReducer, 

});


const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
        characters: {
            data: null,
            originalData: null, 
            loading: false,
            error: null,
            favorites: [],
            filtro: ''
        },
    },
});

export type RootState = ReturnType<typeof store.getState>; // Define el tipo RootState
export type AppDispatch = typeof store.dispatch;

export default store;