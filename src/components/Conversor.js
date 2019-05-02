import React, { Component } from 'react'

export default class Conversor extends Component {
        state ={
            moedaA_valor: "",
            moedaB_valor:0
        };
        //bind vai referenciar quem vai ser o this, no caso o this vai ser o objeto dentro da função
        //this.converter = this.converter.bind(this);


    converter = () =>{
        let moeda = `${this.props.moedaA}_${this.props.moedaB}`;
        let linkConvert  = `https://free.currconv.com/api/v7/convert?q=${moeda}&compact=ultra&apiKey=125e587ccee6d4edff83`;

        fetch(linkConvert)
        .then(res =>{
            return res.json();
        })
        .then(json=>{
            let cotacao = json[moeda];
            let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2);
            this.setState({moedaB_valor});
        });
        
    }
    
    render(){
        return(
            <>
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange ={(event)=>{this.setState({moedaA_valor:event.target.value})}}>
                </input>
                <input type="button" value="Converter" onClick={this.converter}>
                </input>
                <h2>{String(this.state.moedaB_valor)}</h2>
            </>
        );
    };
}