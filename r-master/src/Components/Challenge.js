import React, { Component } from 'react';
import './Styles/Styles.css';
import ThanksYou from './ThanksYou';
import Chulos from './Chulos';
import swal from 'sweetalert'
import brace from 'brace';
import AceEditor from 'react-ace';
 
import 'brace/mode/javascript';
import 'brace/mode/html';
import 'brace/mode/css';
import 'brace/theme/monokai';

class Challenge extends Component {
    constructor(props) {
        super(props);
        this.currentJS = "";
        this.currentCSS = "";
        this.currentHTML = "";
        this.goNext = this.goNext.bind(this);
        this.isValid = this.isValid.bind(this);
        this.asign_js = this.asign_js.bind(this);
        this.asign_css = this.asign_css.bind(this);
        this.asign_html = this.asign_html.bind(this);
        this.state = {
            reto: 0,
            estado: true,
            reto_1: [],
            reto_js:""
        }
        this.currentindex = 0;
        console.log(this.props.Info)
    }

    isValid(reto) {

        var textareas = { html: true ,  css: true,  js: true };
        var javascript = this.currentJS;
        var css = this.currentCSS;
        var html = this.currentHTML;

        if (reto.items.indexOf('js') >= 0 && !javascript) {
            textareas.js=false;
            swal ( "Alert:" ,  "You must complete the field:JS" ,  "error" )
        }

        if (reto.items.indexOf('css') >= 0 && !css) {
            textareas.css=false;
            swal ( "Alert:" ,  "You must complete the field:CSS" ,  "error" )
        }


        if (reto.items.indexOf('html') >= 0  && !html) {
            textareas.html=false;
            swal ( "Alert:" ,  "You must complete the field:HTML" ,  "error" )
        }
     
        console.log(JSON.stringify(textareas.js))
        if(textareas.js && textareas.html && textareas.css){
         
         return true;

        }else{
          
           return false;
          
        }
    
      
    }

UpdateState(){
    const { Info } = this.props;
    if(Info.length <= this.currentindex){
     this.setState({estado:false});
    }
}

CleanTextarea(retos){
    var javascript = this.currentJS;
    var css = this.currentCSS;
    var html = this.currentHTML;
    

    if (retos.items.indexOf('js') >= 0 ) {
        javascript="";
    }

    if (retos.items.indexOf('css') >=0 ) {
        css="";
    }


    if (retos.items.indexOf('html') >= 0 ) {
        html="";
    }
}

SaveTextarea(retos){
    var javascript = this.currentJS;
    var css = this.currentCSS;
    var html = this.currentHTML;
    var reto=[];

    if (retos.items.indexOf('js') >= 0 && javascript) {
        var retojs={'item':'js','result':javascript}
        reto.push(retojs);
        
    }

    if (retos.items.indexOf('css') >= 0 && css) {
       var retocss={'item':'css','result':css}
        reto.push(retocss);
    }


    if (retos.items.indexOf('html') >= 0  && html) {
        var retohtml={'item':'html','result':html}
        reto.push(retohtml);
    }
var reto1=this.state.reto_1;
reto1['reto'+this.currentindex]=reto;
this.setState({reto_1:reto1});
console.log(this.state.reto_1);
//Limpiar los valores de componente
this.currentJS = "";
this.currentCSS = "";
this.currentHTML = ""; 
}

    goNext() {
        const { Info } = this.props;
    
        if (this.isValid(Info[this.state.reto])) {
            this.setState({ reto: this.currentindex + 1 })
            this.currentindex = this.currentindex + 1;
            console.log(this.state.reto_1);
            this.UpdateState();
            this.SaveTextarea(Info[this.state.reto]);
            this.CleanTextarea(Info[this.state.reto]);
            
        }
      
    }


    asign_js(newValue, event) {    
        this.currentJS = newValue;
        console.log(this.currentJS);
    }
    asign_css(newValue2, event) {    
        this.currentCSS = newValue2;
        console.log(this.currentCSS);
    }
    asign_html(newValue3, event) {    
        this.currentHTML = newValue3;
        console.log(this.currentHTML);
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
                                        <AceEditor
                                            mode="javascript"                                         
                                            theme="monokai"                                           
                                            style={{ width:'90%'}}
                                            onChange={this.asign_js}                                          
                                            editorProps={{ $blockScrolling: true }}
                                        />
                                    </div> : ''
                                )
                            }
                            {
                                (Info[this.state.reto].items.indexOf('css') >= 0 ?
                                    <div className="fill" align="center">
                                        <h2 ><strong>CSS</strong></h2>
                                        <AceEditor
                                            mode="css"                                         
                                            theme="monokai"                                           
                                            style={{ width:'90%'}}
                                            onChange={this.asign_css}                                          
                                            editorProps={{ $blockScrolling: true }}
                                        />
                                    </div> : ''
                                )
                            }
                            {
                                (Info[this.state.reto].items.indexOf('html') >= 0 ?
                                    <div className="fill" align="center">
                                        <h2 ><strong>HTML</strong></h2>
                                        <AceEditor
                                            mode="html"                                         
                                            theme="monokai"                                           
                                            style={{ width:'90%'}}
                                            onChange={this.asign_html}                                          
                                            editorProps={{ $blockScrolling: true }}
                                        />
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