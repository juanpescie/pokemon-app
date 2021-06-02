function ordenarAlfabeticoAsc(arreglo){
    return arreglo.sort((ant, sig)=>{
        if(ant.name > sig.name) return 1
        else if(ant.name < sig.name) return -1
        return 0
    })
    
}
function ordenarAlfabeticoDesc(arreglo){
    return arreglo.sort((ant, sig)=>{
        if(ant.name > sig.name) return -1
        else if(ant.name < sig.name) return 1
        return 0
    })
    
}
function ordenarFuerzaDesc(arreglo){
    return arreglo.sort((ant, sig)=>{
        if(ant.attack > sig.attack) return -1
        else if(ant.attack < sig.attack) return 1
        return 0
    })
    
}
function ordenarFuerzaAsc(arreglo){
    return arreglo.sort((ant, sig)=>{
        if(ant.attack > sig.attack) return 1
        else if(ant.attack < sig.attack) return -1
        return 0
    })
   
}

 const sortPokemonsby = (array, metodo)=>{
    if(metodo=== "alf_desc") return ordenarAlfabeticoDesc(array);
    else if(metodo=== "alf_asc") return ordenarAlfabeticoAsc(array);
    else if(metodo=== "fuerza_asc") return ordenarFuerzaAsc(array);
    else if(metodo=== "fuerza_desc") return ordenarFuerzaDesc(array);
}



module.exports = sortPokemonsby;