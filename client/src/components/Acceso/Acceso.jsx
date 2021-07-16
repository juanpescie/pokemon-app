import React from 'react'



// import { get_pokemons } from '../redux/actions';
import {Link} from "react-router-dom"
import img from  "../images/pokemon.png"
import style from "./Acceso.module.css"

function Acceso() {   
      

    return (
        <div>
            <h1>Welcome to Pokemon App</h1>
            <Link to="/home">
                <h2 className={style.link}>Click here to open the Pokemons List </h2>
            </Link>
            <div className={style.imagen}>
            <img className={style.img} src={img} alt="" />
            </div>
        </div>
    )
}

export default Acceso
