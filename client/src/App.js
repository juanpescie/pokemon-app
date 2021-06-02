import './App.css';
import Navegador from "./components/Navegador/Navegador";
import {Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Acceso from "./components/Acceso/Acceso";
import Formulario from "./components/Formulario/Formulario";
import Detalles from "./components/Detalles/Detalles"
import Filtrado from "./components/Filtrado/Filtrado"


function App() {
  return (
    <div className="App">
      <Navegador/>
      <Route exact path="/" component={Acceso}/>
      <Route exact path="/home" component={Home}/>
      <Route path="/add" component={Formulario}/>
      <Route path="/home/filtrado/:metodo/:tipo" component={Filtrado}  />
      <Route path="/details/:id" component={Detalles}/>
      

    </div>
  );
}

export default App;
