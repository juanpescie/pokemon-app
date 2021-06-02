
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_details } from '../../redux/actions'
import imagen from  "../images/unknown_criature.jpg"
import "bootstrap/dist/css/bootstrap.min.css"
import style from "./Detalles.module.css"

function Detalles(props) {
    const id_pokemon = props.match.params.id 
    // ver history
    

    
    const dispatch = useDispatch()
    function despachar_detalles(id){
         dispatch(get_details(id))
    }
    useEffect(() => {
        despachar_detalles(id_pokemon)
    }, [])

    const detalles = useSelector(store => store.details)
  

    const {name, health,img, speed, attack, defense, types, height, weight} = detalles
    return (
        name ?<div className={style.container_detalles}>
            <div className={style.presentacion}>
                <h1>{name.toUpperCase()}</h1>
            </div>
            <div className={style.descripcion}>
            <div className={style.foto}>
            <img src={img ? img : imagen } alt="." />
            </div>
            

            <div className={style.container_stats}>
                <h2>STATS</h2>
                <div className="row">
                    <div className="col">
                    <h3>Health</h3>
                    </div>
                    <div className="col-5">
                    <h3>{health}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <h3>Speed</h3>
                    </div>
                    <div className="col-5">
                    <h3>{speed}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <h3>Attack</h3>
                    </div>
                    <div className="col-5">
                    <h3>{attack}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <h3>Defense</h3>
                    </div>
                    <div className="col-5">
                    <h3>{defense}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <h3>Weight</h3>
                    </div>
                    <div className="col-5">
                    <h3>{weight}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <h3>Height</h3>
                    </div>
                    <div className="col-5">
                    <h3>{height}</h3>
                    </div>
                </div>
                
                {types.length?
                <div className="row">
                <div className="col">
                <h3>Types</h3>
                </div>
                <div className="col-5">
                {types.map(el=> <h4 key={el} > {el} </h4> )}
                </div>
                </div>

                : null}
            </div>
            </div>
        </div>
        :
        <h1>Loading..</h1>
    )
}

export default Detalles
