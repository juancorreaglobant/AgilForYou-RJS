import React, { Component } from 'react';
import CodingChallenge from './Components/CodingChallenge';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {
  constructor(props){
    super(props);
   
  }

  render() { 
      return (
        <div>
           <CodingChallenge/>
        </div>
      );
  }
}

export default App;
