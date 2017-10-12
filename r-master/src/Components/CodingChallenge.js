import React, { Component } from 'react';
import './Styles/Styles.css';
import Challenge from './Challenge';
import info from './Data/InfoComponent';

class CodingChallenge extends Component {
    constructor(props) {
        super(props);
        this.ChangeCom = this.ChangeCom.bind(this);
        this.state = {id: true};
      }
      ChangeCom(){
        this.setState({id: false});
      }
  render() {
    const id = this.state.id;


    if(id){
    return (
        <section className="Middle-block" id="challenge">         
            <div>
                <h3 className="h">
                    CODING CHALLENGE
                </h3>
                <p className="text" >
                    We specialize in building the next generation of digital products leveraging the latest
                    UI technologies and architectures, multidevice techniques, big scale applications, component
                    based systems, intelligent user interfaces and the latest trends on user experience.
                    <br/>
                    <br/>
                </p>                   
            </div>
            <button type="button" className="boton" id="start"  onClick={this.ChangeCom}>
                Are you ready!
            </button>   
        </section>
    )}else{
    return(
        <div>
            <Challenge Posicion="0" Info={info}/>
        </div>
    )}
  }
}

export default CodingChallenge;
