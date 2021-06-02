import React, { useEffect, useState } from 'react'
import {  connect} from 'react-redux'
import { get_pokemons, get_types,sort_by_method } from '../../redux/actions'
import CardsContainer from "../CardsContainer/CardsContainer";
import {Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import style from "./Home.module.css"



function Home({pokemones, types, get_pokemons, get_types, sort_by_method}) {
    
    
    const [method, setMethod] = useState("")
    const [creacion, setCreacion] = useState("")
    
    useEffect(()=>{
        get_pokemons()
        get_types()
    },[])  


    function ordenarPokemons(str){
        console.log("metodo que le pasa a la action: ",str);
        // console.log("entro aca");
  
        sort_by_method(str)
      
    }
    function resetearPokemones(e){
        get_pokemons()
    }


    return (
        <div>
            <div className={style.header}>
                <ul className={style.nav}>
                    <li><p>Filter by type</p>
                        <ul>
                        {types? types.map(tipo=>{
                                return <li onClick={e=> setMethod(tipo)} key={tipo} value={tipo}>{<p>{tipo}</p>}</li>
                            }) :null}
                        </ul>   
                    </li>
                    <li><p>Filter by creation origin</p>
                        <ul  name={style.filter_creacion}>
                            <li onClick={e=>setCreacion("soloapi")} value="soloapi">{<p>Only from API</p>}</li>
                            <li onClick={e=>setCreacion("")} value="">{<p>All</p> }</li>
                            <li onClick={e=>setCreacion("bd")} value="bd">{<p>Only from DataBase</p>}</li>
                        </ul>  
                    </li>
                    <li><p>SORT</p>
                    <ul  name="ordenar">
                        <li onClick={e=> ordenarPokemons("alf_asc")} value="alf_asc">{<p>A -* Z</p>}</li>
                        <li onClick={e=> ordenarPokemons("alf_desc")} value="alf_desc">{<p>Z -* A</p>}</li>
                        <li onClick={e=> ordenarPokemons("fuerza_asc")} value="fuerza_asc">{<p>From lowest to highest strength</p>}</li>
                        <li onClick={e=> ordenarPokemons("fuerza_desc")} value="fuerza_desc">{<p>From highest to lowest strength</p>}</li>
                    </ul>
                </li>
                    


                </ul>
                <Redirect to={creacion ? "/home/filtrado/creacion/" + creacion : "/home" }  />

                <Redirect to={method ? "/home/filtrado/type/" + method : "/home" }  />


            </div>
         
                
                <button className="btn btn-light btn-lg" onClick={resetearPokemones} >Reset Pokemons</button>
            
        
            <CardsContainer/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    pokemones: state.pokemons,
    types: state.types
  });
  
  function mapDispatchToProps(dispatch) {
    return {
        get_pokemons: ()=> {dispatch(get_pokemons())},
        get_types: ()=> {dispatch(get_types())},
        sort_by_method : (string)=>{dispatch(sort_by_method(string))}
  }
}

  export default connect(mapStateToProps, mapDispatchToProps) (Home)

