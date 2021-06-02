// import axios from 'axios';
import React, { useEffect, useState } from 'react'

// import {get_pokemons} from "../redux/actions"
import { connect} from "react-redux";
import {  get_pokemons, get_types, sort_by_method} from '../../redux/actions';
import PokeCard from '../PokeCard/PokeCard';

import style from "./CardsContainer.module.css"


function CardsContainer({pokemones}) {
    const POKEMONES_POR_PAGINA = 12;
    const NUMERO_DE_POKEMONES = pokemones.length;
    
    const [nuevospokemones, setNuevosPokemones] = useState([])

    // paginado
    const [paginaActual, setPaginaActual] = useState(1)
    const [pokemonsporpagina, setpokemonesporpagina] = useState(POKEMONES_POR_PAGINA)
    


    useEffect(()=>{
         setNuevosPokemones(pokemones.filter(poke=> typeof poke === "object" && Object.keys(poke).length !== 0 ))
    },[])
   

    useEffect(()=>{
        setNuevosPokemones(pokemones)
        
    }, [pokemones])
   
   
  


    var pages = [];
    for (let i = 1; i <= Math.ceil(NUMERO_DE_POKEMONES / pokemonsporpagina) ; i++) {
        pages.push(i);    
    }
    // este va a ser el indice de las paginas van a aparecer para clickear 
    // y ver los pokemones que hay 
    
    
    const indiceultitem = paginaActual * pokemonsporpagina
    const indiceprimeritem = indiceultitem - pokemonsporpagina;
    // lo que se va a mostrar va  aser los pokemones de la pagina actual que vana  aser 
    // desde el primer item de la pagina hasta ultimo item de la pagina 
    const pokemonesMostrados = nuevospokemones.slice(indiceprimeritem, indiceultitem)
    
    const indicespaginas = pages.map(numero=>{
        return (
            <li 
            key={numero} 
            className={paginaActual === numero ? "active": null} 
            id={numero}
            onClick={e=>{setPaginaActual(Number(e.target.id))}}
            >
                {numero}
            </li>
        )
    })

    
    

    return (pokemones.length >= 1 ?
        <div>
        <div className={style.container_principal}>
            
            <h2 className={style.titulo}>POKEMONS LIST</h2>
            <ul className="paginador">{indicespaginas}</ul>
            <div className="contenedor" >
            {pokemonesMostrados.map(el => {
                return (
            <PokeCard name={el.name} attack={el.attack} key={el.id} id={el.id} img={el.img? el.img :null} types={el.types} />)}
             )}
            </div>
        </div>
        </div>
        : <h1>Loading..</h1>
    )
}
const mapStateToProps = (state) => ({
    pokemones: state.pokemons,
  });
  
  function mapDispatchToProps(dispatch) {
    return {
        get_pokemons: ()=> {dispatch(get_pokemons())},
        get_types: ()=> {dispatch(get_types())},
        sort_by_method : (string)=>{dispatch(sort_by_method(string))}
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps) (CardsContainer)
