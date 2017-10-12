import React, { Component } from 'react';
import './Styles/Styles.css';
import PropTypes from 'prop-types';
import ThanksYou from './ThanksYou';
import Chulos from './Chulos';

class Challenge extends Component {
    constructor(props) {
        super(props);
        this.goNext = this.goNext.bind(this);
        this.isValid = this.isValid.bind(this);

        this.state = {
            reto: 0,
            estado: true,
            reto_1: []
        }
        this.currentindex = 0;
    }

    isValid(reto) {
        /*
            TODO: 
            1. Hacer las validaciones dependiendo si tiene JS, CSS o HTML. (1hora)
            2. Mejorar los retos para que incluyan CSS. (10 minutos)
            3. Subir la informacion al servidor el arreglo con la solucion y la url a la hoja de vida. (1 hora)
        */
        if (reto.items.indexOf('js')) {
            var javascript = document.getElementById("text_js");
            if (javascript.value) {
                return false;
            }
        }
       
        var html = document.getElementById("text_html");
        if (this.state.reto === 0 && this.state.estado === true) {
            if (html.value === "" || javascript === "") {
                return false;

            }
        }
        return true;
    }

    goNext() {
        if (this.isValid(Info[this.state.reto])) {
            this.setState({ reto: this.currentIndex + 1 })
            var reto = this.state.reto_1;
            reto["reto1"] = { HTML: html.value, JAVASCRIPT: javascript.value };
            this.setState({ reto_1: reto });
            html.value = "";
            javascript.value = "";
            console.log(this.state.reto_1);
        }
        else {
            alert("TANTO JAVASCRIPT COMO HTML NO PUEDE ESTAR VACIOS");
        }
    }



    render() {
        const { Info } = this.props;
        if (this.state.estado === true) {
            return (
                <section id="reto3">
                    <div align="center">
                        <h3 className="h" id="titulo3">
                            {Info[this.state.reto].titulo}
                        </h3>
                        <p className="text" id="descripcion3">
                            {Info[this.state.reto].descripcion}
                        </p>
                        <div className="row">
                            {
                                (Info[this.state.reto].indexOf('js') ?
                                    <div className="col-md-4" align="center">
                                        <h2><strong>JAVASCRIPT</strong></h2>
                                        <textarea id="text_js" className="Textarea"></textarea>
                                    </div> : ''
                                )
                            }
                            {
                                (Info[this.state.reto].indexOf('css') ?
                                    <div className="col-md-4" align="center">
                                        <h2 ><strong>CSS</strong></h2>
                                        <textarea id="text_css" className="Textarea"></textarea>
                                    </div> : ''
                                )
                            }
                            {
                                (Info[this.state.reto].indexOf('html') ?
                                    <div className="col-md-4" align="center">
                                        <h2 ><strong>HTML</strong></h2>
                                        <textarea id="text_html" className="Textarea"></textarea>
                                    </div> : ''
                                )
                            }

                        </div>
                        <div className="Space">
                            <button type="button" onClick={this.goNext} id="Next">Next</button>
                        </div>
                        <div className="Space">
                            <Chulos chulosCompletados={this.state.reto} chulosTotales={Info.length} />
                        </div>
                    </div>
                </section>
            );
        } else {
            return (
                <div> <ThanksYou /> </div>
            );
        }

    }
}

export default Challenge;