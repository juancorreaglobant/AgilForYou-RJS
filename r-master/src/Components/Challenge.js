import React, { Component } from 'react';
import './Styles/Styles.css';
import ThanksYou from './ThanksYou';
import Chulos from './Chulos';

import swal from 'sweetalert'

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
            3. Subir la informacion al servidor el arreglo con la solucion y la url a la hoja de vida. 
        */
        var textareas = { html: true ,  css: true,  js: true };
        var javascript = document.getElementById("text_js");
        var css = document.getElementById("text_css");
        var html = document.getElementById("text_html");

        if (reto.items.indexOf('js') >= 0 && !javascript.value) {
            textareas.js=false;
        }

        if (reto.items.indexOf('css') >= 0 && !css.value) {
            textareas.css=false;
        }


        if (reto.items.indexOf('html') >= 0  && !html.value) {
            textareas.html=false;
        }

        console.log(JSON.stringify(textareas.js))
        if(textareas.js && textareas.html && textareas.css){
            
return true;
        }
        return false;
    }

UpdateState(){
    const { Info } = this.props;
    if(Info.length <= this.currentindex){
     this.setState({estado:false});
    }
}

CleanTextarea(retos){
    var javascript = document.getElementById("text_js");
    var css = document.getElementById("text_css");
    var html = document.getElementById("text_html");
    

    if (retos.items.indexOf('js') >= 0 ) {
        javascript.value="";
    }

    if (retos.items.indexOf('css') >=0 ) {
        css.value="";
    }


    if (retos.items.indexOf('html') >= 0 ) {
        html.value="";
    }
}

SaveTextarea(retos){
    var javascript = document.getElementById("text_js");
    var css = document.getElementById("text_css");
    var html = document.getElementById("text_html");
    var reto=[];

    if (retos.items.indexOf('js') >= 0 && javascript.value) {
        reto.push(javascript.value);
    }

    if (retos.items.indexOf('css') >= 0 && css.value) {
        reto.push(css.value);
    }


    if (retos.items.indexOf('html') >= 0  && html.value) {
        reto.push(html.value);
    }
var reto1=this.state.reto_1;
reto1['reto'+this.currentindex]=reto;
this.setState({reto_1:reto1});
console.log(this.state.reto_1);
}

    goNext() {
        const { Info } = this.props;
        if (this.isValid(Info[this.state.reto])) {
            this.setState({ reto: this.currentindex + 1 })
            this.currentindex = this.currentindex + 1;
            console.log(this.state.reto_1);
            this.UpdateState();
            this.SaveTextarea(Info[this.state.reto])
            this.CleanTextarea(Info[this.state.reto]);
        }
        else {
            swal ( "Alert:" ,  "Some textarea is empty!" ,  "error" )

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
                        <div className="center">
                            
                            {
                                (Info[this.state.reto].items.indexOf('js') >= 0 ?
                                    <div className="fill" align="center">
                                        <h2><strong>JAVASCRIPT</strong></h2>
                                        <textarea id="text_js" className="Textarea"></textarea>
                                    </div> : ''
                                )
                            }
                            {
                                (Info[this.state.reto].items.indexOf('css') >= 0 ?
                                    <div className="fill" align="center">
                                        <h2 ><strong>CSS</strong></h2>
                                        <textarea id="text_css" className="Textarea"></textarea>
                                    </div> : ''
                                )
                            }
                            {
                                (Info[this.state.reto].items.indexOf('html') >= 0 ?
                                    <div className="fill" align="center">
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
            const { Info } = this.props;
            return (
                <div> <ThanksYou Info={this.state.reto_1} chulosCompletados={this.state.reto} chulosTotales={Info.length}/> </div>
            );
        }

    }
}

export default Challenge;