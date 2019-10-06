import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import ConversorBitcoin from './components/ConversorBitcoin';


function App() {
  return (
    <div className="App">
      <div class="Cabecalho">
        Conversor de Real para Bitcoin
      </div>
      <div class="Corpo">
        <div id="ComponenteDireito">
          <ConversorBitcoin moeda="BRL"></ConversorBitcoin>
        </div>
        <div id="ComponenteEsquerdo">
          <ConversorBitcoin moeda="BTC"></ConversorBitcoin>
        </div>
      </div>
      <div class="Rodape">
        <Link to="/sobre">Acessar a página sobre...</Link>
      </div>
    </div>
  );
}

export default App;
