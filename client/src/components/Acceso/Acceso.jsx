import React from 'react'



// import { get_pokemons } from '../redux/actions';
import {Link} from "react-router-dom"
import img from  "../images/pokemon.png"
import style from "./Acceso.module.css"

function Acceso() {   
      

    return (
        <div>
            <h1>Welcome to Pokemons App</h1>
            <h2><Link to="/home">Click here to open the Pokemons List </Link></h2>
            <div className={style.imagen}>
            <img className={style.img} src={img} alt="" />
            </div>
        </div>
    )
}

export default Acceso
