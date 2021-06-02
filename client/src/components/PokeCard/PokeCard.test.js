import React from 'react';
import {Link} from "react-router-dom"
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import PokeCard from "./PokeCard"
import imagen_unk from "../images/unknown_criature.jpg"



Enzyme.configure({ adapter: new Adapter() });

// "@testing-library/jest-dom": "^5.11.6",
// "@testing-library/react": "^11.2.1",
// "@testing-library/user-event": "^12.2.2",

// {id,img, name,types, attack}
describe("Test <PokeCard />",()=>{
    var imagenreal = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    var imagen_unkown = imagen_unk
    var carta;
    var carta_sin_tipos;
    beforeEach(()=>{
        carta = shallow(<PokeCard 
        name="bulbasaur" 
        id={2} 
        img={imagenreal}
        attack={49} 
        types={["grass","poison"]} />
         )

        carta_sin_tipos = shallow(<PokeCard 
        name="desconocido" 
        id={"9b4ceb99-4fdd-45f7-9b9f-9516567a69fc"} 
        attack={49} 
        img={null} 
        />
         )
    })
    describe("Una carta que esta completa: ",()=>{
        it("debera renderizar un solo nombre que le corresponde a su personaje en mayusculas",()=>{
            expect(carta.find("h1").at(0).text()).toEqual("BULBASAUR")
        })

        it("debe renderizar el ataque en un h3", ()=>{
            expect(carta.find("h3").at(0).text()).toEqual("Fuerza: 49")
        })
        it("tiene que renderizar tipos del pokemon pasados por props", ()=>{
            expect(carta.find("p")).toHaveLength(2)
        })
        it("tiene que tener un link que redireccione a su ruta details -> `/details/id`",()=>{
            expect(carta.find(Link).at(0).prop("to")).toEqual("/details/2")
        } )

    } )
    describe("Una carta que no recibe ni tipos ni imagen:", ()=>{
        it("renderiza una imagen generica si no recibe una imagen por props",()=>{
            expect(carta_sin_tipos.find("img").at(0).prop("src")).toEqual(imagen_unkown)
        })
        it("no renderiza ningun <p> si no le pasa tipos por proipedad", ()=>{
            expect(carta_sin_tipos.find("p")).toHaveLength(0)
        })
        it("tiene que tener un link que redireccione a su ruta details -> `/details/id`",()=>{
            expect(carta_sin_tipos.find(Link).at(0).prop("to")).toEqual("/details/9b4ceb99-4fdd-45f7-9b9f-9516567a69fc")
        })
        
        } )

})

