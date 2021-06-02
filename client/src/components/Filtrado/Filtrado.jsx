import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {get_pokemons} from '../../redux/actions';
import PokeCard from '../PokeCard/PokeCard';

const SOLO_API = "TRAIDOS DE LA API"
const CREADOS = "CREADOS POR EL USUARIO"

function Filtrado(props) {
    const {metodo, tipo} = props.match.params

    const [pokemonesFiltrados, setPokemonesFiltrados] = useState([])
// el metodo es o type o creacion 

    console.log("props filtrado", props);

    useEffect(()=>{
        if(metodo==="type"){
        setPokemonesFiltrados(props.pokemones.filter(pokemon=> pokemon.types.includes(tipo)))
        }
        else{
            if(tipo === "soloapi") setPokemonesFiltrados(props.pokemones.filter(pokemon=> typeof pokemon.id === "number"))
            else{
                setPokemonesFiltrados(props.pokemones.filter(pokemon=> typeof pokemon.id === "string"))
            }
        }

    },[])
    console.log("filtrados",pokemonesFiltrados);
    console.log(props.pokemones);

    return (
        pokemonesFiltrados.length > 0 ? 
        <div className="">
            <h1>FILTRADOS POR {metodo==="type"? tipo.toUpperCase() : tipo === "soloapi"? SOLO_API: CREADOS  }</h1>
            {pokemonesFiltrados.map(el=>{
                return <PokeCard name={el.name} attack={el.attack} key={el.id} id={el.id} img={el.img? el.img : null} types={el.types} />
            })}
        </div>
        : <h1>NO HAY POKEMONES DE {metodo=== "type"?  "TIPO " + tipo.toUpperCase() : "LA BASE DE DATOS" }</h1>
    )
}

const mapStateToProps = (state) => ({
    pokemones: state.pokemons,
  });
  
  function mapDispatchToProps(dispatch) {
    return {
        get_pokemons: ()=> {dispatch(get_pokemons())},
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps) (Filtrado)
