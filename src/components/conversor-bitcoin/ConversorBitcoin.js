import React, { Component } from 'react' 
import './ConversorBitcoin.sass'
import { confirmAlert } from 'react-confirm-alert'

export default class ConversorBitcoin extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            valorEntrada: 0,
            valorSaida: 0,
            nomeMoeda: ""
        }

        var tipoMoeda = ""
        this.props.moeda === "BRL" ? tipoMoeda = "Real" : tipoMoeda = "BTC" 
        this.setState(this.setState({ nomeMoeda: tipoMoeda }))

        this.conversor = this.conversor.bind(this) 
    }

    modalConfirmacao(value, msg) {
        const options = {
                customUI: ({ onClose }) => {
                    if (value) {
                        return (
                            <div className='ModalConfirmacaoSucesso'>
                                <h1>{msg}</h1>
                                <button onClick={onClose}>Fechar</button>
                            </div>
                        )
                    } else {
                        return (
                            <div className='ModalConfirmacaoErro'>
                                <h1>{msg}</h1>
                                <button onClick={onClose}>Fechar</button>
                            </div>
                        )
                    }
                }
            }

        confirmAlert(options)
      }
    
    conversor() {
        const url = "https://www.mercadobitcoin.net/api/BTC/ticker/" 

        try{
            fetch(url)
                .then(res => {
                    return res.json() 
                })
                .then(json => {
                    const valorBitcoin = parseFloat(json["ticker"].last)                 

                    if (this.props.moeda === "BRL"){        
                        this.setState({
                            valorSaida: parseFloat(this.state.valorEntrada * valorBitcoin).toFixed(2),
                            valorBitcoin: valorBitcoin 
                        }) 
                    } else if (this.props.moeda === "BTC") {
                        this.setState({
                            valorSaida: parseFloat(this.state.valorEntrada / valorBitcoin),
                            valorBitcoin: valorBitcoin              
                        }) 
                    }
                })

            this.modalConfirmacao(true, "O resultado foi apresentado com sucesso!")
        } catch (err) {
            this.modalConfirmacao(false, "Ocorreu um erro na apresentação do resultado. Tente novamente.")
        }
    }

    render() {
        const estadoMoeda = (this.props.moeda === "BRL" ? "Real" : "Bitcoin") 
        const estadoSigla = (this.props.moeda === "BRL" ? '₿' : 'R$') 

        return (
            <div id="moduloPrincipal" className="ConversorBitcoin">
                <h1>A moeda corrente é o {estadoMoeda}</h1>
                {estadoSigla} 
                
                <input type="text" onChange={(event) => { this.setState({ valorEntrada: event.target.value }) }}></input>
                
                <button onClick={this.conversor}>Aperte</button>
                <h2>O valor é: {estadoSigla} {this.state.valorSaida}</h2>
            </div>
        ) 
    }
}