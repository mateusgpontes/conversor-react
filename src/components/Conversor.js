import React, { Component } from 'react'

export default class Conversor extends Component {
    render(){
        return(
            <>
                <h2>USD para BRL</h2>
                <input type="text"></input>
                <input type="button" value="Converter"></input>
                <h2>Valor convertido</h2>
            </>
        );
    };
}