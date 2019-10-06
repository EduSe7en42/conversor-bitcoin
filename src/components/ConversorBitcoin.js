import React from 'react';
import './ConversorBitcoin.css';

export default class ConversorBitcoin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valorEntrada: 0,
            valorSaida: 0,
            valorBitcoin: 0,
            nomeMoeda: ""
        }

        if (this.props.moeda === "BRL") {
            this.setState({
                nomeMoeda: "Real"
            });
        } else if (this.props.moeda === "BTC") {
            this.setState({
                nomeMoeda: "Bitcoin"
            });
        }

        this.conversor = this.conversor.bind(this);
    }
    
    conversor() {
        let url = "https://www.mercadobitcoin.net/api/BTC/ticker/";

        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(json => {
                this.setState({
                    valorBitcoin: parseFloat(json["ticker"].last)
                });
            });
        
        if (this.props.moeda === "BRL"){        
            this.setState({
                valorSaida: parseFloat(this.state.valorEntrada * this.state.valorBitcoin).toFixed(2)               
            });
        } else if (this.props.moeda === "BTC") {
            this.setState({
                valorSaida: parseFloat(this.state.valorEntrada / this.state.valorBitcoin)              
            });
        }
    }

    render() {
        return (
            <div id="moduloPrincipal" className="ConversorBitcoin">
                <h1>A moeda corrente é o {this.props.moeda === "BRL" ? 'Real' : 'Bitcoin'}</h1>
                {this.props.moeda === "BRL" ? '₿' : 'R$'} <input type="text" onChange={(event) => {
                    this.setState({
                        valorEntrada: parseFloat(event.target.value)
                    });
                }}></input>
                <button onClick={this.conversor}>Aperte</button>
                <h2>O valor é: {this.props.moeda === "BRL" ? 'R$' : '₿'} {this.state.valorSaida}</h2>
            </div>
        );
    }
}