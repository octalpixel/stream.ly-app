import React, { Component } from 'react';
import './App.css';

import HomeContent from './components/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeContent/>
      </div>
    );
  }
}

export default App;
