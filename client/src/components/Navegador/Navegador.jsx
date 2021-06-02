import React from 'react';

import SearchInput from "../SearchInput/SearchInput"
import "bootstrap/dist/css/bootstrap.min.css"


function Navegador() {
    return (
    <nav className={`navbar navbar-dark bg-dark`}>
    <div className="container-fluid">
    <a className="navbar-brand" href="/">Welcome Page</a>
    <a className="navbar-brand" href="/home">Home</a>
    <a className="navbar-brand" href="/add">Add Pokemon</a>
    <SearchInput/>
  </div>   
        
    
    </nav>
    )
}

export default Navegador
