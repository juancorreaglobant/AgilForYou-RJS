import React, { Component } from 'react';
import './Styles/Styles.css';
import PropTypes from 'prop-types';
import ThanksYou from './ThanksYou';
import Chulos from './Chulos';

class Challenge extends Component {
    constructor(props) {
        super(props);
        this.sumar = this.sumar.bind(this);
        this.state = {
            reto: parseInt(this.props.Posicion),
            estado: true,
            reto_1: []
        }
    }

    sumar() {
        var javascript = document.getElementById("text_js");
        var html = document.getElementById("text_html");
        if (this.state.reto === 0 && this.state.estado === true) {
            if (html.value === "" || javascript === "") {
                alert("TANTO JAVASCRIPT COMO HTML NO PUEDE ESTAR VACIOS");
            }
            else {
                this.setState({ reto: 1 })
                var reto = this.state.reto_1;
                reto["reto1"] = { HTML: html.value, JAVASCRIPT: javascript.value };
                this.setState({ reto_1: reto });
                html.value = "";
                javascript.value = "";
                console.log(this.state.reto_1);
            }
        }
        else {
            if (this.state.reto === 1 && this.state.estado === true) {
                if (javascript === "") {
                    alert("EL HTML NO PUEDE ESTAR VACIOS");
                } else {
                    this.setState({ reto: 2 })
                    var reto = this.state.reto_1;
                    reto["reto2"] = { JAVASCRIPT: javascript.value };
                    this.setState({ reto_1: reto });
                    javascript.value = "";
                    console.log(this.state.reto_1);
                }
            }
            else {
                if (this.state.reto === 2 && this.state.estado === true) {
                    if (html.value === "" || javascript === "") {
                        alert("TANTO JAVASCRIPT COMO HTML NO PUEDE ESTAR VACIOS");
                    }
                    else {
                        this.setState({ reto: 3 })
                        var reto = this.state.reto_1;
                        reto["reto3"] = { HTML: html.value, JAVASCRIPT: javascript.value };
                        this.setState({ reto_1: reto });
                        html.value = "";
                        javascript.value = "";
                        console.log(this.state.reto_1);
                    }
                } else {
                    if (this.state.reto === 3 && this.state.estado === true) {
                        if (javascript === "") {
                            alert("EL HTML NO PUEDE ESTAR VACIOS");
                        } else {
                            this.setState({ reto: 0 });
                            this.setState({ estado: false });
                            var reto = this.state.reto_1;
                            reto["reto4"] = { JAVASCRIPT: javascript.value };
                            this.setState({ reto_1: reto });
                            javascript.value = "";
                            console.log(this.state.reto_1);
                        }
                    }
                }
            }
        }
    };
    static propTypes = {
        Info: PropTypes.array.isRequired
    }


    render() {
        const { Info, Posicion } = this.props;
        if (this.state.estado === true) {
            return (
                <section id="reto3">
                    <div align="center">
                        <h3 className="h" id="titulo3">
                            {Info[Posicion].titulo}
                        </h3>
                        <p className="text" id="descripcion3">
                            {Info[Posicion].enunciado}
                        </p>
                        {((this.state.reto === 0 || this.state.reto === 2) ?
                            <div className="row">
                                <div className="col-md-2">
                                </div>
                                <div className="col-md-4" align="center">
                                    <h2><strong>JAVASCRIPT</strong></h2>
                                    <textarea id="text_js" className="Textarea"></textarea>
                                </div>
                                <div className="col-md-4" align="center">
                                    <h2 ><strong>HTML</strong></h2>
                                    <textarea id="text_html" className="Textarea"></textarea>
                                </div>
                                <div className="col-md-2">

                                </div>
                            </div>
                            :
                            <div className="row">
                                <div className="col-md-2">
                                </div>
                                <div className="col-md-8" align="center">
                                    <h2><strong>JAVASCRIPT</strong></h2>
                                    <textarea id="text_js" className="Textarea"></textarea>
                                </div>
                                <div className="col-md-2">

                                </div>
                            </div>)}
                        <div className="Space">
                            <button type="button" onClick={this.sumar} id="Next">Next</button>
                        </div> 
                        <div className="Space">                     
                            <Chulos chulosCompletados={this.state.reto} chulosTotales = {Info.length}/>                
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