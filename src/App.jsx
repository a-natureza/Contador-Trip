import "./App.css";
import Contador from "./components/Contador";
import Formulario from "./components/Formulario";
import InputControlado from "./components/InputControlado";
import Lista from "./components/Lista";
import { BuscarDadosEffect } from "./components/Noticia";

function App() {
  return (
    <div className="app">
      <h1>FuturoDEV Trip</h1>
      <div className="input-controlado">
        <InputControlado />
      </div>
      <div className="contador">
        <Contador />
      </div>
      <div className="noticia">
        <BuscarDadosEffect />
      </div>
      <div className="lista-de-itens">
        <Lista />
      </div>
      <div className="formulario">
        <Formulario />
      </div>
    </div>
  );
}

export default App;
