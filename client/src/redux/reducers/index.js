import {GET_POKEMONS, GET_DETAILS, GET_BY_NAME,FILTRAR_POR_TIPO, ADD_POKEMON, GET_TYPES, SORT_BY_METHOD} from "../actions"
import sortPokemonsby from "./sort_by_method";

const initial_state = {
    pokemons : [],
    details : {},
    types: [],
    
}

const reducer = (state = initial_state, action) =>{
    switch (action.type) {
        case GET_POKEMONS:
        return {
            ...state,
            pokemons: action.payload
        }    
        ;
        case GET_DETAILS:
            return {
                ...state,
                details: action.payload
            };
        case GET_BY_NAME:
            return {
                ...state,
                pokemons: action.payload
            };
        case FILTRAR_POR_TIPO:
            return {
                ...state,
                pokemons: state.pokemons.filter(poke=> poke.types.includes(action.payload))
            }
        case ADD_POKEMON:
            return state;
            
        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            }

        case SORT_BY_METHOD:
            
            return {
                ...state,
                pokemons: [...sortPokemonsby(state.pokemons, action.payload)]
            }
    
        default:
            return state
    }
}

export default reducer;