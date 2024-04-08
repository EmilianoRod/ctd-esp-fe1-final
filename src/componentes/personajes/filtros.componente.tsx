import React from 'react';
import './filtros.css';
import { useDispatch, useSelector} from 'react-redux';
import { filterCharacters } from '../../reducers/personajesReducer';
import { RootState } from '../../store/store';

const Filtros = ({ onFilter }: { onFilter: (filtro: string) => void }) => {


    const dispatch = useDispatch();
    const filtro = useSelector((state: RootState) => state.characters.filtro); // Obtener el filtro del estado global

    // const [filtro, setFiltro] = useState('');

    // Función para manejar cambios en el input de filtro
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const textoFiltro = event.target.value;
        // Disparar la acción de filtro solo si hay texto en el input
        // if (textoFiltro.trim() === '') {
        //     onFilter(''); // Restablecer el estado inicial
        // }
        dispatch(filterCharacters(textoFiltro));

    };

    // Función para manejar el click en el botón Limpiar filtros
    const handleLimpiarFiltros = () => {
        // setFiltro('');
        dispatch(filterCharacters(''));
    };

    return (
        <div className="filtros">
            <label htmlFor="nombre">Filtrar por nombre:</label>
            <input
                type="text"
                placeholder="Rick, Morty, Beth, Alien, ...etc"
                name="nombre"
                value={filtro}
                onChange={handleInputChange}
            />
            <button onClick={handleLimpiarFiltros}>Limpiar filtros</button>
        </div>
    );
};

export default Filtros;
