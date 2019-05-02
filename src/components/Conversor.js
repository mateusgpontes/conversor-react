import React, { Component } from 'react'

export default class Conversor extends Component {
        state ={
            moedaA_valor: "",
            moedaB_valor:0
        };
        //bind vai referenciar quem vai ser o this, no caso o this vai ser o objeto dentro da função
        //this.converter = this.converter.bind(this);


    converter = () =>{
        console.log(this.state)
    }
    
    render(){
        return(
            <>
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange ={(event)=>{this.setState({moedaA_valor:event.target.value})}}>
                </input>
                <input type="button" value="Converter" onClick={this.converter}>
                </input>
                <h2>Valor convertido</h2>
            </>
        );
    };
}