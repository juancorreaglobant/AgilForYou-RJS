import React, { Component } from 'react';
import CodingChallenge from './Components/CodingChallenge';
import 'firebase/database';

class App extends Component {
  render() { 
      return (
        <div>
           <CodingChallenge/>
        </div>
      );
  }
}

export default App;
