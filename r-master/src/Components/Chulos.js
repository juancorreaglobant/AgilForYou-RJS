
import React, { Component } from 'react';
import ReactDom from 'react';



class Chulos extends Component {
    constructor(){
        super();
        this.renderarChulos = this.renderarChulos.bind(this);
        
    }

    renderarChulos(chulosCompletados, chulosTotales){
        var htmlChulos = [];
        for (var i = 0; i < chulosCompletados; i++) {
        htmlChulos.push(
            <span className="colum">
                <span className="glyphicon glyphicon-ok" id="icon-ok" key={i}></span>
            </span>
        ) ;  
        }

        for (var i = 0; i < chulosTotales - chulosCompletados; i++) {
        htmlChulos.push(
            <span className="colum">
                <span className="glyphicon glyphicon-ok" key={i+chulosTotales}></span>
            </span>
        ) ;  
        }
        console.log(htmlChulos);
        return htmlChulos;
    }

    render() {
        this.chulosCompletados = this.props.chulosCompletados;
        this.numeroDeRetos = this.props.chulosTotales; // Numero total de retos que tiene firebase
        return (
            <div>
                {this.renderarChulos(this.chulosCompletados, this.numeroDeRetos)}
            </div>
        );
    }
}

export default Chulos;



