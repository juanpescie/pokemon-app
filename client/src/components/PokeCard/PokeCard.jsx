import React from 'react';
import {Link} from "react-router-dom";
import imagen_unk from "../images/unknown_criature.jpg"
import style from "./PokeCard.module.css";


function PokeCard({id,img, name,types, attack}){
    

    return (
        <Link to={"/details/" + id}>
        <div key={id} className={style.carta_pokemon}>
            <h1 className={style.name_pokemon}>{name.toUpperCase()}</h1>         
            <p className={style.fuerza}>Strength: {attack}</p>
   
            
            <img className={style.imagen} src={img ? img : imagen_unk} alt="" />
             
           
            {types ?  
            <div className={style.tipos}>    
                {types.map(t=> <p className={`${style.tipo} ${style[t]}`} key={t}>{t}</p>)} 
            </div>
            
        :null    
        }

        </div>
        </Link>
    )
}

export default PokeCard
