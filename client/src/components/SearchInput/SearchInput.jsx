import React, {useState} from 'react'
import {connect} from 'react-redux'

import { getByName } from '../../redux/actions';


function SearchInput({details, getByName}) {
    
    const [name, setName] = useState("");
    
    function handleChange(e){
        setName(e.target.value)
    }    

    function handleSubmit(e){
        e.preventDefault()
        getByName(name)
        console.log(details);
        
    }
      
    return (
    <form onSubmit={handleSubmit} className="d-flex">
        <input value={name} onChange={handleChange} className="form-control me-2" type="search" placeholder="Pokemon..." />
        <button className="btn btn-outline-primary" type="submit">Search </button>
    </form>
        
    )
}

const mapStateToProps = (state) => ({
    pokemones: state.pokemons,
    details: state.details
  
  });
  
  function mapDispatchToProps(dispatch) {
    return {
        getByName: (name)=> {dispatch(getByName(name))},
       
  }
}

  export default connect(mapStateToProps, mapDispatchToProps) (SearchInput)
