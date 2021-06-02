import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_DETAILS = "GET_DETAILS";
export const GET_BY_NAME = "GET_BY_NAME";
export const SORT_BY_METHOD = "SORT_BY_METHOD";
export const ADD_POKEMON = "ADD_POKEMON"
export const GET_TYPES = "GET_TYPES";
export const SIGUIENTE_PAGINA = "SIGUIENTE_PAGINA";
export const FILTRAR_POR_TIPO = "FILTRAR_POR_TIPO"

export const get_pokemons = ()=>{
    return async (dispatch)=>{
        
        const request_back_pokemons = await axios.get("http://localhost:3001/pokemons")
        .catch(()=> "en estos momentos no anda la api de pokemon");
        const array_pokemons = request_back_pokemons.data;

        return dispatch( {
            type: GET_POKEMONS,
            payload: array_pokemons
        }
        )
    }
}
export const get_details = (id)=>{

        return async (dispatch)=>{
        const {data} = await axios.get("http://localhost:3001/pokemons/" + id);
        
        
        
        dispatch ({
            type: GET_DETAILS,
            payload: data

        })
    }
}

export const getByName = (name)=>{

    return async (dispatch)=>{
        try {
            const req_name_back = await axios.get("http://localhost:3001/pokemons?name=" + name )
    // .catch(err=> err);
    if(req_name_back.data){
        const pokemon_details = req_name_back.data;
        return dispatch({
            type: GET_BY_NAME,
            payload: pokemon_details
        })
    }
            
        } catch (error) {
            if(error.response?.status===404 ){
                alert("no se encontro pokemon con este nombre")
            }
            return dispatch({
                type: GET_BY_NAME,
                payload: []
            })
        }
    
    
    }
}
export const get_types = ()=>{
    return async (dispatch)=>{
            const req_types_back = await axios.get("http://localhost:3001/types")
            .catch(err=> err);
            const arreglo_types = req_types_back.data;
            return dispatch({
                type: GET_TYPES,
                payload: arreglo_types
            })
            
    }
}

export const filter_type = (type)=>{
   
    return (dispatch)=>{
        console.log(type)
        return dispatch({
            type: FILTRAR_POR_TIPO,
            payload: type
        })
    }
}


export const add_pokemon = ({name, health, attack, defense, speed, weight, height, type1, type2})=>{
    return async (dispatch)=>{
        try {
            console.log("entro al try")
            await axios.post("http://localhost:3001/pokemons/",
        {
        
        name,
        attack,
        defense,
        health,
        speed,
        weight,
        height,
        type1,
        type2

        })

        dispatch({
            type:ADD_POKEMON
        })
        } catch (error) {
            if(error.response?.status===400 ){
                alert("no se creo el pokemon")
            }
            return dispatch({
                type: ADD_POKEMON,
                
            })
        }
        
    }
}

export const sort_by_method = (method)=>{
    return (dispatch)=>{
        return dispatch({
            type: SORT_BY_METHOD,
            payload: method
        })
    }
}



