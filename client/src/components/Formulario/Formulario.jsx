import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { add_pokemon } from '../../redux/actions';
import style from "./Formulario.module.css";
function Formulario() {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: "",
        health: 45,
        speed: 45,
        attack: 45,
        defense: 45,
        height: 10,
        weight: 45,
        type1: "",
        type2: ""

    })
    const [error, setError] = useState(false)
    const [exito, setExito] = useState(false)
const {name, health, speed, attack, defense, height, weight, type1, type2} = input

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        if(name && health && speed && attack && defense && height && weight ){
            dispatch(add_pokemon(input));
            console.log(input);
            setExito(true)
            setError(false)
        }
        else{
            setExito(false)
            setError(true)
        }
        
    }

    return (
        <div>
            <h1>Create your own pokemon</h1>
            
            <form className={style.formulario} onSubmit={handleSubmit}>
                <div className={style.container_inputs}>
    <div className="col-5">
            <div className="mb-2">
                <label  className="form-label">Name</label>
                <input type="text"
                name="name"
                value={name}
                onChange={(e)=>handleChange(e)}
                className="form-control" placeholder="Name"/>
            </div>
                
            <div className="mb-2">
                <label  className="form-label">Health</label>
                <input type="number"
                name="health"
                value={health}
                onChange={(e)=>handleChange(e)}
                className="form-control" placeholder="health"/>
            </div>
            <div className="mb-2">
                <label  className="form-label">Attack</label>
                <input type="number"
                name="attack"
                value={attack}
                onChange={(e)=>handleChange(e)}
                className="form-control" placeholder="attack"/>
            </div>
            <div className="mb-2">
                <label  className="form-label">Defense</label>
                <input type="number"
                name="defense"
                value={defense}
                onChange={(e)=>handleChange(e)}
                className="form-control" placeholder="defense"/>
            </div>
            <div className="mb-2">
                <label  className="form-label">Speed</label>
                <input type="number"
                name="speed"
                value={speed}
                onChange={(e)=>handleChange(e)}
                className="form-control" placeholder="speed"/>
            </div>
    </div>
    <div className="col-5" >
            <div className="mb-2">
                <label  className="form-label">Height</label>
                <input type="number"
                name="height"
                value={height}
                onChange={(e)=>handleChange(e)}
                className="form-control" placeholder="height"/>
            </div>
            <div className="mb-2">
                <label className="form-label">Weight</label>
                <input type="number"
                name="height"
                value={weight}
                onChange={(e)=>handleChange(e)}
                className="form-control" placeholder="weight"/>
            </div>
                <div className="mb-3">
                <label  className="form-label">Type 1</label>
                <input type="text"
                name="type1"
                value={type1}
                onChange={(e)=>handleChange(e)}
                className="form-control" placeholder="type 1"/>
                </div>

                <div className="mb-3">
                <label className="form-label">Type 2</label>
                <input type="text"
                name="type2"
                value={type2}
                onChange={(e)=>handleChange(e)}
                className="form-control" placeholder="type 2"/>
                </div>
                </div>
                
    </div>
            <button 
            className={style.boton}
            type="submit"
            >
                Add Pokemon
            </button>
                            
            </form>
            
            {exito?  <h2>The pokemon was added succesfully</h2>   : null}
            {error? <h2>Fields are missing </h2>  : null}
        </div>

    )
}

export default Formulario
