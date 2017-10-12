import React, { Component } from 'react';
import firebase from 'firebase';

class Challenge_IN extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reto1:[
            {titulo:''},
            {descripcion:''}]
            
    
        }
      }

  componentWillMount(){
    var reto1 = this.state.reto1;
   const rootRef = firebase.database().ref().child('Retos_info').child('reto1').child('titulo');
   const desRef =  firebase.database().ref().child('Retos_info').child('reto1').child('descripcion');
   
   rootRef.on('value', (snapshot) =>{
       var reto=this.state.reto1;
       reto[0]=snapshot.val();
        this.setState({
            reto1 : reto
            
        });
      console.log(this.reto1);
      });  
       
      desRef.on('value', (snapshot) =>{
        var retos=this.state.reto1;
        retos[1]=snapshot.val();
         this.setState({
             reto1 : retos
            
        });
      console.log(this.reto1);
      });  
 
    
  }
  render() {
 
     return(
        <div>
           {this.state.reto1}
     </div>
   
     );
  }
}
//holaaaazz
export default Challenge_IN;


