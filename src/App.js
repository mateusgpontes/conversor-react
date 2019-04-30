import React from 'react';
import Conversor  from "./components/Conversor"

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
    </div>
  );
}

export default App;
