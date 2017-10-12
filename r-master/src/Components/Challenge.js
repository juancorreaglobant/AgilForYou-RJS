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
        console.log(this.props.Info)
    }

    isValid(reto) {
        /*
            TODO: 
            1. Hacer las validaciones dependiendo si tiene JS, CSS o HTML. (1hora)
            2. Mejorar los retos para que incluyan CSS. (10 minutos)
            3. Subir la informacion al servidor el arreglo con la solucion y la url a la hoja de vida. (1 hora)
        */
        var textareas = [{ html: true }, { css: true }, { js: true }];
        var textareas1 = [{ html: true }, { css: true }, { js: true }];
        var javascript = document.getElementById("text_js");
        var css = document.getElementById("text_css");
        var html = document.getElementById("text_html");

        if (reto.items.indexOf('js') >= 0 && !javascript.value) {
            textareas[2] = { js: false };
        }

        if (reto.items.indexOf('css') >= 0 && !css.value) {
            textareas[1] = { css: false };
        }


        if (reto.items.indexOf('html') >= 0  && !html.value) {
            textareas[0] = { html: false };
        }

        console.log(JSON.stringify(textareas[0]))
        if(JSON.stringify(textareas)===JSON.stringify(textareas1)  ){
            
return true;
        }

    }

    goNext() {
        const { Info } = this.props;
        if (this.isValid(Info[this.state.reto])) {
            this.setState({ reto: this.currentindex + 1 })
            this.currentindex = this.currentindex + 1;
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
                                (Info[this.state.reto].items.indexOf('js') >= 0 ?
                                    <div className="col-md-4" align="center">
                                        <h2><strong>JAVASCRIPT</strong></h2>
                                        <textarea id="text_js" className="Textarea"></textarea>
                                    </div> : ''
                                )
                            }
                            {
                                (Info[this.state.reto].items.indexOf('css') >= 0 ?
                                    <div className="col-md-4" align="center">
                                        <h2 ><strong>CSS</strong></h2>
                                        <textarea id="text_css" className="Textarea"></textarea>
                                    </div> : ''
                                )
                            }
                            {
                                (Info[this.state.reto].items.indexOf('html') >= 0 ?
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