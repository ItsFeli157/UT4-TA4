import React, { useState } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const disminuirContador = () => {
    setContador(contador - 1);
  };

  return (
    <div className="App">
      <h1>Contador: {contador}</h1>
      <div>
        <button onClick={aumentarContador}>Aumentar</button>
        <button onClick={disminuirContador}>Disminuir</button>
      </div>
    </div>
  );
}

export default App;
