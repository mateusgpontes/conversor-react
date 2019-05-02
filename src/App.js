import React from 'react';
import Conversor  from "./components/Conversor"
import "./styles/app.css"

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <div className="linhas">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="linhas">
        <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
      </div>
      <div className="linhas">
        <Conversor moedaA="EUR" moedaB="USD"></Conversor>
        <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>  
    </div>
  );
}

export default App;
