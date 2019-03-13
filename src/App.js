import React, { Component } from 'react';
import './App.css';

import HeaderAppBar from './components/header-app-bar'

class App extends Component {
  render() {
    return (
      <div>
        <HeaderAppBar />
        <div>Hello App</div>
      </div>
    );
  }
}

export default App;
