import React, { Component } from 'react';
import './App.css';

import HeaderAppBar from './components/header-app-bar'
import Dashboard from './components/dashboard'
import AddPage from './components/add-page';
import DeletePage from './components/delete-page';


class App extends Component {
  render() {
    return (
      <div className="container">
        <HeaderAppBar />

        <div className="main-wrapper">
          <Dashboard />
        </div>
        
        
      </div>
    );
  }
}

export default App;
