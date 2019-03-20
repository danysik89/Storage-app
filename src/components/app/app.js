import React, { Component } from 'react';

import AppHeader from '../app-header'
import Dashboard from '../../pages/dashboard'
import './app.css';

export default class App extends Component {

  state = {
    storageData: [
      {title: 'Pizza', number: 23, price: 13},
      {title: 'Burger', number: 42, price: 7},
      {title: 'Hot dog', number: 26, price: 6},
      {title: 'Steak', number: 8, price: 89}
    ]
  }

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
