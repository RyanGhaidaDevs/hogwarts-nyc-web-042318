import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import AppContainer from './AppContainer'; 
import HogDisplay from './HogDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">

          < Nav />
          <AppContainer allHogs={hogs} />
      </div>
    )
  }
}

export default App;
