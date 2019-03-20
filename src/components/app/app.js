import React, { Component } from 'react';

import AppHeader from '../app-header'
import Dashboard from '../../pages/dashboard'
import './app.css';

export default class App extends Component {

  render() {
    return (
      <div className="storage-app">
        <AppHeader />
        
        <div className="container">
          <Dashboard />
        </div>
      </div>
    );
  }
};
