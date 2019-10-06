import React from 'react';
import { Link } from 'react-router-dom';

export default class Sobre extends React.Component {
   render() {
        return (
            <div className="Principal">
                <h1>Conversor de Real para Bitcoin </h1>
                <h2>Sobre o Conversor</h2>
                <p>
                    Este é um conversor simples de reais para Bitcoin
                </p>
                <h2>Créditos</h2>
                <strong>Desenvolvedor: Eduardo Ribeiro</strong><br></br>
                <strong>API para conversor de Bitcoin: Mercado Bitcoin</strong><br />
                <Link to="/">Voltar à aplicação.</Link>
            </div>
        );
    }
}